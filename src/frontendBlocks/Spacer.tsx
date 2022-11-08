import React from 'react';
import styled from 'styled-components';

type Size = 'S' | 'M' | 'L';

type Props = {
  size: Size;
};

const SIZE: Record<Size, number> = {
  S: 10,
  M: 50,
  L: 100,
};

const Wrapper = styled.hr<Props>`
  border: none;
  height: ${({ size }) => SIZE[size]}px;
`;

const Spacer: React.FC<Props> = ({ size }) => {
  return <Wrapper size={size} />;
};

export default Spacer;
