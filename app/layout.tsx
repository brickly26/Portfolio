import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: "Burak Aksu",
  authors: {
    name: "Burak Aksu",
  },

  description:
    "Welcome to my corner of the internet. I am a full stack developer based in New York.",
  openGraph: {
    title: "Burak Aksu",
    description:
      "Welcome to my corner of the internet. I am a full stack developer based in New York.",
    url: "http://localhost:3000",
    siteName: "Burak Aksu",
    images: "/og-img.png",
    type: "website",
  },
  keywords: ["Portfolio", "Burak Aksu", "Resume", "Developer", "web developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨🏻</text></svg>"
      />
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
