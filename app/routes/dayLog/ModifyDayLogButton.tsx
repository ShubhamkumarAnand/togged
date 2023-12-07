import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function ModifyDayLogButton({ id }: { id: string }) {
  return (
    <Form method="post" className="flex gap-3">
      <input type="hidden" name="id" value={id} />
      <Button type="submit" name="_action" value="Edit_log">
        Edit
      </Button>
      <Button type="submit" name="_action" value="delete_log">
        Delete
      </Button>
    </Form>
  );
}
