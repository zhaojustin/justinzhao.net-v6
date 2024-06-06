import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Tomotime } from "./Library/Tomotime";
import { useState } from "react";
import { CustomNavLinks } from "../../components/NavLinks/CustomNavLinks";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState("");

  const projects = [
    {
      id: "tomotime",
      img: "https://play-lh.googleusercontent.com/FtMA6gwyrrkaJS1CYGfRf0U1uRw5pJrkqZH7dyGgevKCJdKjQekJMbghNdo4ZczU_rQ",
      title: "Tomotime",
      description: "Mobile app on the app and android store.",
    },
    {
      element: <></>,
      img: "",
      title: "title",
      description: "description",
    },
    {
      element: <></>,
      img: "",
      title: "title",
      description: "description",
    },
    {
      element: <></>,
      img: "",
      title: "title",
      description: "description",
    },
  ];

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: 15 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
        <CustomNavLinks />
      </motion.main>

      {activeProject == "" && (
        <>
          <motion.main
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            <VStack alignItems="left" mt={10}>
              <Heading fontWeight="semibold" mb={5}>
                projects
              </Heading>

              <Text>projects are my way of learning.</Text>

              <Text>
                i'll use them to learn whatever new skills are needed, or just
                as practice for things i need to brush up on.
              </Text>
            </VStack>
          </motion.main>

          <motion.main
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <VStack alignItems="left" mt={10} gap={2}>
              {projects.map((item) => {
                return (
                  <motion.main variants={childVariants}>
                    <HStack
                      key={item.id}
                      gap={5}
                      p="3"
                      mx="-3"
                      borderRadius={10}
                      _hover={{
                        bg: "gray.50",
                        transition: "0.2s ease-in-out",
                        cursor: "pointer",
                      }}
                      onClick={() => setActiveProject(item.id)}
                    >
                      {item.img !== "" ? (
                        <Image
                          src={item.img}
                          h={24}
                          w={24}
                          borderRadius={15}
                          alt={item.title}
                        />
                      ) : (
                        <Box
                          bg="gray.100"
                          borderRadius={15}
                          h={24}
                          w={24}
                        ></Box>
                      )}
                      <VStack alignItems="keft" gap={2}>
                        <Text fontWeight="semibold">{item.title}</Text>
                        <Text>{item.description}</Text>
                      </VStack>
                    </HStack>
                  </motion.main>
                );
              })}
            </VStack>
          </motion.main>
        </>
      )}

      {activeProject == "tomotime" && (
        <Tomotime setActiveProject={setActiveProject} />
      )}
    </Box>
  );
};
