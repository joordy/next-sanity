import { SchemaTypeDefinition } from "sanity";

import contact from "@/sanity/schemas/singletons/contact";
import home from "@/sanity/schemas/singletons/home";

export const singletons: SchemaTypeDefinition[] = [home, contact];

export const singletonNames: { types: string[] } = {
  types: [home.name, contact.name],
};
