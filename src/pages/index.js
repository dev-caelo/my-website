import * as React from "react"
import '@fontsource-variable/raleway';

/* Functionality Scripts */
const expandPortfolio = (id) => {

}

const IndexPage = () => {
  return (
    <main className="w-full font-raleway text-[#c1bcc4] bg-customPurpleBG p-8 sm:py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80">

      {/* Top */}

      <div className="text-[#fffefc] font-bold pb-[50px]">
        <ul className="flex flex-row-reverse">
          <li>
            <a href="#contact">
              <div className="hover:bg-[#8e8691] hover:text-[#c1bcc4] md:ease-in-out md:duration-300 pb-1 md:pb-[5px]">
                <div className="bg-customPurpleBG hover:bg-customPurpleBG pb-3"><p className="text-lg md:text-xl">Contact</p></div>
              </div>
            </a>
          </li>
          <li className="pr-5 md:pr-[30px]">
            <a href="#portfolio">
              <div className="hover:bg-[#8e8691] hover:text-[#c1bcc4] md:ease-in-out md:duration-300 pb-1 md:pb-[5px]">
                <div className="bg-customPurpleBG hover:bg-customPurpleBG pb-3"><p className="text-lg md:text-xl">Portfolio</p></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <h className="text-[#fffefc] text-4xl sm:text-5xl md:text-6xl font-bold">I am Carlo Dino.</h>
        <p className="text-xl sm:text-2xl md:text-3xl font-regular mt-3">Full-stack developer and aspiring AI researcher.</p>
      </div>

      {/* Divider */}
      <div className="bg-[#c1bcc4] mt-10 mb-8 w-24 h-1 lg:h-2"></div>

      {/* Introduction */}
      <div className="text-md sm:text-lg md:text-xl mr-15">
        <p className="leading-relaxed">
          Hello there! My name is Carlo Dino and I am a full-stack engineer based in the Bay Area. I work to turn
          innovative ideas into full-scale online applications to share across the web. I am currently an 
          undergraduate student at Stanford, majoring in Computer Science with a focus on Artificial Intelligence.

          <br></br><br></br>
          I work to combine my experience in full-stack development with my studies to engineer AI-powered experiences.
        </p>
      </div>

      {/* Divider */}
      <div className="bg-[#c1bcc4] mt-12 md:mt-20 mb-8 w-24 h-1 lg:h-2"></div>

      {/* Portfolio */}
      <h className="text-lg sm:text-xl md:text-2xl font-bold text-[#fffefc] mt-3">Portfolio</h>
      <ul id="portfolio">
        <li id="port-1" className="rounded-2xl md:rounded-3xl bg-[#281b33] hover:bg-[#3a284a] active:bg-[#3a284a] w-full h-20 md:h-24 my-5 first:my-6">
          <div className="bg-transparent bg-[#3a284a] w-full h-full rounded-2xl md:rounded-3xl">

          </div>
        </li>
      </ul>

    </main>
  )
}

export default IndexPage;

export const Head = () => <title>Carlo's Portfolio</title>
