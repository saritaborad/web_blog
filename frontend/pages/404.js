import axios from "axios";
import NotFound from "/layouts/404";
import { GET_NOTFOUND_PAGE } from "@/query/strapiQuery";
import Base from "@/layouts/components/Base";

const notFound = ({ data }) => {
 return (
  <Base>
   <NotFound data={data} />
  </Base>
 );
};

export default notFound;

export const getStaticProps = async () => {
 const notFound = await axios.get(process.env.NEXT_STRAPI_API + GET_NOTFOUND_PAGE);
 return {
  props: {
   data: notFound.data.data,
  },
 };
};
