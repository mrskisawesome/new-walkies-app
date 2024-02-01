import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/page";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

const urbanist = Urbanist({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Walkies - the social network for dog walkers",
  description:
    "A social network for those who love short and long walks with their loyal canine companions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Theme
          accentColor="cyan"
          grayColor="slate"
          radius="large"
          scaling="110%"
        >
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
}
