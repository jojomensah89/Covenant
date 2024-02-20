import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CovenantContent = ({
  handleContentChange,
}: {
  handleContentChange: (formData: { title: string; content: string }) => void;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    handleContentChange(formData); // Pass formData to the parent component
  };

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Title</Label>
        <Input
          className="w-full"
          id="name"
          name="title"
          placeholder="Gold Change Proposal"
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          name="content"
          placeholder="Enter Content here."
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default CovenantContent;
