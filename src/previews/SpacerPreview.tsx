import React from 'react';
import { useWatchForm } from 'payload/components/forms';
import Spacer from '../frontendBlocks/Spacer';

type Props = {
  path: string;
};

const SpacerPreview: React.FC<Props> = ({ path }) => {
  // GET BLOCK DATA
  const { getDataByPath } = useWatchForm();
  const index = path.split('.')[1];
  const allContents = getDataByPath('content');
  const block = allContents[index];

  const { size } = block?.edit || {};

  return <Spacer size={size} />;
};

export default SpacerPreview;
