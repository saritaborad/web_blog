import axios from "axios";
import NotFound from "/layouts/404";
import { GET_ABOUT_PAGE, GET_ALL_SLUGS, GET_NOTFOUND_PAGE, GET_PRIVACY_PAGE } from "@/query/strapiQuery";
import PrivacyPolicy from "@/layouts/PrivacyPolicy";
import About from "@/layouts/components/About";
import Contact from "@/layouts/components/Contact";
import { Career } from "@/layouts/components/Career";

// for all regular pages
const RegularPages = ({ slug, notFound, privacy, about }) => {
 return <>{slug === "404" ? <NotFound data={notFound} /> : slug === "about" ? <About data={about} /> : slug === "contact" ? <Contact /> : slug === "career" ? <Career /> : slug === "privacy-policy" && <PrivacyPolicy data={privacy} />}</>;
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
 paths.push({ params: { regular: "career" } });

 return {
  paths,
  fallback: "blocking",
 };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
 const { regular } = params;
 const allPages = await axios.get(process.env.NEXT_STRAPI_API + `api/posts?filters[slug][$eq]=${regular}`);
 const notFound = await axios.get(process.env.NEXT_STRAPI_API + GET_NOTFOUND_PAGE);
 const privacy = await axios.get(process.env.NEXT_STRAPI_API + GET_PRIVACY_PAGE);
 const about = await axios.get(process.env.NEXT_STRAPI_API + GET_ABOUT_PAGE);

 return {
  props: {
   slug: regular,
   data: allPages.data.data,
   notFound: notFound.data.data,
   privacy: privacy.data.data,
   about: about.data.data,
  },
  revalidate: 20,
 };
};
