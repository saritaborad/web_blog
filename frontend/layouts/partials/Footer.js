import Social from "/layouts/components/Social";
import config from "/config/config.json";
import menu1 from "/config/menu.json";
import social1 from "/config/social.json";
import ImageFallback from "/layouts/components/ImageFallback";
import Logo from "/layouts/components/Logo";
import { markdownify } from "/lib/utils/textConverter";
import Link from "next/link";
import { fetchConfig } from "@/commonApi";
import { useConfig } from "@/hooks/customHook";

const Footer = () => {
 const configData = useConfig();
 let menu = configData ? configData.menu : menu1;
 const { copyright = "", footer_content = "" } = configData ? configData.params : config.params;
 let social = configData ? configData.social : social1;

 return (
  <footer className="section relative mt-12 pt-[70px] pb-[50px]">
   <ImageFallback className="-z-[1] object-cover object-left  md:object-top" src="/images/footer-bg-shape.svg" alt="footer background" fill={true} />
   <div className="container text-center">
    {/* logo goes here */}
    <div className="mb-6 inline-flex">
     <Logo configData={configData} />
    </div>
    {markdownify(footer_content, "p", "max-w-[638px] mx-auto")}

    {/* footer menu */}
    <ul className="mb-12 mt-6 flex-wrap space-x-2 lg:space-x-4">
     {menu.footer.map((menu) => (
      <li className="inline-block" key={menu.name}>
       <Link href={menu.url} className="p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4">
        {menu.name}
       </Link>
      </li>
     ))}
    </ul>
    {/* social icons */}
    <div className="inline-flex">
     <Social source={social} className="socials mb-12 justify-center" />
    </div>
    {/* copyright */}
    {markdownify(copyright, "p")}
   </div>
  </footer>
 );
};

export default Footer;
