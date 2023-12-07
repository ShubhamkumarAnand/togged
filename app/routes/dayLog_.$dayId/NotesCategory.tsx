import { Label } from "@radix-ui/react-label";

export default function NotesCategory() {
  return (
    <div className="flex gap-2 text-gray-100 text-lg fill-white">
      <input type="radio" id="logger" name="category" value="logger" defaultChecked />
      <Label htmlFor="logger">Logger</Label>
      <input type="radio" id="resource" name="category" value="resource" />
      <Label htmlFor="resource">Resource</Label>
      <input type="radio" id="default" name="category" value="default" />
      <Label htmlFor="default">Default</Label>
    </div>
  );
}
