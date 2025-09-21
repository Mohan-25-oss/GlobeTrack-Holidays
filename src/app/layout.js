import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

export const metadata = {
  title: "GlobeTrack Holidays",
  description: "Explore the world with GlobeTrack Holidays – Visa, Flights, Tours & More!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className="flex flex-col min-h-screen" 
        suppressHydrationWarning
      >
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}