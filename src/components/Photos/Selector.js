import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";
import { motion } from "framer-motion";

export const Selector = ({
  nyc,
  setNyc,
  cali,
  setCali,
  korea,
  setKorea,
  singapore,
  setSingapore,
}) => {
  const boxSize = 4;

  const places = [
    {
      place: nyc,
      label: "nyc",
      toggle: () => setNyc(!nyc),
    },
    {
      place: cali,
      label: "california",
      toggle: () => setCali(!cali),
    },
    {
      place: korea,
      label: "korea",
      toggle: () => setKorea(!korea),
    },
    {
      place: singapore,
      label: "singapore",
      toggle: () => setSingapore(!singapore),
    },
  ];

  return (
    <Flex>
      {places.map((item) => {
        return (
          <HStack
            w="fit-content"
            px="3"
            py="1"
            bg="blue.50"
            borderRadius={25}
            cursor="pointer"
            onClick={item.toggle}
          >
            {item.place ? (
              <Icon boxSize={boxSize} as={LuCheck} top={5} />
            ) : (
              <EmptyCheckbox />
            )}
            <Text>{item.label}</Text>
          </HStack>
        );
      })}
    </Flex>
  );
};

const EmptyCheckbox = () => {
  const boxSize = 4;
  return (
    <Box
      boxSize={boxSize}
      borderRadius={5}
      borderWidth={1}
      borderColor="gray.300"
    />
  );
};
