"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { Toaster } from "@/components/ui/sonner";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "@/wagmi";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";
<<<<<<< HEAD
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
=======
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
<<<<<<< HEAD
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <AnonAadhaarProvider
              _useTestAadhaar={true}
              // _fetchArtifactsFromServer={false}
            >
              {props.children}
            </AnonAadhaarProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
      <ToastContainer />
    </>
=======
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <AnonAadhaarProvider
            _useTestAadhaar={true}
            // _fetchArtifactsFromServer={false}
          >
            {props.children} <Toaster />
          </AnonAadhaarProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
>>>>>>> 36dcaf8fa104a08495ba6deab5e141c12784a4b0
  );
}
