import PopoverDemo from "@/components/PopoverDemo/page";
import { Flex, Text, Button } from "@radix-ui/themes";

//
export default function Home() {
  const post_id = 17;
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Walkies</p>
      <Flex direction="column" gap="2">
        <Text>The social site for those who love walking their dogs! </Text>
        <Button>Lets go for a walk</Button>
        <PopoverDemo />
      </Flex>
    </div>
  );
}
