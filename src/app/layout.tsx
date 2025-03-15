import type { Metadata } from "next";
import { Inter } from "next/font/google";
 import "../../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Secure Clipboard",
  description: "Share your text or files seamlessly to anyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      
      <meta name="google-site-verification" content="VzF9jb6rbn0R6Ua_Ig0CxmL0oqqInkdMFdoHYCjhiqQ" />
      </head>
      <body className={inter.className}>
        
        {children}
    
        </body>
    </html>
  );
}
