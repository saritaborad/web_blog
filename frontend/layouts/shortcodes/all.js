import Accordion from "./Accordion";
import Button from "./Button";
import Code from "./Code";
import Notice from "./Notice";
import Tab from "./Tab";
import Tabs from "./Tabs";
import Video from "./Video";
import Youtube from "./Youtube";

const Paragraph = ({ children }) => {
 return <p className="content-text dark:text-darkmode-dark">{children}</p>;
};

// Custom component for headings
const Heading = ({ children, level }) => {
 const HeadingTag = `h${level}`;
 const headingClasses = `content-title dark:text-darkmode-dark`;

 return <HeadingTag className={headingClasses}>{children}</HeadingTag>;
};

const shortcodes = {
 Button,
 Accordion,
 Video,
 Tab,
 Tabs,
 Notice,
 Code,
 Youtube,
 p: Paragraph,
 h1: (props) => <Heading level={1} {...props} />,
 h2: (props) => <Heading level={2} {...props} />,
 h3: (props) => <Heading level={3} {...props} />,
 h4: (props) => <Heading level={4} {...props} />,
 h5: (props) => <Heading level={5} {...props} />,
 h6: (props) => <Heading level={6} {...props} />,
 ol: ({ children }) => <ol className="list-decimal ">{children}</ol>,
 li: ({ children }) => <li className="dark:text-darkmode-dark">{children}</li>,
};

export default shortcodes;
