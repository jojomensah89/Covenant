"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { Toaster } from "@/components/ui/sonner";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "@/wagmi";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";

export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
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
  );
}
