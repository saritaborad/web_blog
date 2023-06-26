import { slug } from "github-slugger";
import { marked } from "marked";

// slugify
export const slugify = (content) => {
 if (!content) return null;

 return slug(content);
};

// markdownify
export const markdownify = (content, tag, className) => {
 if (!content) return null;

 const Tag = tag;
 return tag ? (
  <Tag
   className={className}
   dangerouslySetInnerHTML={{
    __html: tag === "div" ? marked.parse(content) : marked.parseInline(content), // marked to convert simple to html
   }}
  />
 ) : (
  <span
   className={className}
   dangerouslySetInnerHTML={{
    __html: marked.parseInline(content),
   }}
  />
 );
};

// plainify
export const plainify = (content) => {
 if (!content) return null;

 const mdParsed = marked.parseInline(String(content)); // parse content string and convert md syntax to html
 const filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, ""); // remove html tag or < > brackets
 const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, ""); // remove spaces
 const stripHTML = htmlEntityDecoder(filterSpaces);
 return stripHTML;
};

// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities) => {
 let entityList = {
  "&nbsp;": " ",
  "&lt;": "<",
  "&gt;": ">",
  "&amp;": "&",
  "&quot;": '"',
  "&#39;": "'",
 };
 let htmlWithoutEntities = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity) => {
  return entityList[entity];
 });
 return htmlWithoutEntities;
};
