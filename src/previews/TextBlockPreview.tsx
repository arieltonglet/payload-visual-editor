import React from 'react';
import { useWatchForm } from 'payload/components/forms';
import Spacer from '../frontendBlocks/Spacer';
import TextBlock from '../frontendBlocks/TextBlock';
import { CONTENT, TITLE } from '../mocks/blocks';

type Props = {
  path: string;
};

const SpacerPreview: React.FC<Props> = ({ path }) => {
  // GET BLOCK DATA
  const { getDataByPath } = useWatchForm();
  const index = path.split('.')[1];
  const allContents = getDataByPath('content');
  const block = allContents[index];

  let { content, title } = block?.edit || {};

  if (!content && !title) {
    title = TITLE;
    content = CONTENT;
  }

  return <TextBlock content={content} title={title} />;
};

export default SpacerPreview;
