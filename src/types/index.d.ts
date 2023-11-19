import { SanityDocument } from "next-sanity";

export interface SanityLinkProps {
  type: string;
  label: string;
  key: string;
  url: string;
}

export interface FooterProps extends SanityDocument {
  copyright: string;
  navigation_title: string;
  navigation_links: SanityLinkProps[];
  socials_title: string;
  socials_links: SanityLinkProps[];
}
