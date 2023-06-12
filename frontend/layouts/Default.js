import { markdownify } from "/lib/utils/textConverter";
import shortcodes from "/layouts/shortcodes/all";
import { MDXRemote } from "next-mdx-remote";

const Default = ({ data }) => {
 const [mdxContent, setMdxContent] = useState();
 const { content, title } = data;

 useEffect(() => {
  async function fetchMdx() {
   setMdxContent(await parseMDX(content));
  }
  fetchMdx();
 }, []);

 return (
  <section className="section">
   <div className="container">
    {markdownify(title, "h1", "h2 mb-8 text-center")}
    {mdxContent && (
     <div className="content">
      <MDXRemote {...mdxContent} components={shortcodes} />
     </div>
    )}
   </div>
  </section>
 );
};

export default Default;
