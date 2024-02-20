import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import LockIcon from "@/assets/LockIcon";
import { useState } from "react";
export default function PrivateOption({
  handlePrivacyChange,
  isClicked,
}: {
  handlePrivacyChange: (data: string) => void;
  isClicked: boolean;
}) {
  return (
    <div
      className="flex items-center justify-center h-full"
      onClick={() => handlePrivacyChange("private")}
    >
      <Card className={`${isClicked ? "border-green-900" : ""}`}>
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
