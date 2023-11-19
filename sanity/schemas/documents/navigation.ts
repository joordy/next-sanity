import { defineField, defineType } from "sanity";

import { navigationLinks, socialLinks } from "@/sanity/schemas/blocks";

export default defineType({
  type: "document",
  name: "navigation",
  title: "Navigation",
  fields: [
    defineField({
      title: "Navigation",
      name: "navigation_links",
      type: "array",
      validation: (rule) => rule.required(),
      of: [navigationLinks],
    }),
    defineField({
      title: "Social Links",
      name: "socialLinks",
      type: "array",
      validation: (rule) => rule.required(),
      of: [socialLinks],
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
