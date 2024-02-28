import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Footer } from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { Selector } from "../../components/Photos/Selector";
import { useState } from "react";
import { Gallery } from "./Gallery";

export const Photos = () => {
  const [nyc, setNyc] = useState(true);
  const [cali, setCali] = useState(true);
  const [korea, setKorea] = useState(true);
  const [japan, setJapan] = useState(true);
  const [singapore, setSingapore] = useState(true);

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
        <VStack alignItems="left" mt={10}>
          <Heading fontWeight="semibold" mb={5}>
            photography
          </Heading>

          <Text>
            i started shooting photos in fall 2020, when going outdoors was
            pretty much the only thing you could do. as my first semester in
            nyc, i also wanted an excuse to go around exploring the city.
          </Text>

          <Text>
            ever since then, i've brought my camera everywhere i go, and i take
            pictures of anything i find interesting/cool. enjoy!
          </Text>
        </VStack>
      </motion.main>

      {/**
         * 
      <motion.main
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <Selector
          nyc={nyc}
          setNyc={setNyc}
          cali={cali}
          setCali={setCali}
          korea={korea}
          setKorea={setKorea}
          singapore={singapore}
          setSingapore={setSingapore}
        />
      </motion.main>
         * 
         */}

      <motion.main
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
      >
        <Gallery nyc={nyc} singapore={singapore} korea={korea} cali={cali} />
      </motion.main>

      <Footer />
    </Box>
  );
};
