import { Text, Image, VStack, Flex } from "@chakra-ui/react";

export const Gallery = ({ nyc, cali, singapore, korea }) => {
  return (
    <VStack mx={-5}>
      {nyc && <VStack></VStack>}{" "}
      {singapore && (
        <Flex flexWrap="wrap">
          <Photo
            src={"/images/singapore/sg1.jpg"}
            vertical={true}
            caption="Haji Lane"
          />
          <Photo
            src={"/images/singapore/sg1.jpg"}
            vertical={true}
            caption="Haji Lane"
          />
          <Photo
            src={"/images/singapore/sg2.jpg"}
            vertical={false}
            caption="Haji Lane"
          />
        </Flex>
      )}
    </VStack>
  );
};

const Photo = ({ src, caption, vertical }) => {
  return (
    <VStack
      py={5}
      alignItems="left"
      gap={2}
      p={5}
      width={vertical ? "50%" : "100%"}
    >
      <Image src={src} alt="image" />
      <Text color="GrayText">{caption}</Text>
    </VStack>
  );
};
