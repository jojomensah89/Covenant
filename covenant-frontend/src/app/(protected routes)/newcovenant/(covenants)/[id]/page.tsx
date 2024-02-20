"use client";
import React, { useEffect, useRef } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import LockIcon from "@/assets/LockIcon";
import CardComponent from "@/components/CardComponent";

export default async function NewCovenant({
  params,
}: {
  params: { id: string };
}) {
  const storageRef = useRef<{
    title: string;
    content: string;
    creator: string;
    observers: number;
    requiredVerifications: string[];
    privacy: string;
    storage: string;
  }>();
  useEffect(() => {
    // Call getStorage to retrieve data from localStorage
    const valuefromStore = localStorage.getItem("covenant");


    const data = valuefromStore && JSON.parse(valuefromStore);
    storageRef.current = data;
  }, []);

  console.log(storageRef.current, "from storage");

  const accountInstance = useAccount();
  return (
    <div className="w-full min-h-screen flex justify-center py-20">
      <div className="grid md:grid-cols-3 md:gap-3 w-3/4">
        <div className="md:col-start-1 md:col-end-3">
          <div className="font-bold text-4xl mb-5 text-gray-800 ">
            {storageRef?.current?.title}
          </div>

          <div className=" mb-5 flex justify-between" style={{ width: "100%" }}>
            <div className="gap-x-10 flex items-center">
              <div className="bg-green-500 text-white rounded-lg px-4 py-2">
                Signed
              </div>
              <div className="flex items-center space-x-2 bg-gray-700 text-gray-300 rounded-lg px-4 py-2">
                <LockIcon className="w-4 h-4" />
                <span>Access: Private</span>
              </div>
            </div>
            <div className="gap-x-4">
              <div className="gap-x-10 flex items-center">
                <div className="bg-gray-500 text-[#eee] rounded-lg px-4 py-2">
                  <LinkIcon />
                </div>
                <div className="flex items-center space-x-2 bg-gray-700 text-gray-300 rounded-lg px-4 py-2">
                  <span>Download</span>
                </div>
              </div>
            </div>
          </div>

          <CardComponent>
            <h3 className="mb-8 text-3xl py-5 border-b-2">Agreement</h3>
            <div className="text-base">{storageRef.current?.content}</div>
            <div className="mt-10 text-green-400 text-1xl">Show more</div>
          </CardComponent>

          <CardComponent>
            <h3 className="mb-8 text-3xl py-5 border-b-2">List of Signers</h3>
            <div className="flex justify-evenly ">
              {Array.from(
                [
                  "Signer's Name",
                  "Signer's Address",
                  "Signature status",
                  "Proof of signature",
                ].map((data, index) => {
                  return <p>{data}</p>;
                })
              )}
            </div>
          </CardComponent>
          {/* <CardComponent>

          </CardComponent> */}

          <CardComponent>
            <h3 className="mb-8 text-3xl py-5">Observers/ Witnesses</h3>
            <div className="flex justify-center items-center">
              <AvatarIcon />
            </div>
          </CardComponent>
        </div>
        <div className="md:col-start-3 md:col-end-4">
          <Card style={{ fontSize: "2.5rem" }}>
            <CardContent
              className="grid gap-2 p-4"
              style={{ fontSize: "1.5rem" }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-slate-400">
                  Creation Date
                </h3>
                <p className="text-sm/relaxed text-slate-800">
                  {new Date().getTime().toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-slate-400">
                  Creator
                </h3>
                <p className="text-sm/relaxed text-slate-800">
                  {accountInstance.address}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-slate-400">
                  Covenant Proof{" "}
                </h3>
                <p className="text-sm/relaxed text-slate-800 font-semibold">
                  -
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-slate-400">
                  Location{" "}
                </h3>
                <p className="text-sm/relaxed text-slate-800  font-semibold">
                  {storageRef.current?.storage}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-slate-400">
                  Access{" "}
                </h3>
                <p className="text-sm text-slate-800 font-semibold">Private</p>
              </div>
              <Button className="w-full">Edit Witnesses</Button>
              <Button className="w-full bg-red-500">Break Covenant</Button>
              <Button className="w-full bg-blue-500">Sign Covenant</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function LinkIcon(props: any) {
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
      style={{ width: "2.5rem", height: "2.5rem" }}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function AvatarIcon() {
  return (
    <svg height="240" width="240">
      <circle
        cx="120"
        cy="120"
        r="110"
        fill="none"
        stroke="#cccccc"
        stroke-width="20"
      ></circle>
      <text fill="#000000" font-size="120" text-anchor="middle" x="120" y="160">
        KH
      </text>
    </svg>
  );
}
