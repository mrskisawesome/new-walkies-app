import Link from "next/link";
import {
  Container,
  Heading,
  Text,
  Flex,
  avatarPropDefs,
} from "@radix-ui/themes";
import { HomeIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
import AvatarDemo from "../Avatar/page";
//
export default function Header() {
  const outlinePulse = `keyframes
  from { outline-color: cyan; }
  to { outline-color: beige; }
`;
  return (
    <div>
      <Container size="100">
        <Flex direction="column" gap="30" justify-content="space-between">
          <Heading>🐕 Walkies</Heading>
        </Flex>
      </Container>
      <Container size="100">
        <Flex direction="row" gap="20" justify-content="flex-end">
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
          <AvatarDemo />
        </Flex>
      </Container>
      <Container>
        <Text color="cyan">
          The social site for those who love their 'Walkies!'
        </Text>
      </Container>
    </div>
  );
}
