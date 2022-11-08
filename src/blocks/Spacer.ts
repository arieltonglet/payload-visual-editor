import { Block } from "payload/types";
import SpacerPreview from "../previews/SpacerPreview";
import WithPreview from "../previews/withPreview";

const Spacer: Block = {
  slug: "spacer",
  labels: {
    singular: "Spacer",
    plural: "Spacers",
  },
  fields: WithPreview(SpacerPreview, [
    {
      type: "radio",
      name: "size",
      options: [
        { label: "Small", value: "S" },
        { label: "Medium", value: "M" },
        { label: "Large", value: "L" },
      ],
      defaultValue: "S",
      admin: {
        layout: "horizontal",
      },
    },
  ]),
};

export default Spacer;
