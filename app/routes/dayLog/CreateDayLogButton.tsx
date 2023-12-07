import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";

const CreateDayLogButton = () => {
  return (
    <div className="flex justify-end my-5">
      <Form method="post">
        <Button type="submit" name="_action" value="create_log" aria-label="create log for today">
          Create Log
        </Button>
      </Form>
    </div>
  );
};

export default CreateDayLogButton;
