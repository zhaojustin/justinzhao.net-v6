import {
  Text,
  Image,
  VStack,
  Flex,
  Box,
  SimpleGrid,
  Stack,
  Button,
} from "@chakra-ui/react";
import { createRef, useCallback, useEffect, useRef, useState } from "react";

export const Gallery = ({ openOverlay, closeOverlay }) => {
  const [imageUrls, setImageUrls] = useState({});

  // scroll to section
  const sectionRefs = useRef({});
  const setRef = (key, node) => {
    if (node) {
      sectionRefs.current[key] = node;
    }
  };
  const scrollToSection = (key) => {
    sectionRefs.current[key].scrollIntoView();
  };

  // fetch images
  useEffect(() => {
    const bucketName = "justins-photos";
    const baseUrl = `https://${bucketName}.s3.us-east-1.amazonaws.com`;
    const fetchS3Objects = async () => {
      try {
        const response = await fetch(`${baseUrl}?list-type=2`);
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const keys = Array.from(xmlDoc.getElementsByTagName("Key"));
        const urls = keys.map((key) => `${baseUrl}/${key.textContent}`);

        // create temp obj
        const tmpImageUrls = {};

        for (const url of urls) {
          const album_name = url.replace(baseUrl, "").split("/")[1];
          if (url.replace(baseUrl, "").split("/")[2] !== "") {
            if (!tmpImageUrls[album_name]) tmpImageUrls[album_name] = [url];
            else tmpImageUrls[album_name].push(url);
          }
        }

        setImageUrls(tmpImageUrls);
      } catch (error) {
        console.error("Error fetching S3 objects:", error);
      }
    };

    fetchS3Objects();
  }, []);

  return (
    <VStack mt={10}>
      {/* gallery links */}
      <VStack mb={10} alignItems="left" w="100%">
        <SimpleGrid columns={[1, 2]} w="100%" spacing={10} mt={5}>
          {Object.keys(imageUrls).map((key) => (
            <Box
              mt={2}
              key={key}
              onClick={() => scrollToSection(key)}
              _hover={{ cursor: "pointer" }}
            >
              <Stack
                direction={["row", "column"]}
                alignItems="center"
                spacing={5}
              >
                <Image
                  src={imageUrls[key][0]}
                  boxSize={[36, 60]}
                  objectFit="cover"
                  borderRadius={50}
                  shadow="xl"
                />
                <Text
                  fontSize="xl"
                  color="blue.500"
                  cursor="pointer"
                  fontWeight="semibold"
                >
                  {key}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      {/* render images */}
      <Flex flexWrap="wrap" mx={-5}>
        {Object.keys(imageUrls).map((key, idx) => {
          sectionRefs.current[key] = createRef();
          return (
            <VStack
              key={key}
              alignItems="left"
              mt={idx !== 0 ? 20 : 10}
              ref={(node) => setRef(key, node)}
            >
              <Text m={5} fontWeight="semibold" fontSize="xx-large">
                {key}
              </Text>
              <Flex flexWrap="wrap">
                {imageUrls[key].map((url) => {
                  return (
                    <Photo src={url} key={url} openOverlay={openOverlay} />
                  );
                })}
              </Flex>
            </VStack>
          );
        })}
      </Flex>
    </VStack>
  );
};

const Photo = ({ src, openOverlay }) => {
  if (src.includes("thumbnail")) return undefined;
  return (
    <VStack
      py={5}
      alignItems="left"
      gap={2}
      p={5}
      width={src.split("/")[4].includes("v_") ? "50%" : "100%"}
    >
      <Image
        src={src}
        alt="image"
        onClick={() => openOverlay(src)}
        _hover={{ cursor: "pointer" }}
      />
    </VStack>
  );
};
