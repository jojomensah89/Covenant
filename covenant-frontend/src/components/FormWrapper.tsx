"use client";

import React, { useState } from "react";
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

import { useMultistepForm } from "@/app/hooks/useMultistepForm";

type FormWrapperProps = {
  title: string;
};

const FormWrapper = ({ title }: FormWrapperProps) => {
  const [data, setData] = useState();
  const { steps, isFirstStep, isLastStep, currentStepIndex, step, next, back } =
    useMultistepForm([
      <CovenantContent />,
      <CovenantSigners />,
      <CovenantSettings />,
    ]);
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
              <Button onClick={next} type="button">
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
