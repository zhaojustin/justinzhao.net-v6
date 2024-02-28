import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
  LuGithub,
  LuFacebook,
  LuInstagram,
  LuTwitter,
  LuLinkedin,
} from "react-icons/lu";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, x: 15 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.main
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <VStack alignItems="left" mt={10} gap={5}>
        {/* links */}
        <HStack gap={5}>
          <motion.div variants={childVariants}>
            <Text
              as={Link}
              to="/"
              color="GrayText"
              _hover={{
                color: "blue.400",
                transition: "0.2s ease-in",
              }}
            >
              home
            </Text>
          </motion.div>
          <motion.div variants={childVariants}>
            <Text
              as={Link}
              to="/photos"
              color="GrayText"
              _hover={{
                color: "blue.400",
                transition: "0.2s ease-in",
              }}
            >
              photography
            </Text>
          </motion.div>
          <motion.div variants={childVariants}>
            <Text
              as={Link}
              to="/projects"
              color="GrayText"
              _hover={{
                color: "blue.400",
                transition: "0.2s ease-in",
              }}
            >
              projects
            </Text>
          </motion.div>
          <motion.div variants={childVariants}>
            <Text
              as={Link}
              to="/food"
              color="GrayText"
              _hover={{
                color: "blue.400",
                transition: "0.2s ease-in",
              }}
            >
              food
            </Text>
          </motion.div>
        </HStack>

        {/* socials */}
        <HStack gap={5}>
          <motion.div variants={childVariants}>
            <Icon
              as={LuGithub}
              color="GrayText"
              onClick={() => alert()}
              cursor="pointer"
              _hover={{
                color: "blue.400",
                transition: "0.2s ease-in",
              }}
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <Icon
              as={LuFacebook}
              color="GrayText"
              onClick={() => alert()}
              cursor="pointer"
              _hover={{
                color: "blue.400",
                transition: "0.2s ease-in",
              }}
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <Icon
              as={LuInstagram}
              color="GrayText"
              onClick={() => alert()}
              cursor="pointer"
              _hover={{
                color: "blue.400",
                transition: "0.2s ease-in",
              }}
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <Icon
              as={LuTwitter}
              color="GrayText"
              onClick={() => alert()}
              cursor="pointer"
              _hover={{
                color: "blue.400",
                transition: "0.2s ease-in",
              }}
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <Icon
              as={LuLinkedin}
              color="GrayText"
              onClick={() => alert()}
              cursor="pointer"
              _hover={{
                color: "blue.400",
                transition: "0.2s ease-in",
              }}
            />
          </motion.div>
        </HStack>
      </VStack>
    </motion.main>
  );
};
