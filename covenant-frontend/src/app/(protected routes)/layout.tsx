import { type ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
