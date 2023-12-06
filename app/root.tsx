import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import tailwindcss from "~/globals.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindcss },
  { rel: "icon", type: "image/xml+svg", href: "/favicon.svg" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-500 via-gray-700 to-black">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
