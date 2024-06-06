import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LandingLinks } from "../../components/Home/LandingLinks";

export const Home = () => {
  return (
    <Box>
      <motion.main
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <Stack
          direction={["column", "row"]}
          spacing={10}
          alignItems={{ base: "flex-start", md: "center" }}
        >
          <Image
            src="/images/me/profilepic.jpg"
            borderRadius={{ base: "15", md: "50%" }}
            boxSize={200}
          />

          <VStack alignItems="left" spacing="5">
            <Heading fontWeight="medium">justin zhao</Heading>

            <Text>
              nice to meet you! i'm justin, a recent nyu grad living in new york
              city. i grew up in southern california & was born in utah.
            </Text>
          </VStack>
        </Stack>
      </motion.main>

      <motion.main
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <LandingLinks />
      </motion.main>
    </Box>
  );
};
