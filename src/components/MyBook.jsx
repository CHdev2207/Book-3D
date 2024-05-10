import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover-1.png";
import EndImg from "../assets/last-page.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects.jsx";

import ProjectImg1 from "../assets/projects/home-img-1.jpeg";
import ProjectImg2 from "../assets/projects/home-img-3.jpeg";
import ProjectImg3 from "../assets/projects/home-img-1.jpeg";
import ProjectImg4 from "../assets/projects/home-img-3.jpeg";


const ProjectData = [
  {
    name: "โยเกิร์ตสด",
    description: "",
    image: ProjectImg1,
    previewLink: "https://car-rental-tcj.netlify.app/",
  },
  {
    name: "ไอติมโยเกิร์ต",
    description: "",
    image: ProjectImg2,
    previewLink: "https://foodies-zone.netlify.app/",
  },
];
const ProjectData2 = [
  {
    name: "โยเกิร์ตสด",
    description: "",
    image: ProjectImg3,
    previewLink: "https://shopsy-tcj.netlify.app/",
  },
  {
    name: "ไอติมโยเกิร์ต",
    description: "",
    image: ProjectImg4,
    previewLink: "https://travel-tcj.netlify.app/",
  },
];

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title="" />
      </Page>

      <Page number={2}>
        <FirstPage />
      </Page>
      {/* 
      <Page number={3}>
        <Skills />
      </Page> */}

  
      <Page number={4}>
        <Services />
      </Page>

      <Page number={5}>
        <About />
      </Page>

      <Page number={6}>
        <Projects ProjectData={ProjectData,ProjectData2} />
      </Page>

      <Page number={7}>
        <Projects ProjectData={ProjectData2} />
      </Page>

      <Page number={8}>
        <Projects ProjectData={ProjectData,ProjectData2} />
      </Page>

  
      <Page number={8}>
        <Cover coverImg={EndImg} title="Thanks" />
      </Page>

    </HTMLFlipBook>
  );
}

export default MyBook;
