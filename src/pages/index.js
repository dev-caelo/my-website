import * as React from "react"
import '@fontsource-variable/raleway';

const pageStyles = {
  fontFamily: "Raleway Variable, sans-serif",
}

const IndexPage = () => {
  return (
    <main className="h-[1000px] w-full text-[#c1bcc4] bg-customPurpleBG p-[30px] sm:p-[50px] md:px-[100px] lg:px-[250px] xl:px-[350px]" style={pageStyles}>

      {/* Top */}

      <div className="text-white font-bold pb-[50px]">
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
        <h className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">I am Carlo Dino.</h>
        <p className="text-xl sm:text-2xl md:text-3xl font-regular mt-3">Full-stack developer and aspiring AI researcher.</p>
      </div>
      <div className="bg-[#c1bcc4] mt-10 w-24 h-1 lg:h-2"></div>

      {/* Body */}

      <div className="text-lg md:text-xl">
        
      </div>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
