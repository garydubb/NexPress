export type ShopifyAccessToken = {
  accessToken: string;
  authToken: string;
  expiresAt?: Date;
};

export type AuthSession = {
  accessToken?: string;
  idToken?: string;
  refreshToken?: string;
  shopifyToken?: ShopifyAccessToken;
  expiresAt?: number;
};

export type Customer = {
  viewer: {
    name: string;
    nicename: string;
    firstName: string;
    lastName: string;
    displayName: string;
    email: string;
    phone: string;
    emailVerified: boolean;
    phoneNumberVerified: boolean;
    isMigratedUser: boolean;
    customerId?: number;
    isMakroClickUser: boolean;
    shopifyUserId: string;
  };
};

export interface SessionUser extends AuthSession {
  data: Customer;
}
export type SesstionStatusTypes =
  | 'unauthenticated'
  | 'loading'
  | 'authenticated';
export type SessionContextTypes = {
  user: Customer | null;
  status: SesstionStatusTypes;
  isLoggedIn: boolean;
  updateAndGetUserSession: () => Promise<SessionUser | null>;
};

export interface SessionContextProviderInterface {
  children: React.ReactNode;
}
