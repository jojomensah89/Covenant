import { mainnet, sepolia, scrollSepolia } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

export const config = getDefaultConfig({
  appName: "Qualified",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet, sepolia, scrollSepolia],
  ssr: true,
});
