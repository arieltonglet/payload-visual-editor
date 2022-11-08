import React from "react";
import styled from "styled-components";

type Props = {
  alt: string;
  description: string;
  src: string;
};

const Wrapper = styled.figure`
  margin: 0;

  caption {
    display: block;
  }
`;

const Image: React.FC<Props> = ({ alt, description, src }) => {
  return (
    <Wrapper>
      <img alt={alt} src={src} />
      <figcaption>{description}</figcaption>
    </Wrapper>
  );
};

export default Image;
