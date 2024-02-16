import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import LockIcon from "@/assets/LockIcon";
export default function PrivateOption() {
  return (
    <div className="flex items-center justify-center h-full">
      <Card>
        <CardHeader className="p-4 text-center">
          <div className="flex items-center justify-center">
            <LockIcon className="w-6 h-6" />
          </div>
          <CardTitle>Private</CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-center">
          <p className="text-sm">
            Accessed publicly by Signers <br />
            or witnessers
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
