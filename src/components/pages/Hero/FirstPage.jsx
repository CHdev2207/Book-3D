import React from "react";
import personImg from "../../../assets/person1.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow">
        <div className="p-10  space-y-4">
          {/* image-container */}
          <div>
            <img src={personImg} alt="" className="w-[300px] mx-auto" />
          </div>
          {/* text-container */}
          <div>
            <div className="space-y-3">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                I'm Homie Yogurt
              </p>
              <p className="text-black/75 text-left">Lorem ipsum dolor sit amet.</p>
              <p className="text-black/75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                exercitationem tempora in nisi quos.
              </p>
              <a
                className="inline-block primary-btn "
                href="https://www.instagram.com/homieyogurt.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                {" "}
                Follow the news
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
