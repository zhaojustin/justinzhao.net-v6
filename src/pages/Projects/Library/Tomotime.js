import { Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BackToProjectsButton } from "../../../components/Projects/BackToProjectsButton";

export const Tomotime = ({ setActiveProject }) => {
  return (
    <VStack alignItems="left" mt="10">
      <BackToProjectsButton setActiveProject={setActiveProject} />

      <motion.main
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <Heading fontWeight="semibold">Tomotime</Heading>
        <Text>Description</Text>
      </motion.main>
    </VStack>
  );
};
