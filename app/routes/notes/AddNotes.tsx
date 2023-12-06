import { Form } from "@remix-run/react";
import { Textarea } from "~/components/ui/textarea";
import NotesCategory from "~/routes/notes/NotesCategory";

export default function AddNotes() {
  return (
    <Form method="post" className="flex flex-col gap-2 max-w-xl">
      <p className="text-lg font-bold text-gray-300">Add New Note</p>
      <Textarea name="description" placeholder="Your Note.." className="text-lg p-3" aria-label="notes" />
      <NotesCategory />
      <button
        type="submit"
        className="bg-blue-700 p-2 rounded-md text-lg text-gray-100 font-semibold"
        name="_action"
        value="create">
        Add Notes
      </button>
    </Form>
  );
}
