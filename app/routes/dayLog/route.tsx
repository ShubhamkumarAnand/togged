import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/db/prisma";
import { formatPrismaDate } from "~/lib/dateFormatter";
import CreateDayLogButton from "~/routes/dayLog/CreateDayLogButton";
import ModifyDayLogButton from "~/routes/dayLog/ModifyDayLogButton";

export async function loader() {
  const logs = await db.day.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
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
  if (_action === "delete_log") {
    await db.day.delete({
      where: {
        id: formData.get("id") as string,
      },
    });
  }
  return redirect("/dayLog");
}

export default function DailyLog() {
  const { logs } = useLoaderData<typeof loader>();
  return (
    <main className="min-h-screen text-gray-300 lg:px-60 mt-16">
      <p className="font-medium text-3xl border-b-2 w-fit">Daily Log</p>
      <CreateDayLogButton />
      <div className="flex flex-col gap-3">
        {logs.map((log) => (
          <div className="border-[1px] border-b-[5px] rounded-md p-3 max-w-3xl" key={log.id}>
            <div className="flex justify-between items-center">
              <Link prefetch="intent" to={`/dayLog/${log.id}`} className="text-lg">
                {formatPrismaDate(log.createdAt)}
              </Link>
              <ModifyDayLogButton id={log.id} />
            </div>
            <p className="text-2xl font-medium">{log.description || "Yet to add description"}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
