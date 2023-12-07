import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";

const CreateDayLogButton = () => {
  return (
    <div>
      <Form method="post">
        <Button type="submit" name="_action" value="create_log">
          Create Today Log
        </Button>
      </Form>
    </div>
  );
};

export default CreateDayLogButton;
