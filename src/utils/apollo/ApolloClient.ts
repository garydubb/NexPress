/*eslint complexity: ["error", 6]*/
import {
  ApolloClient,
  ApolloLink,
  DefaultOptions,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */
export const middleware = new ApolloLink((operation, forward) => {
  /**
   * If session data exist in local storage, set value as session header.
   * Here we also delete the session if it is older than 24 hours
   */
  const session =
    typeof window !== 'undefined' ? localStorage.getItem('woo-session') : null;

  if (session) {
    operation.setContext(() => ({
      headers: {
        //Authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`,
        'woocommerce-session': `Session ${session}`,
      },
    }));
  }

  // const token =
  //   typeof window !== 'undefined' ? localStorage.getItem('jwt-token') : null;

  // if (token) {
  //   operation.setContext(() => ({
  //     headers: {
  //       Authorization: token ? `Bearer ${token}` : '',
  //     },
  //   }));
  // }

  return forward(operation);
});
/**
 * Afterware operation.
 *
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const afterware = new ApolloLink((operation, forward) =>
  forward(operation).map((response) => {
    /**
     * Check for session header and update session in local storage accordingly.
     */
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    const session = headers.get('woocommerce-session');
    if (session && typeof window !== 'undefined') {
      if ('false' === session) {
        // Remove session data if session destroyed.
        localStorage.removeItem('woo-session');
        // Update session new data if changed.
      } else if (!localStorage.getItem('woo-session')) {
        localStorage.setItem('woo-session', session);
      }
    }

    return response;
  }),
);

const isDevelopmentEnvironment =
  process.env.NODE_ENV === 'development' ? true : false;

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache' as const,
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache' as const,
    errorPolicy: 'all',
  },
};

const clientSide = typeof window !== 'undefined';

// Apollo GraphQL client.
const client = new ApolloClient({
  ssrMode: clientSide,
  link: middleware.concat(
    afterware.concat(
      createHttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
        fetch,
      }),
    ),
  ),
  defaultOptions: defaultOptions,
  cache: !isDevelopmentEnvironment
    ? new InMemoryCache()
    : new InMemoryCache({ typePolicies: { Query: { fields: {} } } }), // Use an empty typePolicies object to disable caching
});

export default client;
