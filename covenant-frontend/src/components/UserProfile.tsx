"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { useEffect } from "react";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";
import { Button } from "./ui/button";
import { useAccount } from "wagmi";
import Link from "next/link";
export default function UserProfile() {
  const account = useAccount();

  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="pb-0">
        {/* <ConnectButton
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "avatar",
          }}
          chainStatus="none"
          showBalance={false}
        /> */}
        <Avatar className="w-24 h-24 mx-auto">
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <CardTitle className="text-center">Anonymous</CardTitle>
        <CardDescription className="text-sm text-center">
          {account.address?.substring(0, 20)}....
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2 py-6">
        {/* <Link href="/identities"> */}
        <Button className="mb-4">
          {" "}
          <GlassesIcon className="w-6 h-6 mr-2" />
           Identities
        </Button>
        {/* {anonAadhaar?.status === "logged-out" && ( */}
          <div className="flex gap-2 items-center">
            <LogInWithAnonAadhaar />
            <p>{anonAadhaar?.status}</p>
          </div>
        {/* )} */}
        {/* </Link> */}
      </CardContent>
    </Card>
  );
}

function GlassesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
    </svg>
  );
}
