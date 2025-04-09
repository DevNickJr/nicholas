import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCodeFont = Fira_Code({ subsets: ['latin'] })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Duadei Nicholas | Software Developer",
  description: "DevNick — Software Developer & Web Designer crafting clean and user-friendly digital experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCodeFont.className} text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
