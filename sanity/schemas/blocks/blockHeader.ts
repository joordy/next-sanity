import { defineField } from "sanity";

export default defineField({
  title: "Block Header",
  name: "blockHeader",
  group: "content",
  type: "object",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
      validation: (rule) => rule.required(),
    }),
  ],
});
