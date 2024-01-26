import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DoctorCare",
  description: " Inspired from [ bit.ly/doctorcare-design-inspiration ] Figma's design, I transformed the DoctorCare website from pixels to code, bringing its sleek and user-friendly vision to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
