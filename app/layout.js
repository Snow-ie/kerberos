import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import BusinessCTA from "./components/BusinessCTA";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-text">
        <Navbar />
        {children}
        <BusinessCTA />
        <Footer />
      </body>
    </html>
  );
}
