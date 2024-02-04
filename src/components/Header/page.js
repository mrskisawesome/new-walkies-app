import Link from "next/link";
import {
  Container,
  Heading,
  Text,
  Flex,
  avatarPropDefs,
} from "@radix-ui/themes";
import {
  HomeIcon,
  ChatBubbleIcon,
  IdCardIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import AvatarDemo from "../Avatar/page";
//
export default function Header({ imageUrl }) {
  "use client";
  const outlinePulse = `keyframes
  from { outline-color: cyan; }
  to { outline-color: beige; }
`;
  return (
    <>
      <div>
        <Container size="800">
          <Flex
            direction="column"
            gap="30"
            align-content="center"
            justify-content="space-evenly"
          >
            <Heading>🐕 Walkies</Heading>
          </Flex>
        </Container>
      </div>
      <div>
        <Container size="800">
          <Flex direction="row" gap="30" justify-content="center">
            <Link className="main_nav" href={"/"}>
              <HomeIcon
                width="40px"
                height="40px"
                style={{
                  animation: `outlinePulse 1s ease-in-out infinite alternate`,
                  outline: "2px solid transparent",
                  outlineOffset: "4px",
                }}
              />
            </Link>

            <Link className="main_nav" href={"/profile"}>
              <IdCardIcon
                width="40px"
                height="40px"
                style={{
                  animation: `outlinePulse 1s ease-in-out infinite alternate`,
                  outline: "2px solid transparent",
                  outlineOffset: "4px",
                }}
              />
            </Link>
            <Link className="main_nav" href={"/posts"}>
              <ChatBubbleIcon
                width="40px"
                height="40px"
                style={{
                  animation: `outlinePulse 1s ease-in-out infinite alternate`,
                  outline: "2px solid transparent",
                  outlineOffset: "4px",
                }}
              />
            </Link>

            <Link className="main_nav" href={"/map"}>
              <PaperPlaneIcon
                width="40px"
                height="40px"
                style={{
                  animation: `outlinePulse 1s ease-in-out infinite alternate`,
                  outline: "2px solid transparent",
                  outlineOffset: "4px",
                }}
              />
            </Link>
          </Flex>
        </Container>
      </div>
      <div>
        <AvatarDemo imageUrl={imageUrl} />
      </div>
    </>
  );
}
