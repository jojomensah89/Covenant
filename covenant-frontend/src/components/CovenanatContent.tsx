<<<<<<< HEAD
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

=======
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

export default function CovenantContent() {
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Title</Label>
        <Input
          className="w-full"
          id="name"
<<<<<<< HEAD
          name="title"
          placeholder="Gold Change Proposal"
          onChange={handleChange}
=======
          placeholder="Gold Change Proposal"
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
<<<<<<< HEAD
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
=======
        <Textarea placeholder="Enter Content here." />
      </div>
    </form>
  );
}
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
