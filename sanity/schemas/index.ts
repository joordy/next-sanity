import blockHeader from "@/sanity/schemas/blocks/blockHeader";
import dynamicPages from "@/sanity/schemas/documents/dynamic-pages";
import footer from "@/sanity/schemas/documents/footer";
import header from "@/sanity/schemas/documents/header";
import navigation from "@/sanity/schemas/documents/navigation";
import newsItemList from "@/sanity/schemas/documents/news-item-list";
import page from "@/sanity/schemas/documents/page";
import sponsorsList from "@/sanity/schemas/documents/sponsors-list";
import upcomingRacesList from "@/sanity/schemas/documents/upcoming-races-list";
import about from "@/sanity/schemas/singletons/about";
import contact from "@/sanity/schemas/singletons/contact";
import home from "@/sanity/schemas/singletons/home";
import settings from "@/sanity/schemas/singletons/settings";
import sponsors from "@/sanity/schemas/singletons/sponsors";

export default [
  // Fixed pages: Singletons
  home,
  about,
  contact,
  sponsors,
  dynamicPages,
  // Dynamic items
  sponsorsList,
  upcomingRacesList,
  newsItemList,
  // Settings
  settings,
  // Documents
  page,
  navigation,
  header,
  footer,
  // Seperate blocks for body in dynamic pages
  blockHeader,
];
