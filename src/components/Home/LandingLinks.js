import { Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LandingLinks = () => {
  const [photographySrc, setPhotographySrc] = useState(
    "/images/landing/3d/camera_front.png"
  );

  return (
    <SimpleGrid
      flex={1}
      w="100%"
      mt={20}
      spacing={5}
      columns={{ base: 1, md: 2 }}
    >
      <LinkComponent
        img="/images/landing/3d/camera_front.png"
        hoverImg="/images/landing/3d/camera_dynamic.png"
        title="Photography"
        description={"See the photos I've taken over the years."}
        link="/photos"
      />

      <LinkComponent
        img="/images/landing/3d/tea_front.png"
        hoverImg="/images/landing/3d/tea_dynamic.png"
        title="Cafes"
        description={"I keep a list of noteworthy cafes."}
        link="/cafes"
      />
      <LinkComponent
        img="/images/landing/3d/projects_front.png"
        hoverImg="/images/landing/3d/projects_dynamic.png"
        title="Projects"
        description={"Fun projects that I work on."}
        link="/projects"
      />
      <LinkComponent
        img="/images/landing/3d/contact_front.png"
        hoverImg="/images/landing/3d/contact_dynamic.png"
        title="Contact"
        description={"How to find me."}
        link="/contact"
      />
    </SimpleGrid>
  );
};

const LinkComponent = ({ img, hoverImg, title, description, link }) => {
  const [imageSrc, setImageSrc] = useState(img); // image source state
  const navigate = useNavigate();

  return (
    <Stack
      onClick={() => {
        navigate(link);
      }}
      direction={{ base: "row", md: "column" }}
      alignItems={{ base: "center", md: "flex-start" }}
      spacing="5"
      bg="gray.100"
      borderRadius={20}
      p="5"
      onMouseEnter={() => setImageSrc(hoverImg)}
      onMouseLeave={() => setImageSrc(img)}
      _hover={{
        cursor: "pointer",
        transform: "translateY(-5px)",
        backgroundColor: "blue.50",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Image src={imageSrc} boxSize={20} />
      <VStack alignItems="left" pl="2">
        <Text fontSize="large" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="medium">{description}</Text>
      </VStack>
    </Stack>
  );
};
