import { Block } from "payload/types";
import TextBlockPreview from "../previews/TextBlockPreview";
import WithPreview from "../previews/withPreview";

const TextBlock: Block = {
  slug: "textBlock",
  labels: {
    singular: "Text block",
    plural: "Text blocks",
  },
  fields: WithPreview(TextBlockPreview, [
    {
      type: "text",
      name: "title",
      required: true,
    },
    {
      type: "textarea",
      name: "content",
    },
  ]),
};

export default TextBlock;
