import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Togged." }, { name: "description", content: "Tracking Your Day." }];
};

export default function Index() {
  return (
    <div className="min-h-screen mt-16 mx-48 text-gray-300 flex flex-col gap-2">
      <h1 className="text-xl font-bold">Toggler</h1>
      <Link to="/notes" className="underline" prefetch="intent">
        Notes
      </Link>
    </div>
  );
}
