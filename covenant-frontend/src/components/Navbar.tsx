"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";



export default function Navbar() {
  return (
    <nav className="flex flex-row items-center px-4 bg-gray-100 border-b border-gray-200 h-14 dark:border-gray-800 dark:bg-gray-950">
      <Link className="text-lg font-bold" href="/">
        Covenant
      </Link>
      <div className="flex items-center gap-4 ml-auto">
      <ConnectButton/>
      </div>
    </nav>
  )
}




function Package2Icon(props: any) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

// export default function Navbar() {
//   return (
//     <header className="flex items-center w-full h-20 px-4 md:px-6">
//       <Link className="mr-auto" href="#">
//         Covenant
//       </Link>
//       <div className="ml-auto">
//         <ConnectButton />
//       </div>
//     </header>
//   );
// }
