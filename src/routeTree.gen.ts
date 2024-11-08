/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as LoginImport } from "./routes/login";
import { Route as IndexImport } from "./routes/index";
import { Route as ProfileAccountIdImport } from "./routes/profile/$accountId";
import { Route as PostPostIdImport } from "./routes/post/$postId";

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => rootRoute
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute
} as any);

const ProfileAccountIdRoute = ProfileAccountIdImport.update({
  id: "/profile/$accountId",
  path: "/profile/$accountId",
  getParentRoute: () => rootRoute
} as any);

const PostPostIdRoute = PostPostIdImport.update({
  id: "/post/$postId",
  path: "/post/$postId",
  getParentRoute: () => rootRoute
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/login": {
      id: "/login";
      path: "/login";
      fullPath: "/login";
      preLoaderRoute: typeof LoginImport;
      parentRoute: typeof rootRoute;
    };
    "/post/$postId": {
      id: "/post/$postId";
      path: "/post/$postId";
      fullPath: "/post/$postId";
      preLoaderRoute: typeof PostPostIdImport;
      parentRoute: typeof rootRoute;
    };
    "/profile/$accountId": {
      id: "/profile/$accountId";
      path: "/profile/$accountId";
      fullPath: "/profile/$accountId";
      preLoaderRoute: typeof ProfileAccountIdImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/login": typeof LoginRoute;
  "/post/$postId": typeof PostPostIdRoute;
  "/profile/$accountId": typeof ProfileAccountIdRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/login": typeof LoginRoute;
  "/post/$postId": typeof PostPostIdRoute;
  "/profile/$accountId": typeof ProfileAccountIdRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/login": typeof LoginRoute;
  "/post/$postId": typeof PostPostIdRoute;
  "/profile/$accountId": typeof ProfileAccountIdRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: "/" | "/login" | "/post/$postId" | "/profile/$accountId";
  fileRoutesByTo: FileRoutesByTo;
  to: "/" | "/login" | "/post/$postId" | "/profile/$accountId";
  id: "__root__" | "/" | "/login" | "/post/$postId" | "/profile/$accountId";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  LoginRoute: typeof LoginRoute;
  PostPostIdRoute: typeof PostPostIdRoute;
  ProfileAccountIdRoute: typeof ProfileAccountIdRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRoute,
  PostPostIdRoute: PostPostIdRoute,
  ProfileAccountIdRoute: ProfileAccountIdRoute
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/post/$postId",
        "/profile/$accountId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/post/$postId": {
      "filePath": "post/$postId.tsx"
    },
    "/profile/$accountId": {
      "filePath": "profile/$accountId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
