"use client";

import React, { useState } from "react";
<<<<<<< HEAD
import { toast } from "react-toastify";
import { uuid } from "uuidv4";
import { useRouter } from "next/navigation";
=======
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CovenantContent from "@/components/CovenanatContent";
import CovenantSigners from "./CovenantSigners";
import CovenantSettings from "./CovenantSettings";

import { useMultistepForm } from "@/hooks/useMultistepForm";
<<<<<<< HEAD
import { useAccount } from "wagmi";
import useLocalStorage from "@/hooks/useLocalStorage";

const FormWrapper = () => {
  const [data, setData] = useState();
  const signer = useAccount();
  const [setStorage] = useLocalStorage("covenant", "");
  const router = useRouter();

  const [formData, setFormData] = useState<{
    id?: string;
    title: string;
    content: string;
    creator: string;
    observers: number;
    requiredVerifications: string[];
    privacy: string;
    storage: string;
  }>({
    title: "",
    content: "",
    creator: "",
    observers: 1,
    requiredVerifications: [],
    privacy: "",
    storage: "",
  });

  const handleContentChange = (data: { title: string; content: string }) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const handleSignersChange = (formData: {
    creator: string;
    observers: number;
    requiredVerifications: string[];
  }) => {
    setFormData((prevData) => ({ ...prevData, ...formData }));
  };

  const handleSettingsChange = (data: { privacy: string; storage: string }) => {
    console.log(data);
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const handleSubmit = () => {
    // Perform form validation here
    const { content, creator, title, privacy, storage, requiredVerifications } =
      formData;

    console.log("CLICKED", formData);
    if (!content) {
      toast.error("Please enter content.");
      return;
    }

    if (!creator) {
      toast.error("Please enter creator.");
      return;
    }

    if (!title) {
      toast.error("Please enter title.");
      return;
    }

    if (!privacy) {
      toast.error("Please select privacy.");
      return;
    }

    if (!storage) {
      toast.error("Please select storage.");
      return;
    }

    if (requiredVerifications.length < 1) {
      toast.error("Please select at least one verification method.");
      return;
    }

    // No empty fields, proceed with form submission
    console.log("Form data submitted successfully:", formData);
    const id = uuid();
    formData.id = id;

    const stringedVal = JSON.stringify(formData);

    localStorage.setItem("covenant", stringedVal);

    console.log(stringedVal, "in storage");

    router.push("/newcovenant/" + id);

    // Store form data in localStorage using the custom hook
  };

  const { steps, isFirstStep, isLastStep, currentStepIndex, step, next, back } =
    useMultistepForm([
      <CovenantContent handleContentChange={handleContentChange} />,
      <CovenantSigners
        handleSignersChange={handleSignersChange}
        defaultAddress={signer.address}
      />,
      <CovenantSettings handleSettingsChange={handleSettingsChange} />,
=======

// type FormWrapperProps = {
//   title: string;
// };

const FormWrapper = () => {
  const [data, setData] = useState();
  const { steps, isFirstStep, isLastStep, currentStepIndex, step, next, back } =
    useMultistepForm([
      <CovenantContent />,
      <CovenantSigners />,
      <CovenantSettings />,
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
    ]);

  let title = "";
  switch (currentStepIndex + 1) {
    case 1:
      title = "Content";
      break;
    case 2:
      title = "Signers";
      break;
    default:
      title = "Settings";
      break;
  }
  return (
    <>
      <div className="grid w-full max-w-lg gap-4">
        <Card>
          <CardHeader className="flex flex-col items-center p-4">
            <CardTitle className="text-base font-bold">
              {currentStepIndex + 1} / {steps.length}
            </CardTitle>
            <CardDescription className="mt-1">{title}</CardDescription>
          </CardHeader>
          <CardContent className="p-4">{step}</CardContent>
          <CardFooter className="flex justify-end gap-2 p-4">
            {!isFirstStep && (
              <Button onClick={back} type="button">
                Back
              </Button>
            )}
            {!isLastStep ? (
              <Button onClick={next} type="button">
                Next
              </Button>
            ) : (
<<<<<<< HEAD
              <Button onClick={handleSubmit} type="button">
=======
              <Button onClick={next} type="button">
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
                Finish
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default FormWrapper;
