import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "../lib/i18n";
import { CartProvider } from "../lib/cart";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ARYA'S FOOD PRODUCTS | Pure & Authentic Indian Groceries",
  description: "Bringing the warmth of home, from our heart to yours. Shop the best Indian spices, masalas, and premixes.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans flex flex-col min-h-screen`}
      >
        <I18nProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
