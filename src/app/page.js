import PopoverDemo from "@/components/PopoverDemo/page";
import { Flex, Text, Button, Box, Grid } from "@radix-ui/themes";
import "./globals.css";
import Map from "@/components/Map/page";
import Accessory from "@/components/Accessory/page";
import Dog from "@/components/Dog/page";
//
export default function Home() {
  const post_id = 17;
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to Walkies</p>
      <Flex direction="column" gap="2">
        <Text>
          The social site for dogs who love muddy puddles, ball throwing and
          long, long walks!{" "}
        </Text>
        <Grid columns="3" gap="10">
          <Box height="10">
            <Map />
          </Box>
          <Box height="12">
            <Accessory />
          </Box>
          <Box height="14">
            <Dog />
          </Box>
        </Grid>
        <Button>Lets go for a walk</Button>
        <PopoverDemo />
      </Flex>
    </div>
  );
}
