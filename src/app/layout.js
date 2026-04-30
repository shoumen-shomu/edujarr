import { Saira, Rowdies } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

const rowdies = Rowdies({
  variable: "--font-rowdies",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Edujarr",
  description: "Eduactional Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${saira.variable} ${rowdies.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
