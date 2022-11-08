import { Field } from "payload/types";
import Toggler from "./Toggler";

export default (PreviewElement, fields: Field[]): Field[] => [
  // TOGGLER
  {
    type: "checkbox",
    defaultValue: false,
    label: "-",
    name: "isEditVisible",
    admin: {
      components: {
        Field: Toggler,
      },
    },
  },
  // PREVIEW
  {
    name: "preview",
    type: "ui",
    admin: {
      components: {
        Field: PreviewElement,
      },
    },
  },
  // EDIT AREA
  {
    type: "group",
    name: "edit",
    label: false,
    admin: {
      className: "blocks-field__edit-group",
      condition: (_, siblingData) => siblingData.isEditVisible,
    },
    fields: fields,
  },
];
