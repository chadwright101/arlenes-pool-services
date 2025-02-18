import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "@/_styles/globals.css";
import { Header } from "@/_components/navigation/header/header";
import { Footer } from "@/_components/navigation/footer/footer";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arlenespools.co.za"),
  title: "Contact - Arlene's Pool Services",
  description: "",
  keywords: "",
  openGraph: {
    description: "",
    type: "website",
    locale: "en_ZA",
    siteName: "Arlene's Pool Services",
    images: [
      {
        url: "/images/open-graph.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif} antialiased bg-blue/10`}>
        <div className="max-w-[1280px] mx-auto bg-white">
          <Header />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
