import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BusinessCTA from "./components/BusinessCTA";

export const metadata = {
  title: "Kerberos Group - Consulting • Technology • Energy",
  description:
    "Kerberos Group empowers businesses with strategic consulting, innovative technologies, and sustainable energy solutions.",
  keywords: ["kerberos", "consulting", "technology", "energy"],
  icons: {
    icon: "/image/mainLogo.svg",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-text">
        <Navbar />
        {children}
        {/* <BusinessCTA /> */}
        <Footer />
      </body>
    </html>
  );
}
