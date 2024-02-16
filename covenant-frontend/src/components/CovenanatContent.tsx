
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";

export default function CovenantContent() {
  return (
      
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Title</Label>
                <Input
                  className="w-full"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upload">Upload Agreement</SelectItem>
                    <SelectItem value="covenant">Enter Covenant</SelectItem>
                    <SelectItem value="snapshot">
                      Import from Smapshot
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          
  );
}
