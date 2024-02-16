"use client";

import React from "react";

type FormWrapperProps = {
  title: string;
  children: React.ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

export default FormWrapper;
