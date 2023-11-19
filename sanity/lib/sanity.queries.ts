import { groq } from "next-sanity";

export const homePageQuery = groq`*[_type == "home"][0]`;
export const aboutPageQuery = groq`*[_type == "about"][0]`;
export const contactPageQuery = groq`*[_type == "contact"][0]`;
export const sponsorsPageQuery = groq`*[_type == "sponsors"]`;
export const newsroomPageQuery = groq`*[_type == "newsroom"]`;
export const dynamicPageQuery = groq`
  *[_type == "dynamicpage" && slug.current == $slug][0]`;

// Dynamic lists
export const allBlogItems = groq`*[_type == "newsItemList"]`;
export const blogItem = groq`*[_type == "newsItemList" && slug.current == $slug][0]`;
export const sponsorsList = groq`*[_type == "sponsorsList"]`;
export const upcomingRacesList = groq`*[_type == "upcomingRacesList"]`;

export const footerQuery = groq`*[_type == "footer"][0]`;
export const headerQuery = groq`*[_type == "header"][0]`;
export const navigationQuery = groq`*[_type == "navigation"][0]`;

// groq`*[_type == "page" && slug.current == "/"]`;
// export const homePageQuery = groq`*[slug == "/"][0]`;

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`;

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`;

export const projectPaths = groq`
  *[_type == "project" && slug.current != null].slug.current
`;

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`;
