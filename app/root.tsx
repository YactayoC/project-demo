import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./global.css";

export const links: Route.LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let mensaje = "¡Ups!";
  let detalles = "Ocurrió un error inesperado.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    mensaje = error.status === 404 ? "404" : "Error";
    detalles =
      error.status === 404
        ? "La página solicitada no pudo ser encontrada."
        : error.statusText || detalles;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    detalles = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-3xl font-semibold text-red-600 mb-4">{mensaje}</h1>
        <p className="text-lg mb-4">{detalles}</p>
        {stack && (
          <div className="bg-gray-200 p-4 rounded-md overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">
              <code>{stack}</code>
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
