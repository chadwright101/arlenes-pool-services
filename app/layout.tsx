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
  title: "Arlene's Pool Services - Garden Route",
  description:
    "Since January 1999, Arlene has transformed a modest three-pool business into a thriving enterprise. Today, the company manages almost 500 pools along the Garden Route, supported by a dedicated team of 9 professional staff</span> and a fleet of 5 vehicles and a Tuk Tuk. Arlene's entrepreneurial journey demonstrates steady growth and commitment to excellence in pool services.",
  keywords:
    "Pool Services, Garden Route, Pool Management. Pool Maintenance, Swimming Pool Services, Experienced, Professional Staff, Pool Cleaning, Arlene's Pool Services",
  openGraph: {
    description:
      "Since January 1999, Arlene has transformed a modest three-pool business into a thriving enterprise. Today, the company manages almost 500 pools along the Garden Route, supported by a dedicated team of 9 professional staff</span> and a fleet of 5 vehicles and a Tuk Tuk. Arlene's entrepreneurial journey demonstrates steady growth and commitment to excellence in pool services.",
    type: "website",
    locale: "en_ZA",
    siteName: "Arlene's Pool Services - Garden Route",
    images: [
      {
        url: "/video-poster-desktop.webp",
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
      <body className={`${notoSerif} antialiased bg-blue/20`}>
        <div className="max-w-[1280px] mx-auto bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
