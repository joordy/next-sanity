import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

import { seo } from "@/sanity/schemas/blocks";
import blockHeader from "@/sanity/schemas/blocks/blockHeader";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
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
    blockHeader,
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Home",
        title,
      };
    },
  },
});
