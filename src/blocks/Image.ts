import { Block } from 'payload/types';
import ImagePreview from '../previews/ImagePreview';
import WithPreview from '../previews/withPreview';

const Image: Block = {
  slug: 'image',
  labels: {
    singular: 'Image',
    plural: 'Images',
  },
  fields: WithPreview(ImagePreview, [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ]),
};

export default Image;
