import { Button } from "@/components/ui/button";
import AgreementsList from "@/components/AgreementsList";
import Link from "next/link";
import UserProfile from "@/components/UserProfile";
const Agreements = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen max-w-[1024px] mx-auto ">
      <div className="flex justify-between w-full gap-8 ">
        <section className="w-1/3 p-8">
          <UserProfile />{" "}
        </section>
        <section className="flex flex-col w-2/3 px-4 py-6 ">
          <div className="flex items-center justify-between gap-8 ">
            <h2 className="text-3xl text-slate-900">My Covenants</h2>
            <Link href="/newcovenant">
              <Button>
                <PlusIcon className="w-5 h-5 mr-2" />
                New covenant
              </Button>{" "}
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 mt-8">
            <AgreementsList />
            <AgreementsList />
            <AgreementsList />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Agreements;

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
