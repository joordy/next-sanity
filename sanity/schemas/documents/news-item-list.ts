import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "newsItemList",
  title: "newsItemList",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: "Highlighted article",
      name: "highlightedArticle",
      description:
        "Latest highlighted article will be shown on top of the page",
      type: "boolean",
    }),
    defineField({
      type: "date",
      name: "date",
      title: "Date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "description",
      title: "Description",
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "typeOfMedia",
      title: "typeOfMedia",
      initialValue: "newspaper",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Newspaper", value: "newspaper" },
          { title: "Podcast", value: "podcast" },
          { title: "Radio", value: "radio" },
          { title: "other", value: "other" },
        ],
      },
    }),
    defineField({
      title: "Thumbnail image",
      name: "thumbImage",
      type: "image",
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    }),
  ],
});
