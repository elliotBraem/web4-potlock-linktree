import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Link,
  Outlet,
  createRootRouteWithContext
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "@/components/header";
import NearProvider from "@/contexts/near";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>404 not found</p>
        <Link to="/">Go home</Link>
      </div>
    );
  }
});

function RootComponent() {
  return (
    <>
      <NearProvider>
        <div className="min-h-screen bg-gradient-to-br from-orange-400 to-purple-800">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-end p-1">
              <a href="https://github.com/NEARBuilders/decentralized-social" target="_blank" className="text-white">
                view source
              </a>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <Header />
              <main className="container mx-auto px-4 py-8">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </NearProvider>
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
