import PrivateOption from "./PrivateOption";
import PublicOption from "./PublicOption";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "./ui/button";

const CovenantSettings = ({
  handleSettingsChange,
}: {
  handleSettingsChange: (formData: any) => void;
}) => {
  const [formData, setFormData] = useState({
    privacy: "",
    storage: "",
  });

  const handlePrivacyChange = (privacy: string) => {
    setFormData((prevData) => ({
      ...prevData,
      privacy, // Update privacy value based on user selection
    }));
  };

  const handleStorageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const storageValue = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      storage: storageValue, // Update storage value based on user selection
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    handleSettingsChange(formData);
  };

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit}>
        <section className="">
          <p className="mb-2 text-sm text-center">Covenant Privacy</p>
          <div className="flex items-center justify-center gap-4">
            <PublicOption
              handlePrivacyChange={handlePrivacyChange}
              isClicked={formData.privacy === "public"}
            />
            <PrivateOption
              handlePrivacyChange={handlePrivacyChange}
              isClicked={formData.privacy === "private"}
            />
          </div>
        </section>
        <section>
          <p className="mb-2 text-sm text-center">Covenant Storage</p>
=======
const CovenantSettings = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="">
        <p className="mb-2 text-sm text-center">Covenant Privacy</p>
        <div className="flex items-center justify-center gap-4">
          <PublicOption />
          <PrivateOption />
        </div>
      </section>
      <section>
        <p className="mb-2 text-sm text-center">Covenant Storage</p>
        <div>
          {" "}
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
          <div className="flex items-center gap-2">
            <RadioGroup
              className="flex items-center gap-2"
              defaultValue="ipfs"
              id="storage"
<<<<<<< HEAD
              onChange={handleStorageChange} // Handle storage selection change
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ipfs" id="ipfs" />
                <Label htmlFor="ipfs">IPFS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cloud" id="cloud" />
                <Label htmlFor="cloud">Cloud</Label>
              </div>
            </RadioGroup>
          </div>
        </section>
        <Button type="submit" className="mt-5">
          Submit
        </Button>
      </form>
=======
            >
            
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ipfs" id="ipfs" />
                <Label htmlFor="ipfs"> IPFS</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
    </div>
  );
};

export default CovenantSettings;
