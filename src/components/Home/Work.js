import {
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export const Work = () => {
  return (
    <Accordion borderBottomColor="white" mt={10} mx={-4} allowToggle>
      {/* education */}
      <AccordionItem borderWidth={0}>
        <AccordionButton _hover={{ backgroundColor: "none" }}>
          <Heading fontWeight="semibold" fontSize="xl">
            education
          </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel py={8}>
          <HStack gap={5} mb={5}>
            <Image
              src="https://i.pinimg.com/originals/0b/af/fb/0baffb91607677363de658bebdbb1ee1.jpg"
              alt="nyu stern logo"
              borderRadius={15}
              opacity={0.9}
              maxH={75}
              maxW={75}
            />
            <VStack alignItems="left" gap={0}>
              <Text fontWeight="semibold">NYU Stern School of Business</Text>
              <Text>B.S. Finance, B.A. Computer Science</Text>
              <Text color="GrayText" as="i">
                2020 - 2024
              </Text>
            </VStack>
          </HStack>

          <HStack gap={5} mb={5}>
            <Image
              src="https://scontent-muc2-1.xx.fbcdn.net/v/t39.30808-6/307672639_767092581298811_1638256146081611619_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9vYWeyLrd9YAX_IrvKT&_nc_ht=scontent-muc2-1.xx&oh=00_AfD12UlBT_Q0bUHTJpcsvIPmL2xFYmmr2NbqxcFEPFis3g&oe=65DCB0B7"
              alt="nus logo"
              borderRadius={15}
              opacity={0.9}
              maxH={75}
              maxW={75}
            />
            <VStack alignItems="left" gap={0}>
              <Text fontWeight="semibold">
                National University of Singapore
              </Text>
              <Text>Business School Exchange</Text>
              <Text color="GrayText" as="i">
                fall 2023
              </Text>
            </VStack>
          </HStack>

          <HStack gap={5}>
            <Image
              src="https://assets.scorebooklive.com/uploads/production/school/11038/image/Troy__CA__Warriors_Logo.png"
              alt="troy hs logo"
              borderRadius={15}
              opacity={0.9}
              maxH={75}
              maxW={75}
            />
            <VStack alignItems="left" gap={0}>
              <Text fontWeight="semibold">Troy High School</Text>
              <Text color="GrayText" as="i">
                2016 - 2020
              </Text>
            </VStack>
          </HStack>
        </AccordionPanel>
      </AccordionItem>

      {/* work experiences */}
      <AccordionItem borderWidth={0}>
        <AccordionButton _hover={{ backgroundColor: "none" }}>
          <Heading fontWeight="semibold" fontSize="xl">
            some work experiences
          </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel py={8}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
            <HStack alignItems="center" gap={3}>
              <Image
                src="https://media.licdn.com/dms/image/D4E0BAQEMsGnV9UzS7w/company-logo_200_200/0/1702390296466/glazer_capital_llc_logo?e=2147483647&v=beta&t=kUx6pfocuiN4gG2XvTt6v5XsEQMY84ZQO42a6ekgWRI"
                alt="glazer capital logo"
                borderRadius={15}
                opacity={0.9}
                mb={2}
                maxH={50}
                maxW={50}
              />
              <VStack alignItems="left" gap={0}>
                <Text fontWeight="semibold">Glazer Capital</Text>
                <Text>hedge fund ops intern</Text>
                <Text color="GrayText" as="i">
                  - spring 2024
                </Text>
              </VStack>
            </HStack>

            <HStack alignItems="center" gap={3}>
              <Image
                src="https://www.blackrock.com/uk-retail-c-assets/include/common/images/blackrock_logo.png"
                alt="blackrock logo"
                borderRadius={15}
                opacity={0.9}
                mb={2}
                maxH={50}
                maxW={50}
              />
              <VStack alignItems="left" gap={0}>
                <Text fontWeight="semibold">Blackrock</Text>
                <Text>alternatives navo intern</Text>
                <Text color="GrayText" as="i">
                  - summer 2023
                </Text>
              </VStack>
            </HStack>

            <HStack alignItems="center" gap={3}>
              <Image
                src="https://assets-global.website-files.com/628c996dbfad79f541cdb064/641c73046661510d5bb92fc0_moodys.png"
                alt="moodys logo"
                borderRadius={15}
                opacity={0.9}
                mb={2}
                maxH={50}
                maxW={50}
              />
              <VStack alignItems="left" gap={0}>
                <Text fontWeight="semibold">Moody's Analytics</Text>
                <Text>software engineer intern</Text>
                <Text color="GrayText" as="i">
                  - summer 2022
                </Text>
              </VStack>
            </HStack>

            <HStack alignItems="center" gap={3}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TSM_Logo.svg/769px-TSM_Logo.svg.png"
                alt="tsm logo"
                borderRadius={15}
                opacity={0.9}
                mb={2}
                maxH={50}
                maxW={50}
              />
              <VStack alignItems="left" gap={0}>
                <Text fontWeight="semibold">TSM</Text>
                <Text>esports marketing intern</Text>
                <Text color="GrayText" as="i">
                  - summer 2021
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </AccordionPanel>
      </AccordionItem>

      {/* other things */}
      <AccordionItem borderWidth={0}>
        <AccordionButton _hover={{ backgroundColor: "none" }}>
          <Heading fontWeight="semibold" fontSize="xl">
            other things
          </Heading>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel py={8}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
            <HStack alignItems="center" gap={3}>
              <Image
                src="https://static1.squarespace.com/static/50ce46ece4b01020c34fd52b/t/6247fba73cb3cc54675fc60a/1648884647375/bobaguys_logo_FINAL+%283%29.png?format=1500w"
                alt="boba guys logo"
                borderRadius={15}
                opacity={0.9}
                mb={2}
                maxH={50}
                maxW={50}
              />
              <VStack alignItems="left" gap={0}>
                <Text fontWeight="semibold">Boba Guys New York</Text>
                <Text>bobarista</Text>
                <Text color="GrayText" as="i">
                  - fall 2022
                </Text>
              </VStack>
            </HStack>

            <HStack alignItems="center" gap={3}>
              <Image
                src="https://images1.the-dots.com/1748234/christies.png?p=socialSquare"
                alt="christies logo"
                borderRadius={15}
                opacity={0.9}
                mb={2}
                maxH={50}
                maxW={50}
              />
              <VStack alignItems="left" gap={0}>
                <Text fontWeight="semibold">Christie's</Text>
                <Text>asia art week contractor</Text>
                <Text color="GrayText" as="i">
                  - spring 2021
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
