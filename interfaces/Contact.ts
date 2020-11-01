import { PrismicImage } from './Prismic';

export interface ContactPageResponse {
  contact_page: {
    contact_link_meta: ContactLinkMeta[];
  };
}

export interface ContactLinkMeta {
  contact_link_image: PrismicImage;
  link_href: {
    url: string;
  };
  link_text: string;
}
