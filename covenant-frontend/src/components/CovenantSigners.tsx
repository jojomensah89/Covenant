"use client";
import React, { useState } from "react";
import CreatableReactSelect from "react-select/creatable";
import { MultiValue } from "react-select";

import { Label } from "@/components/ui/label";

const CovenantSigners = () => {
  //   const [signers, setSigners] = useState<MultiValue>({});
  return (
    <div className="flex flex-col">
      <div className="space-y-2">
        <Label htmlFor="">Signers</Label>
        <CreatableReactSelect isMulti />
      </div>
      <div className="mt-2 space-y-2">
        <Label htmlFor="">Observers</Label>
        <CreatableReactSelect isMulti />
      </div>
    </div>
  );
};

export default CovenantSigners;
