## NexPress.com

The NexPress.com is a web application that combines the power of Next.js, and Headless WordPress to provide a robust and feature-rich experience. The application leverages the benefits of server-side rendering and the flexibility of WordPress as a backend CMS to create a fast and dynamic websites.

## Technologies Used

The project utilizes the following technologies:

#### Next.js:

Next.js is a popular React framework that enables server-side rendering and provides an efficient development environment for building scalable web applications.

#### Headless WordPress:

WordPress, a widely adopted content management system, is used as the backend for this project. In a headless setup, WordPress is used solely as a data source, providing content via a RESTful API or a GraphQL API(We are using Graphql).

#### WP-GraphQL:

WP-GraphQL is a WordPress plugin that extends the default WordPress REST API with GraphQL support. It enables querying data from WordPress using GraphQL syntax, allowing for efficient and flexible data retrieval and manipulation.

# Getting Started

To get started with the NexPress, follow these steps:

- Clone the repository: git clone https://github.com/garydubb/Nexpress.git
- Install dependencies: npm install or yarn
- Configure environment variables: Create a .env file based on the provided .env.example file and update the necessary values.
- Start the development server: npm run dev or yarn run dev
## Configuration

### Step 1. Prepare your WordPress site

First, you need a WordPress site. There are many solutions for WordPress hosting, such as [WP Engine](https://wpengine.com/) and [WordPress.com](https://wordpress.com/).

Once the site is ready, you'll need to install the [WPGraphQL](https://www.wpgraphql.com/) plugin. It will add GraphQL API to your WordPress site, which we'll use to query the posts. Follow these steps to install it:

- Download the [WPGraphQL repo](https://github.com/wp-graphql/wp-graphql) as a ZIP archive.
- Inside your WordPress admin, go to **Plugins** and then click **Add New**.

![Add new plugin](./docs/plugins-add-new.png)

- Click the **Upload Plugin** button at the top of the page and upload the WPGraphQL plugin.

![Upload new plugin](./docs/plugins-upload-new.png)

- Once the plugin has been added, activate it from either the **Activate Plugin** button displayed after uploading or from the **Plugins** page.

![WPGraphQL installed](./docs/plugin-installed.png)

#### GraphiQL

The [WPGraphQL](https://www.wpgraphql.com/) plugin also gives you access to a GraphQL IDE directly from your WordPress Admin, allowing you to inspect and play around with the GraphQL API.

![WPGraphiQL page](./docs/wp-graphiql.png)

### Step 2. Populate Content

Inside your WordPress admin, go to **Posts** and start adding new posts:

- We recommend creating at least **2 posts**
- Use dummy data for the content
- Pick an author from your WordPress users
- Add a **Featured Image**. You can download one from [Unsplash](https://unsplash.com/)
- Fill the **Excerpt** field

![New post](./docs/new-post.png)

When you’re done, make sure to **Publish** the posts.

> **Note:** Only **published** posts and public fields will be rendered by the app unless [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode) is enabled.

# Environment Variables:
Rename .env.example to .env.local and update the variables to match your WordPress setup.

NEXT_PUBLIC_GRAPHQL_URL : 
Description: This variable specifies the GraphQL endpoint URL of the WordPress backend.
Value: http://example.com/graphql (example value)
Usage: This URL is used by the Next.js application to communicate with the WordPress backend via GraphQL queries and mutations.

WORDPRESS_AUTH_REFRESH_TOKEN
Description: This variable contains the refresh token used for authenticating with the WordPress backend.
Value: abcccc (example value)
Usage: The refresh token is utilized for authenticating requests to the WordPress backend, particularly for operations requiring authorization, such as fetching private data or performing mutations.

NEXT_PUBLIC_REVALIDATE_TIME
Description: This variable specifies the revalidation time (in seconds) for Next.js data fetching methods such as getStaticProps and getServerSideProps.
Value: 2 (example value)
Usage: Next.js uses this value to determine how frequently to re-fetch data from the backend. Setting a shorter revalidation time can result in more frequent data updates on the client side, while a longer revalidation time can improve performance by reducing unnecessary data fetching.

# Code Formatting and Quality Tools

In order to set a standard that we are using be used by all contributors to the project to keep the code style consistent and basic best practices followed we will be implementing two tools:

- [eslint](https://eslint.org/) - For best practices on coding standards
- [prettier](https://prettier.io/) - For automatic formatting of code files

### ESLint

Settings for ESLint

`.eslintrc.js`

```js
{
  "extends": ["next", "next/core-web-vitals", "eslint:recommended"],
  "globals": {
    "React": "readonly"
  },
  "rules": {
    "no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
  }
}
```

# Folder Structure

The repository has the following folder structure:
In order to set a standard that will be used by all contributors to the project to keep the code style consistent and basic best practices followed we will be implementing two tools:

- eslint - For best practices on coding standards
- prettier - For automatic formatting of code files

How to Use ESlint?

To do autofix ESLint fix

`yarn run lint -- --fix`

To do check ESLint

`yarn lint`

You should get a message like:

```
✔ No ESLint warnings or errors
Done in 1.47s.
```

If you get any errors then ESLint is quite good at explaining clearly what they are. If you encounter a rule you don't like you can disable it in "rules" by simply setting it to 1 (warning) or 0 (ignore) like so:

```json
  "rules": {
    "no-unused-vars": 0, // As example: Will never bug you about unused variables again
  }
```

### Prettier

Prettier will take care of automatically formatting our files for us. Let's add it to the project now.

It's only needed during development, so I'll add it as a `devDependency` with `-D`

```
yarn add -D prettier
```

It is recommended you get the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) so that VS Code can handle the formatting of the files for you and you don't need to rely on the command line tool. Having it installed and configured in your project means that VSCode will use your project's settings, so it's still necessary to add it here.

There are two files in the root:

`.prettierrc`

```.prettierrc
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "always"
}

```

Those values are used to ingnore following folders.

`.prettierignore`

```
.yarn
.next
dist
node_modules
```

In that file I've placed a list of directories that I don't want Prettier to waste any resources working on. You can also use patterns like \*.html to ignore groups of types of files if you choose.

Now we add a new script to `package.json` so we can run Prettier:

`package.json`

```
  ...
  "scripts: {
    ...
    "prettier": "prettier --write ."
  }
```

You can now run

```
yarn prettier
```

to automatically format, fix and save all files in your project you haven't ignored.

## VS Code Configuration

Now that we have implemented ESLint and Prettier we can take advantage of some convenient VS Code functionality to have them be run automatically.

Create a directory in the root of your project called `.vscode` and inside a file called `settings.json`. This will be a list of values that override the default settings of your installed VS Code.

The reason we want to place them in a folder for the project is that we can set specific settings that only apply to this project, and we can share them with the rest of our team by including them in the code repository.

Within `settings.json` we will add the following values:

`.vscode/settings.json`

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true
  }
}
```

The above will tell VS Code to use your Prettier extension as the default formatter (you can override manually if you wish with another one) and to automatically format your files and organize your import statements every time you save.

Very handy stuff and just another thing you no longer need to think about so you can focus on the important things like solving business problems.

### A typical top-level directory layout

Directory structure can really make or break a project in the long term when it gets out of control, especially when fellow team members have to spend unnecessary time trying to guess where to put things (or find things).

I personally like to take a fairly simplistic approach, keep things separated basically in a class model/view style. We will be using three primary folders:

    .
    ├── public                    # Files in this folder are publicly available
    │   ├── next.svg
    │   └── vercel.svg
    ├── src
    │   ├── components            # Reusable React components
    │   │   ├── Header.js
    │   │   ├── Footer.js
    │   │   └── ...
    │   ├── pages                 # Next.js pages
    │   │   ├── index.js
    │   │   ├── about.js
    │   │   ├── contact.js
    │   │   └── ...
    │   └── ...                   # Other project-specific files
    └── ...

Directory Structure planning is under review to handle everything. We are going to use src folder to sort all directory.

- src/components - The individual UI components that make up the app will live in here
- src/pages - Will be the actual routes/pages as per the required Next.js structure.

We will have other folders in addition to this to support the project, but the core of almost everything that makes up the unique app that we are building will be housed src directory.

More Documentation Coming Soon
