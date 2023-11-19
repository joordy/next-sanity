import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "header",
  title: "Header",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Support Label",
      name: "supportLabel",
      type: "string",
    }),
    defineField({
      title: "Support Url",
      name: "supportUrl",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Navigation",
      };
    },
  },
});
