import axios from "axios";
import NotFound from "/layouts/404";
import Default from "/layouts/Default";
import { GET_ABOUT_PAGE, GET_ALL_SLUGS, GET_CONTACT_PAGE, GET_NOTFOUND_PAGE, GET_PRIVACY_PAGE } from "@/query/strapiQuery";
import PrivacyPolicy from "@/layouts/PrivacyPolicy";
import AboutNew from "@/layouts/components/AboutNew";
import ContactNew from "@/layouts/components/ContactNew";

// for all regular pages
const RegularPages = ({ data, slug, about, notFound, privacy, contact }) => {
 return <>{slug === "404" ? <NotFound data={notFound} /> : slug === "about" ? <AboutNew /> : slug === "contact" ? <ContactNew /> : slug === "privacy-policy" ? <PrivacyPolicy data={privacy} /> : <Default data={data} />}</>;
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
 const slugs = await axios.get(process.env.NEXT_STRAPI_API + GET_ALL_SLUGS);

 const paths = slugs.data.data.map((item) => ({
  params: {
   regular: item.slug,
  },
 }));

 paths.push({ params: { regular: "about" } });
 paths.push({ params: { regular: "contact" } });
 paths.push({ params: { regular: "privacy-policy" } });
 paths.push({ params: { regular: "404" } });

 return {
  paths,
  fallback: false,
 };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
 const { regular } = params;
 const allPages = await axios.get(process.env.NEXT_STRAPI_API + `api/posts?filters[slug][$eq]=${regular}`);
 const about = await axios.get(process.env.NEXT_STRAPI_API + GET_ABOUT_PAGE);
 const notFound = await axios.get(process.env.NEXT_STRAPI_API + GET_NOTFOUND_PAGE);
 const contact = await axios.get(process.env.NEXT_STRAPI_API + GET_CONTACT_PAGE);
 const privacy = await axios.get(process.env.NEXT_STRAPI_API + GET_PRIVACY_PAGE);

 return {
  props: {
   slug: regular,
   data: allPages.data.data,
   about: about.data.data,
   notFound: notFound.data.data,
   contact: contact.data.data,
   privacy: privacy.data.data,
  },
 };
};
