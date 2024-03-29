import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

export default function PublicOption() {
  return (
    <div className="flex items-center justify-center h-full">
      <Card>
        <CardHeader className="p-4 text-center">
          <div className="flex items-center justify-center">
            <UsersIcon className="w-6 h-6" />
          </div>
          <CardTitle>Public</CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-center">
          <p className="text-sm">
            Accessed publicly based <br />
            on sharing option{" "}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
