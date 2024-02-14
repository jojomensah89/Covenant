import { ConnectButton } from "@rainbow-me/rainbowkit";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/moving-border";
import { Card } from "@/components/ui/card";
import AgreementsList from "@/components/AgreementsList";
const Agreements = () => {
  return (
    <div className="flex justify-between w-4/5 gap-8 mx-auto border border-red-800">
      <section className="w-1/3 p-8 border border-blue-800">
        <Button>Card</Button>
      </section>
      <section className="flex flex-col w-2/3 px-4 py-6 border border-yellow-400 ">
        <div className="flex items-center justify-between gap-8 border border-yellow-800">
          <h2>My Agreements</h2>
          <Button>New Agreement</Button>
        </div>
        <div className="flex flex-col items-center gap-4 mt-8">
          <AgreementsList /> 
          <AgreementsList /> 
          <AgreementsList /> 
        </div>
      </section>
    </div>
  );
};

export default Agreements;
