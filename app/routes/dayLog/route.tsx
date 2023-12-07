import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/db/prisma";
import { formatPrismaDate } from "~/lib/dateFormatter";
import CreateDayLogButton from "~/routes/dayLog/CreateDayLogButton";

export async function loader() {
  const logs = await db.day.findMany();
  return json({ logs });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);
  if (_action === "create_log") {
    await db.day.create({
      data: {
        description: "",
      },
    });
  }
  return redirect("/dayLog");
}

export default function DailyLog() {
  const { logs } = useLoaderData<typeof loader>();
  return (
    <main className="min-h-screen text-gray-300">
      <p>Daily Log</p>
      <CreateDayLogButton />
      <div className="flex flex-col gap-3">
        {logs.map((log) => (
          <Link to={`/dayLog/${log.id}`} className="border-2 rounded-md p-3 max-w-xl" key={log.id}>
            <p>{formatPrismaDate(log.createdAt)}</p>
            <p>{log.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
