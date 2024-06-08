import {
  Box,
  Center,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Gallery } from "./Gallery";
import { CustomNavLinks } from "../../components/NavLinks/CustomNavLinks";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export const Photos = () => {
  const [showToast, setShowToast] = useState(false);
  const toast = useToast();
  const [notMobile] = useMediaQuery("(min-width: 480px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) setShowToast(true);
      else setShowToast(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const responsivePosition = () => {
      if (notMobile) return "top-left";
      return "top";
    };

    if (!showToast) toast.closeAll();
    else
      toast({
        position: responsivePosition(),
        render: () => (
          <Center mt="2">
            <HStack
              bg="gray.100"
              borderRadius={20}
              px="5"
              py="2"
              _hover={{ bg: "blue.50", cursor: "pointer", transition: "0.2s" }}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <Icon as={FiArrowUp} />
              <Text>Back to top</Text>
            </HStack>
          </Center>
        ),
        isClosable: false,
        duration: null,
      });
  }, [showToast]);

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

      <motion.main
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <VStack alignItems="left" mt={10} spacing={5}>
          <Image src="/images/landing/3d/camera_front.png" boxSize={20} />

          <Heading fontWeight="semibold" mb={5}>
            photography
          </Heading>

          <Text>
            i started shooting photos during the pandemic, when going outdoors
            was pretty much the only thing you could do. as my first semester as
            a student in nyc, it was a great excuse to go around exploring the
            city.
          </Text>

          <Text>
            ever since then, i've brought my camera everywhere i go, and i take
            pictures of anything i find interesting/cool.
          </Text>

          <Text>view some of the photos i've taken below!</Text>
        </VStack>
      </motion.main>

      {/* content */}
      <motion.main
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <Gallery />
      </motion.main>
    </Box>
  );
};
