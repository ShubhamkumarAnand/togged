import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Togged." }, { name: "description", content: "Tracking Your Day." }];
};

export default function Index() {
  return (
    <div className="text-green-700 font-bold text-xl">
      <h1>toggler</h1>
    </div>
  );
}
