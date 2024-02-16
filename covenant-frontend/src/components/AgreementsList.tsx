import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LockIcon from "@/assets/LockIcon";
const AgreementsList = () => {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-[12px]">
                Created: <span className="text-black ">Apr 24,2023</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-2 py-1 text-sm text-white bg-green-400 rounded-full ">
                signed
              </div>
              <LockIcon className="w-6 h-6" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>Stellar Partnership</CardTitle>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <h3 className="text-slate-500 text-[12px]">Signers:</h3>
              <p className="text-slate-900 text-[12px]">4</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-slate-500 text-[12px]">Signed:</h3>
              <p className="text-slate-900 text-[12px]">2</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-slate-500 text-[12px]">Observers:</h3>
              <p className="text-slate-900 text-[12px]">1</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-[12px] text-slate-500">Access:</h3>
              <p className="text-slate-900 text-[12px]">Private</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AgreementsList;

