import PrivateOption from "./PrivateOption";
import PublicOption from "./PublicOption";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
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
          <div className="flex items-center gap-2">
            <RadioGroup
              className="flex items-center gap-2"
              defaultValue="ipfs"
              id="storage"
            >
            
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ipfs" id="ipfs" />
                <Label htmlFor="ipfs"> IPFS</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CovenantSettings;
