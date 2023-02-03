import React from "react";
import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Foot = () => {
  return (
    <Footer bgDark={true}>
      <div className="w-full">
        <div className="bg-gray-100 grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          <div>
            <Footer.Title title="information" />
            <Footer.LinkGroup col={true}>
              <Footer.Link href="#">Source code</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
          <span className="text-slate-400">
            This website is a demo. Made with ReactJS.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://github.com/jackelyny" icon={BsGithub} />
            <Footer.Icon
              href="https://www.linkedin.com/in/jackelyn-yii-454611196/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Foot;
