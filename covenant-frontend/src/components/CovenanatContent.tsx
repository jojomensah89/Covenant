import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

export default function CovenantContent() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Title</Label>
        <Input
          className="w-full"
          id="name"
          placeholder="Gold Change Proposal"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea placeholder="Enter Content here." />
      </div>
    </form>
  );
}
