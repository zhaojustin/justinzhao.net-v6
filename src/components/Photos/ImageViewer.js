import { Box, Center, IconButton, Image, Text } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export const ImageViewer = ({ onClose, imgUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
      exit={{ opacity: 0 }}
    >
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="blackAlpha.600"
        zIndex="overlay"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={() => onClose()}
      >
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
        >
          <Center>
            <Image src={imgUrl} maxH={"80vh"} maxW={"95vw"} shadow="lg" />
          </Center>
        </motion.div>
      </Box>
    </motion.div>
  );
};
