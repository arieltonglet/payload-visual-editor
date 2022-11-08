import React, { useEffect, useState } from "react";
import { useWatchForm } from "payload/components/forms";
import { APP_URL } from "../config";
import { RANDOM_IMAGE } from "../mocks/blocks";
import Image from "../frontendBlocks/Image";

type Props = {
  orientation: string;
  path: string;
};

const mockImage = {
  alt: "",
  description: "Lorem ipsum dolor sit amet",
  src: RANDOM_IMAGE,
};

// LOAD IMAGE
const fetchMedia = async (imgId) => {
  const response = await fetch(`${APP_URL}/api/media/${imgId}`);
  if (response.ok) {
    const json = await response.json();
    return json;
  }
};

const ImagePreview: React.FC<Props> = ({ path }) => {
  const [blockImage, setBlockImage] = useState(mockImage);
  const [cachedImages, setCachedImages] = useState({});

  // GET BLOCK DATA
  const { getDataByPath } = useWatchForm();
  const index = path.split(".")[1];
  const allContents = getDataByPath("content");
  const block = allContents[index];

  const { image, description } = block?.edit || {};

  useEffect(() => {
    // MOCK IMAGES
    if (!image) {
      setBlockImage({
        ...mockImage,
        description: description || mockImage.description,
      });
      return;
    }

    const getData = async () => {
      let newImage = cachedImages[image];

      console.log(image, newImage);

      if (image && !newImage) {
        newImage = await fetchMedia(image);
        setCachedImages({
          ...cachedImages,
          [image]: newImage,
        });
      }

      setBlockImage({
        alt: newImage.alt,
        description: description,
        src: newImage.url,
      });
    };
    getData().catch(console.error);
  }, [JSON.stringify(image), description]);

  if (!block) return null;

  return (
    <Image
      alt={blockImage.alt}
      description={blockImage.description}
      src={blockImage.src}
    />
  );
};

export default ImagePreview;
