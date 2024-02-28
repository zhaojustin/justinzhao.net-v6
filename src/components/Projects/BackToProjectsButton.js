import { Box, Icon, Text } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";
import { motion } from "framer-motion";

export const BackToProjectsButton = ({ setActiveProject }) => {
  return (
    <motion.main
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
    >
      <Box
        mb={5}
        alignItems="center"
        onClick={() => setActiveProject("")}
        cursor="pointer"
        px="3"
        mx="-2"
        py="1"
        w="fit-content"
        display="flex"
        flexDirection="row"
        borderRadius={15}
        color="blue.400"
        bg="blue.50"
        _hover={{ bg: "blue.100", transition: "0.2s ease-in-out" }}
      >
        <Icon as={LuArrowLeft} color="blue.400" mr={2} />
        <Text color="blue.400">Back to Projects</Text>
      </Box>
    </motion.main>
  );
};
