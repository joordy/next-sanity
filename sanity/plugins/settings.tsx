/**
 * This plugin contains all the logic for setting up the singletons
 */

import { type DocumentDefinition } from "sanity";
import { Iframe } from "sanity-plugin-iframe-pane";
import { type StructureResolver } from "sanity/desk";
import { PREVIEWABLE_DOCUMENT_TYPES, iframeOptions } from "../../sanity.config";

// import { iframeOptions, PREVIEWABLE_DOCUMENT_TYPES } from '../sanity.config'

export const singletonPlugin = (types: string[]) => {
  return {
    name: "singletonPlugin",
    document: {
      // Hide 'Singletons (such as Home)' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev: any, { creationContext }: any) => {
        if (creationContext.type === "global") {
          return prev.filter(
            (templateItem: any) => !types.includes(templateItem.templateId),
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev: any, { schemaType }: any) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }: any) => action !== "duplicate");
        }

        return prev;
      },
    },
  };
};

// // The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// // like how "Home" is handled.
export const pageStructure = (
  typeDefArray: DocumentDefinition[],
): StructureResolver => {
  return (S) => {
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name)
            .views([
              // Default form view
              S.view.form(),
              // Preview
              ...(PREVIEWABLE_DOCUMENT_TYPES.includes(typeDef.name as any)
                ? [
                    S.view
                      .component(Iframe)
                      .options(iframeOptions)
                      .title("Preview"),
                  ]
                : []),
            ]),
        );
    });

    return S.list()
      .title("Content")
      .items([
        // Pages
        S.listItem()
          .title("Pages")
          .child(
            S.list()
              .title("Pages")
              .items([
                S.listItem()
                  .title("Home")
                  .child(
                    S.editor().id("home").schemaType("home").documentId("home"),
                  ),
                S.listItem()
                  .title("About")
                  .child(
                    S.editor()
                      .id("about")
                      .schemaType("about")
                      .documentId("about"),
                  ),
                S.listItem()
                  .title("Contact")
                  .child(
                    S.editor()
                      .id("contact")
                      .schemaType("contact")
                      .documentId("contact"),
                  ),
                S.listItem()
                  .title("Newsroom")
                  .child(
                    S.editor()
                      .id("newsroom")
                      .schemaType("newsroom")
                      .documentId("newsroom"),
                  ),
                S.listItem()
                  .title("Sponsors")
                  .child(
                    S.editor()
                      .id("sponsors")
                      .schemaType("sponsors")
                      .documentId("sponsors"),
                  ),
                S.listItem()
                  .title("Dynamic Pages")
                  .child(S.documentTypeList("dynamicpage").title("Pages")),
              ]),
          ),
        S.divider(),

        // News items
        S.listItem()
          .title("Blog items (Newsroom)")
          .child(S.documentTypeList("newsItemList").title("Blog items")),
        S.divider(),

        // Events
        S.listItem()
          .title("Race calendar")
          .child(
            S.documentTypeList("upcomingRacesList").title("Upcoming races"),
          ),
        S.divider(),

        // Sponsors

        S.listItem()
          .title("Sponsors List")
          .child(S.documentTypeList("sponsorsList").title("Sponsors")),

        S.divider(),

        // GLOBAL ----------------;
        S.listItem()
          .title("Global")

          .child(
            S.list()
              .title("Global")
              .items([
                S.listItem()
                  .title("Header")
                  .child(
                    S.editor()
                      .id("header")
                      .schemaType("header")
                      .documentId("header"),
                  ),
                S.listItem()
                  .title("Footer")
                  .child(
                    S.editor()
                      .id("footer")
                      .schemaType("footer")
                      .documentId("footer"),
                  ),
                S.listItem()
                  .title("Navigation")
                  .child(
                    S.editor()
                      .id("navigation")
                      .schemaType("navigation")
                      .documentId("navigation"),
                  ),
              ]),
          ),
        S.divider(),
      ]);
  };
};
