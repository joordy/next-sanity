import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "footer",
  title: "Footer",
  fields: [
    defineField({
      type: "string",
      name: "subTitle",
      title: "Subtitle",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "navigation_title",
      title: "Navigation title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "socials_title",
      title: "Socials title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Copyright",
      name: "copyright",
      type: "string",
    }),
    defineField({
      title: "Privacy Policy",
      name: "privacyPolicy",
      type: "object",
      fields: [
        defineField({
          title: "Label",
          name: "label",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: "Url",
          name: "url",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
});
