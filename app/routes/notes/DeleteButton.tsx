import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <Form method="post">
      <Input name="id" value={id} type="hidden" />
      <Button name="_action" value="delete">
        Delete
      </Button>
    </Form>
  );
}
