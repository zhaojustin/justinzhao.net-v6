import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Footer } from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Work } from "../../components/Home/Work";

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
        <Box bg="gray.100" borderRadius={15} boxSize={150} />
        <VStack alignItems="left" mt={10}>
          <Heading fontWeight="semibold" mb={5}>
            justin zhao
          </Heading>

          <Text>
            nice to meet you! my name is justin, an nyu student living in new
            york city, though my roots are in southern california.
          </Text>

          <Text>
            i love all things related to photography, coffee, and tech. hope
            you're able to learn more about me on this site!
          </Text>
        </VStack>
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
        <Work />
      </motion.main>

      <Footer />
    </Box>
  );
};
