import { json, redirect } from "@remix-run/node";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/db/prisma";
import { getTime } from "~/lib/dateFormatter";
import AddNotes from "~/routes/dayLog_.$dayId/AddNotes";
import DeleteButton from "~/routes/dayLog_.$dayId/DeleteButton";

export async function loader({ params }: LoaderFunctionArgs) {
  const notes = await db.note.findMany({
    where: {
      dayLogId: params.dayId as string,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return json({ notes });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);
  const dayId = (await params.dayId) as string;
  if (_action === "create") {
    await db.note.create({
      data: {
        category: formData.get("category") as string,
        description: formData.get("description") as string,
        dayLogId: params.dayId as string,
      },
    });
  }
  if (_action === "delete") {
    await db.note.delete({
      where: {
        dayLogId: params.dayId as string,
        id: formData.get("id") as string,
      },
    });
  }
  return redirect(`/dayLog/${dayId}`);
}

export default function Notes() {
  const { notes } = useLoaderData<typeof loader>();
  return (
    <main className="mt-16 lg:mx-60 flex flex-col gap-3 min-h-screen">
      <h1 className="font-bold text-4xl mb-5 text-gray-300">Togged</h1>
      <AddNotes />
      <h1 className="text-3xl font-semibold text-gray-300 mt-10 underline">List of Notes</h1>
      <div className="flex flex-col gap-2">
        {notes.map((note) => (
          <div className="text-gray-500" key={note.id}>
            <div className="flex justify-between items-center max-w-xl">
              <h3 className="text-gray-300 text-sm font-semibold">{getTime(note.updatedAt)}</h3>
              <DeleteButton id={note.id} />
            </div>
            <p className="text-xs -mt-2 mb-2">{note.category}</p>
            <p className="text-xl text-white">{note.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
