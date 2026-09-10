import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Elysium Mist Retreat | Luxury Eco-Resort in Munnar, Kerala",
  description:
    "Experience ultra-luxury in the misty tea plantations of Munnar. Private pool villas, Ayurveda, and curated plantation experiences at Elysium Mist Retreat.",
  openGraph: {
    title: "Elysium Mist Retreat",
    description: "A sanctuary above the clouds. Munnar, Kerala.",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elysium Mist Retreat",
    description: "Luxury eco-resort in Munnar, Kerala.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
