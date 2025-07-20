import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { Geist } from "next/font/google";

// Initialize the Geist font
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={geist.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
