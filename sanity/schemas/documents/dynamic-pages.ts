import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

import { seo } from "@/sanity/schemas/blocks";

export default defineType({
  type: "document",
  name: "dynamicpage",
  title: "Dynamic Page",
  icon: DocumentIcon,
  groups: [
    { name: "content", title: "Page content", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      type: "object",
      name: "text",
      group: "seo",
      title: "SEO",
      fields: [seo],
    }),
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      group: "content",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "array",
      name: "body",
      group: "content",
      title: "Body",
      of: [defineArrayMember({ type: "blockHeader" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Page",
        title,
      };
    },
  },
});
