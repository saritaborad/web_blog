import { markdownify } from "/lib/utils/textConverter";

const NotFound = ({ data }) => {
 const { title, content } = data;
 return (
  <section className="section">
   <div className="container">
    <div className="flex h-[40vh] items-center justify-center">
     <div className="text-center">
      {markdownify(title, "h2", "h2 mb-8 lg:text-[40px] title-text text-center cursor-default")}
      <h2 className="text-white cursor-default">Page Not Found</h2>
     </div>
    </div>
   </div>
  </section>
 );
};

export default NotFound;
