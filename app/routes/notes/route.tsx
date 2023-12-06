import { type ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/db/prisma";
import formatPrismaDate from "~/lib/dateFormatter";
import AddNotes from "~/routes/notes/AddNotes";
import DeleteButton from "~/routes/notes/DeleteButton";

export async function loader() {
  const notes = await db.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return json({ notes });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);
  if (_action === "create") {
    await db.note.create({
      data: {
        category: formData.get("category") as string,
        description: formData.get("description") as string,
      },
    });
  }
  if (_action === "delete") {
    await db.note.delete({
      where: {
        id: formData.get("id") as string,
      },
    });
  }
  return redirect("/notes");
}

export default function Notes() {
  const { notes } = useLoaderData<typeof loader>();
  return (
    <main className="mt-16 mx-36 flex flex-col gap-3 min-h-screen">
      <AddNotes />
      <h1 className="text-3xl font-semibold text-gray-300 mt-10 underline">List of Notes</h1>
      <div className="flex flex-col gap-2">
        {notes.map((note) => (
          <div className="text-gray-500" key={note.id}>
            <div className="flex justify-between items-center max-w-xl">
              <h3 className="text-gray-300 text-lg font-bold">{formatPrismaDate(note.createdAt)}</h3>
              <DeleteButton id={note.id} />
            </div>
            <p className="text-xs">{note.category}</p>
            <p className="text-lg text-white">{note.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
