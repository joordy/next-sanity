import { ContactIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

import { seo } from "@/sanity/schemas/blocks";
import blockHeader from "@/sanity/schemas/blocks/blockHeader";

export default defineType({
  name: "sponsors",
  title: "Sponsors",
  type: "document",
  icon: ContactIcon,
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
        subtitle: "Contact",
        title,
      };
    },
  },
});
