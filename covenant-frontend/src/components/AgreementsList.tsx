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
        <CardHeader className="flex justify-between">
          <div>
            Created: <span className="text-black ">Apr 24,2023</span>
          </div>
          <div>
            <div>signed</div>
            <div>lock icon</div>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>Stellar Partnership</CardTitle>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AgreementsList;
