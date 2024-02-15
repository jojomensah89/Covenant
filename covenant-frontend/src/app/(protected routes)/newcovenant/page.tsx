
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="grid w-full max-w-sm gap-4">
        <Card>
          <CardHeader className="flex flex-col items-center p-4">
            <CardTitle className="text-base font-bold">Create</CardTitle>
            <CardDescription className="mt-1">
              Create a new covenant
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
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
                    <SelectItem value="snapshot">Import from Smapshot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end p-4">
            <Button>Next Step</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
