import { siteMetadata } from "data/siteMetadata";
import BuiltWith from "./BuiltWith";

const Footer = () => {
  return (
    <div className="max-w-3xl px-3 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <footer>
        <div className="items-center justify-between mt-16 mb-8 space-y-4 md:mb-10 md:flex md:space-y-0">
          <BuiltWith />
          <div></div>
          <div className="flex my-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{`Copyright © ${new Date().getFullYear()}`}</div>
            <span>{` • `}</span>
            <span>{siteMetadata.footerTitle}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
