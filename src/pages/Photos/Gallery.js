import { Text, Image, VStack, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Gallery = ({ nyc, cali, singapore, korea }) => {
  const [imageUrls, setImageUrls] = useState({});

  useEffect(() => {
    const bucketName = "justins-photos";
    const baseUrl = `https://${bucketName}.s3.us-east-1.amazonaws.com`;
    const fetchS3Objects = async () => {
      try {
        const response = await fetch(`${baseUrl}?list-type=2`);
        console.log(response);
        const text = await response.text();
        console.log(text);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const keys = Array.from(xmlDoc.getElementsByTagName("Key"));
        const urls = keys.map((key) => `${baseUrl}/${key.textContent}`);

        // create temp obj
        const tmpImageUrls = {};

        for (const url of urls) {
          const album_name = url.replace(baseUrl, "").split("/")[1];
          if (!tmpImageUrls[album_name]) tmpImageUrls[album_name] = [url];
          else tmpImageUrls[album_name].push(url);
        }

        setImageUrls(tmpImageUrls);

        console.log(tmpImageUrls);
        /* 
        setImageUrls(urls); */
      } catch (error) {
        console.error("Error fetching S3 objects:", error);
      }
    };

    fetchS3Objects();
  }, []);

  return (
    <VStack mx={-5}>
      {nyc && <VStack></VStack>}{" "}
      {singapore && (
        <Flex flexWrap="wrap">
          {Object.keys(imageUrls).map((key) => {
            return imageUrls[key].map((url) => {
              return <Photo src={url} caption="Haji Lane" />;
            });
          })}
        </Flex>
      )}
    </VStack>
  );
};

const Photo = ({ src, caption }) => {
  return (
    <VStack
      py={5}
      alignItems="left"
      gap={2}
      p={5}
      width={src.split("/")[4].includes("v_") ? "50%" : "100%"}
    >
      <Image src={src} alt="image" />
    </VStack>
  );
};
