import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/page";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { ClerkProvider } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";

const urbanist = Urbanist({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Walkies - the social network for dog walkers",
  description:
    "A social network for those who love short and long walks with their loyal canine companions",
};

export default async function RootLayout({ children }) {
  const { userId } = auth();
  const _User = await currentUser();
  const imageUrl = _User?.imageUrl || ""; // Default to empty string if imageUrl is not available
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Theme
            accentColor="cyan"
            grayColor="slate"
            radius="large"
            scaling="110%"
          >
            <Header imageUrl={imageUrl} />
            {userId && <UserButton afterSignOutUrl="/" />}
            {!userId && <Link href="/sign_in">Sign In</Link>}
            {children}
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  );
}
