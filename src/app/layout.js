import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

export const metadata = {
  title: "Barrownz Learning Academy | Digital Marketing & IT Courses in Lucknow",
  description:
    "Barrownz Learning Academy is the leading IT and Digital Marketing institute in Lucknow offering Live Projects, Industrial Training, Web Development, and 100% Placement Support.",
  keywords: "IT training institute in Lucknow, Digital marketing course in Lucknow, Web development training, Summer training Lucknow, Python course, MERN stack",
  openGraph: {
    title: "Barrownz Learning Academy | Best IT & Digital Marketing Institute",
    description: "Launch your career with hands-on industrial projects and placement assistance.",
    url: "https://barrownzlearning.com",
    siteName: "Barrownz Learning Academy",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexSerif.variable}>
      <body className="flex flex-col min-h-screen antialiased bg-white text-[#20243A] font-serif">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
