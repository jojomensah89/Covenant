import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
