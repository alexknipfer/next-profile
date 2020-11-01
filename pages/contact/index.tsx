import { useTrail, animated } from 'react-spring';
import { gql, useQuery } from '@apollo/client';
import { GetStaticProps } from 'next';

import DefaultLayout from '../../components/default-layout';
import Meta from '../../components/meta';
import { initializeApollo } from '../../lib/apolloClient';
import { ContactPageResponse } from '../../interfaces/Contact';

const CONTACT_QUERY = gql`
  query {
    contact_page(uid: "contact-page", lang: "en-us") {
      contact_link_meta {
        contact_link_image
        link_text
        link_href {
          __typename
          ... on _ExternalLink {
            url
          }
        }
      }
    }
  }
`;

const config = {
  mass: 5,
  tension: 2000,
  friction: 200,
};

const Contact = () => {
  const { data, loading } = useQuery<ContactPageResponse>(CONTACT_QUERY);

  const contactMethods = data.contact_page.contact_link_meta;

  const trail = useTrail(contactMethods.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 40 },
  });

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <DefaultLayout>
      <Meta
        title="Contact | Alex Knipfer"
        description="Contact Alex Knipfer on multiple socials networks"
        url="https://alexknipfer.com/contact"
      />
      <div className="flex flex-col justify-center items-center h-full p-8 md:p-20">
        <div className="grid grid-cols-1 col-auto">
          {trail.map(({ x, ...rest }, index) => (
            <div
              className="lg:transform lg:hover:scale-110 lg:transition lg:duration-500 lg:ease-in-out"
              key={index}
            >
              <animated.a
                className="flex items-center mb-6"
                href={contactMethods[index].link_href.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...rest,
                  transform: x.interpolate((x) => `translate3d(0, ${x}px, 0)`),
                }}
              >
                <img
                  src={contactMethods[index].contact_link_image.url}
                  alt={contactMethods[index].contact_link_image.alt}
                  className="mr-4 w-16"
                />
                <span>{contactMethods[index].link_text}</span>
              </animated.a>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: CONTACT_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default Contact;
