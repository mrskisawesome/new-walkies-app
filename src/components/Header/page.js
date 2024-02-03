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
export default function Header({ imageUrl }) {
  const outlinePulse = `keyframes
  from { outline-color: cyan; }
  to { outline-color: beige; }
`;
  return (
    <div>
      <Container size="800">
        <Flex direction="row" gap="30" justify-content="space-evenly">
          <Heading>🐕 Walkies</Heading>

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
            <HomeIcon
              width="40px"
              height="40px"
              style={{
                animation: `outlinePulse 1s ease-in-out infinite alternate`,
                outline: "2px solid transparent",
                outlineOffset: "4px",
              }}
            />
            Your Profile Page
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
          <AvatarDemo imageUrl={imageUrl} />
        </Flex>
      </Container>
      <Container>
        <Text color="cyan">
          The social site for those who love their Walkies!
        </Text>
      </Container>
    </div>
  );
}
