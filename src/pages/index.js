import * as React from "react"
import '@fontsource-variable/raleway';

/* Local Components */
function Skill({ name }) {
  return <div className="w-fit mr-1 bg-[#4E435E] group-hover:bg-[#6a5c81] rounded-2xl">
    <p className="text-[#FDF7FF] font-light text-xs px-2 py-1">{name}</p>
  </div>;
}

const IndexPage = () => {
  return (
    <main id="" className="w-full min-w-[400px] font-raleway text-[#c1bcc4] bg-customPurpleBG p-8 sm:py-10 sm:px-20 md:px-40 lg:px-60 xl:px-80">

      {/* Top */}
      <div className="text-[#fffefc] font-bold pb-[50px]">
        <ul className="flex flex-row-reverse">
          <li>
            <a href="#contact">
              <div className="group hover:text-[#c1bcc4]">
                <div className="bg-customPurpleBG pb-3"><p className="text-lg md:text-xl">Contact</p></div>
                <div className="w-full h-1 md:h-[5px] md:mt-1 group-hover:bg-[#8e8691] ease-out duration-300"></div>
              </div>
            </a>
          </li>
          <li className="pr-5 md:pr-[30px]">
            <a href="#portfolio">
              <div className="group hover:text-[#c1bcc4]">
                <div className="bg-customPurpleBG pb-3"><p className="text-lg md:text-xl">Portfolio</p></div>
                <div className="w-full h-1 md:h-[5px] md:mt-1 group-hover:bg-[#8e8691] ease-out duration-300"></div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <h className="text-[#fffefc] text-4xl sm:text-5xl md:text-6xl font-bold">I am Carlo Dino.</h>
        <p className="text-xl sm:text-2xl md:text-3xl font-regular mt-3">A back-end software engineer based in San Francisco.</p>
      </div>

      {/* Divider */}
      <div className="bg-[#c1bcc4] mt-10 mb-8 w-24 h-1 lg:h-2"></div>

      {/* Introduction */}
      <div className="text-md sm:text-lg md:text-xl mr-15">
        <p className="leading-relaxed">
          Hello there! My name is Carlo Dino and I am a back-end engineer based in San Francisco. I work to turn
          innovative ideas into full-scale applications to be shared across the web. I am currently a coterminal
          Masters student at Stanford, majoring in Computer Science in both of my undergraduate and MS degrees.

          <br></br><br></br>
          I look towards combining my experience in software engineering with my academic studies to engineer efficient and robust services that power user experiences.
        </p>
      </div>

      {/* Divider */}
      <div id="portfolio" className="bg-[#c1bcc4] mt-12 md:mt-20 mb-8 w-24 h-1 lg:h-2 "></div>

      {/* Projects */}
      <h className="text-lg sm:text-xl md:text-2xl font-bold text-[#fffefc] mt-3">Projects</h>
      <ul>
        <li id="port-1" className="group rounded-2xl md:rounded-3xl bg-[#342f3b] hover:bg-[#4A4453] w-full my-6 ease-in-out duration-700 hover:duration-200 hover:translate-x-3 transition-all active:bg-[#342f3b]">
          <a href="#" aria-label="My portfolio page! (This page, will send you to the top)">
            <div className="w-full mt-5 mx-8 flex flex-row pb-3 sm:pb-0">
              <div className="w-1/6 mr-4 pb-1 my-auto flex justify-center">
                <h className="font-black text-6xl group-hover:text-[#fffefc] text-center mr-4">☕️</h>
              </div>
              <div className="w-5/6 mt-2 sm:my-3 mr-12">
                <h className="text-lg sm:text-xl md:text-2xl font-bold text-[#fffefc] group-hover:underline">Portfolio</h>
                <p className="text-xs sm:text-sm group-hover:text-[#fffefc] md:mr-5">This page! Responsive site designed using React and Tailwind on top of the Gatsby framework. Any future projects will be added here!</p>
                <div className="w-full mt-2 flex flex-row">
                  <Skill name="React"></Skill> <Skill name="Tailwind"></Skill> <Skill name="Gatsby"></Skill>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li id="port-2" className="group rounded-2xl md:rounded-3xl bg-[#342f3b] hover:bg-[#4A4453] w-full my-6 ease-in-out duration-700 hover:duration-200 hover:translate-x-3 transition-all active:bg-[#342f3b]">
          <a className="w-full h-full my-5 mx-8 flex flex-row" href="https://docs.google.com/presentation/d/1P_thLP0G39fU3FC67V7Vi84Y4xjoNIeU0hjbYuVn0vQ/edit?usp=share_link" target="_blank" rel="noreferrer noopener" aria-label="YouTube video overview of the RL model (opens in a new tab)">
            <div className="w-1/6 pb-1 my-auto flex justify-center">
              <h className="font-black text-6xl group-hover:text-[#fffefc] text-center mr-4">📱</h>
            </div>
            <div className="w-5/6 ml-4 my-2 sm:my-3 mr-12">
              <h className="text-lg sm:text-xl md:text-2xl font-bold text-[#fffefc] group-hover:underline">Poole — A Group-Making App</h>
              <p className="text-xs sm:text-sm group-hover:text-[#fffefc] md:mr-5">Poole is a mobile app conceptualized in Stanford's CS194 — Software Project Experience. The app is designed to facilitate group matching and event participation among students.</p>
              <div className="w-full mt-2 flex flex-row">
                <Skill name="React Native"></Skill> <Skill name="NodeJS"></Skill> <Skill name="GCP"></Skill> <Skill name="API"></Skill>
              </div>
            </div>
          </a>
        </li>
        <li id="port-3" className="group rounded-2xl md:rounded-3xl bg-[#342f3b] hover:bg-[#4A4453] w-full my-6 ease-in-out duration-700 hover:duration-200 hover:translate-x-3 transition-all active:bg-[#342f3b]">
          <a className="w-full h-full my-5 mx-8 flex flex-row" href="https://youtu.be/U_GycbLmH1w?si=4lNMlBCCtmLsgKf2" target="_blank" rel="noreferrer noopener" aria-label="YouTube video overview of the RL model (opens in a new tab)">
            <div className="w-1/6 pb-1 my-auto flex justify-center">
              <h className="font-black text-5xl group-hover:text-[#fffefc] text-center mr-4">🕹️</h>
            </div>
            <div className="w-5/6 ml-4 my-2 sm:my-3 mr-12">
              <h className="text-lg sm:text-xl md:text-2xl font-bold text-[#fffefc] group-hover:underline">Mario DDQN Model</h>
              <p className="text-xs sm:text-sm group-hover:text-[#fffefc] md:mr-5">Developed an RL agent to speedrun Super Mario Bros. (NES) using Pytorch and OpenAI Gym’s Super Mario Bros. environment—showcased in <a href="https://youtu.be/U_GycbLmH1w?si=4lNMlBCCtmLsgKf2" className="hover:text-[#342f3b] duration-200 underline" target="_blank" rel="noreferrer noopener" aria-label="YouTube video overview of the RL model (opens in a new tab)">this video</a>.</p>
              <div className="w-full mt-2 flex flex-row">
                <Skill name="PyTorch"></Skill> <Skill name="Gym"></Skill> <Skill name="RL"></Skill> <Skill name="AI/ML"></Skill>
              </div>
            </div>
          </a>
        </li>
        <li id="port-4" className="group rounded-2xl md:rounded-3xl bg-[#342f3b] hover:bg-[#4A4453] w-full my-6 ease-in-out duration-700 hover:duration-200 hover:translate-x-3 transition-all active:bg-[#342f3b]">
          <a className="w-full h-full my-5 mx-8 flex flex-row" href="https://drive.google.com/file/d/1fwW_O5MpF29k7AEXxH4yneHjKj1GxV_a/view?usp=sharing" target="_blank" rel="noreferrer noopener" aria-label="Vader's Github Repo (opens in a new tab)">
            <div className="w-1/6 pb-1 my-auto flex justify-center">
              <h className="font-black text-5xl group-hover:text-[#fffefc] text-center mr-4">💬</h>
            </div>
            <div className="w-5/6 ml-4 my-2 sm:my-3 mr-12">
              <h className="text-lg sm:text-xl md:text-2xl font-bold text-[#fffefc] group-hover:underline">Fraud Moderation Bot</h>
              <p className="text-xs sm:text-sm group-hover:text-[#fffefc] md:mr-5">Developed a Discord content moderation bot that detects, blocks, and reports financial scams and fraud
                within real-time Discord messages to server moderators. Responses are powered with GPT-4.</p>
              <div className="w-full mt-2 flex flex-row row">
                <Skill name="Python"></Skill> <Skill name="NLP"></Skill> <Skill name="Flask"></Skill> <Skill name="API"></Skill>
              </div>
            </div>
          </a>
        </li>
      </ul>

      {/* Divider */}
      <div className="bg-[#c1bcc4] mt-24 mb-8 w-24 h-1 lg:h-2"></div>

      {/* Experience */}
      <h className="text-lg sm:text-xl md:text-2xl font-bold text-[#fffefc]">Experience</h>
      <ul className="w-full pt-2 md:pt-4">
        <li className="group w-full flex flex-row">
          <div className="w-4/12 md:w-3/12">
            <p className="sm:text-lg group-hover:text-[#fffefc] duration-300 ease-in-out">2024 - 2024</p>
          </div>
          <a className="w-8/12 md:w-9/12 duration-300 ease-in-out" href="https://www.coinbase.com/about" target="_blank" rel="noreferrer noopener" aria-label="Intern at the Coinbase (opens in a new tab)">
            <p className="font-bold text-lg sm:text-xl md:text-2xl text-[#fffefc] group-hover:underline duration-300 ease-in-out">Software Engineer Intern</p>
            <a href="https://cesta.stanford.edu" className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out leading-none" aria-label="Coinbase's About Page (opens in a new tab)">Coinbase</a>
            <p className="text-xs sm:text-sm pt-3 group-hover:text-[#fffefc] duration-300 ease-in-out">
              Designed a modular seeding service interface for internal Coinbase database systems. Now in production, this tool enables Coinbase teams to perform low latency search over a billion transaction records.
            </p>
            <div className="w-full md:flex md:flex-row">
              <div className="w-full md:w-fit mt-3 flex flex-row">
                <Skill name="Go"></Skill> <Skill name="Elasticsearch"></Skill> <Skill name="Snowflake"></Skill> <Skill name="Datadog"></Skill>
              </div>
            </div>
          </a>
        </li>
        <li className="group w-full flex flex-row pt-12">
          <div className="w-4/12 md:w-3/12">
            <p className="sm:text-lg group-hover:text-[#fffefc] duration-300 ease-in-out">2022 - 2023</p>
          </div>
          <a className="w-8/12 md:w-9/12 duration-300 ease-in-out" href="https://cesta.stanford.edu/research/epicconnect" target="_blank" rel="noreferrer noopener" aria-label="Intern at the Center for Spatial and Textual Analysis (opens in a new tab)">
            <p className="font-bold text-lg sm:text-xl md:text-2xl text-[#fffefc] group-hover:underline duration-300 ease-in-out">Full Stack Engineer</p>
            <a href="https://cesta.stanford.edu" className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out leading-none" aria-label="Stanford's Center for Spatial and Textual Analysis (opens in a new tab)">Center for Spatial and Textual Analysis</a>
            <p className="text-xs sm:text-sm pt-3 group-hover:text-[#fffefc] duration-300 ease-in-out">
              Prototyed, developed, and deployed a full-stack application dedicated towards promoting pedagogical collaboration between community college
              instructors. Collaborated with Californian instructors directly through <a href="https://sgs.stanford.edu/outreach/community-college-engagement/epic-community-college-faculty-fellowship-program" className="hover:text-[#342f3b] underline" target="_blank" rel="noreferrer noopener" aria-label="Stanford School of Education website (opens in a new tab)">Stanford's EPIC program</a> to
              receive feedback and perform user testing. This work has been featured in <a href="https://cesta.stanford.edu/publications-all/anthology" className="hover:text-[#342f3b] underline" target="_blank" rel="noreferrer noopener" aria-label="CESTA's 2022 Anthology (opens in a new tab)">CESTA's 2022 Anthology</a>, CESTA's upcoming 2023 Anthology, and was showcased at <a href="https://urtc.mit.edu" className="hover:text-[#342f3b] underline" target="_blank" rel="noreferrer noopener" aria-label="MIT's current URTC page (opens in a new tab)">MIT's 2023 URTC</a>.
            </p>
            <div className="w-full md:flex md:flex-row">
              <div className="w-full md:w-fit mt-3 flex flex-row">
                <Skill name="React"></Skill> <Skill name="NoSQL"></Skill> <Skill name="NodeJS"></Skill> <Skill name="AWS"></Skill>
              </div>
              <div className="w-full md:w-fit mt-3 flex flex-row">
                <Skill name="Markdown"></Skill> <Skill name="S3"></Skill>
              </div>
            </div>
          </a>
        </li>
        <li className="group w-full flex flex-row pt-12">
          <div className="w-4/12 md:w-3/12">
            <p className="sm:text-lg group-hover:text-[#fffefc] duration-300 ease-in-out mr-3">July - Sept 2021</p>
          </div>
          <a className="w-8/12 md:w-9/12 duration-300 ease-in-out" href="https://olh.sweetwaterschools.org/ap-summer-assignments/" target="_blank" rel="noreferrer noopener" aria-label="My high school's webpage (opens in a new tab)">
            <p className="font-bold text-lg sm:text-xl md:text-2xl text-[#fffefc] group-hover:underline duration-300 ease-in-out">Teaching Assistant</p>
            <a href="https://olh.sweetwaterschools.org/ap-summer-assignments/" className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out leading-none" aria-label="My high school's webpage (opens in a new tab)">Olympian High School</a>
            <p className="text-xs sm:text-sm pt-3 group-hover:text-[#fffefc] duration-300 ease-in-out">
              Served as a teaching assistant for AP Computer Science A. Created multiple weeks worth of slides and gave supplementary lectures on
              object-oriented design. Tutored students one-on-one on class concepts.
            </p>
            <div className="w-full md:flex md:flex-row">
              <div className="w-full md:w-fit mt-3 flex flex-row">
                <Skill name="Java"></Skill> <Skill name="OOP"></Skill>
              </div>
            </div>
          </a>
        </li>
        <li className="group w-full flex flex-row pt-12">
          <div className="w-4/12 md:w-3/12">
            <p className="sm:text-lg group-hover:text-[#fffefc] duration-300 ease-in-out mr-3">June - Oct 2021</p>
          </div>
          <a className="w-8/12 md:w-9/12 duration-300 ease-in-out" href="https://curricullege.com/" target="_blank" rel="noreferrer noopener" aria-label="Curricullege front page (opens in a new tab)">
            <p className="font-bold text-lg sm:text-xl md:text-2xl text-[#fffefc] group-hover:underline duration-300 ease-in-out">Web Developer</p>
            <a href="https://www.chulavistaca.gov/departments/library" className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out leading-none" aria-label="Otay Ranch Public Library's webpage (opens in a new tab)">Otay Ranch Public Library</a>
            <p className="text-xs sm:text-sm pt-3 group-hover:text-[#fffefc] duration-300 ease-in-out">
              Served as the lead web developer in publishing <a href="https://curricullege.com/" className="hover:text-[#342f3b] underline" target="_blank" rel="noreferrer noopener" aria-label="Curricullege front page (opens in a new tab)">Curricullege</a>: a website describing the intricacies of the college application process. Volunteered with my peers to
              support our local library's mission to support local students in their application process' during lockdown.
            </p>
            <div className="w-full md:flex md:flex-row">
              <div className="w-full md:w-fit mt-3 flex flex-row">
                <Skill name="HTML"></Skill> <Skill name="CSS"></Skill> <Skill name="Figma"></Skill>
              </div>
            </div>
          </a>
        </li>
      </ul>

      {/* Divider */}
      <div id="contact" className="bg-[#c1bcc4] mt-24 mb-8 w-24 h-1 lg:h-2"></div>

      {/* Contact */}
      <h className="text-lg sm:text-xl md:text-2xl font-bold text-[#fffefc]">Contact</h>
      <ul className="w-full pt-3 md:pt-5">
        <li className="group w-full flex flex-row">
          <div className="w-4/12 md:w-3/12">
            <p className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] duration-300 ease-in-out">Email</p>
          </div>
          <div className="w-8/12 md:w-9/12">
            <p className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out leading-none">cdino @ stanford dot edu</p>
          </div>
        </li>
        <li className="group w-full flex flex-row pt-4">
          <div className="w-4/12 md:w-3/12">
            <p className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] duration-300 ease-in-out">LinkedIn</p>
          </div>
          <div className="w-8/12 md:w-9/12">
            <a href="https://www.linkedin.com/in/carloamiodino/" className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out leading-none" target="_blank" rel="noreferrer noopener" aria-label="My LinkedIn page! (Opens in a new tab)">linkedin/carloamiodino</a>
          </div>
        </li>
        <li className="group w-full flex flex-row pt-4">
          <div className="w-4/12 md:w-3/12">
            <p className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] duration-300 ease-in-out">GitHub</p>
          </div>
          <div className="w-8/12 md:w-9/12">
            <a href="https://github.com/dev-caelo" className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out leading-none" target="_blank" rel="noreferrer noopener" aria-label="My Github page! (Opens in a new tab)">github/dev-caelo</a>
          </div>
        </li>
        <li className="group w-full flex flex-row pt-4">
          <div className="w-4/12 md:w-3/12">
            <p className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] duration-300 ease-in-out">Resume</p>
          </div>
          <div className="w-8/12 md:w-9/12">
            <a href="https://drive.google.com/file/d/1s79IH7N0jMdaBnjuQQso4gt3FE4xYsKj/view?usp=sharing" className="text-sm sm:text-base md:text-lg group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out leading-none" target="_blank" rel="noreferrer noopener" aria-label="My Resume! (Opens in a new tab)">carlodino/resume</a>
          </div>
        </li>
      </ul>

      {/* Divider */}
      <div className="mt-36 sm:mt-40 md:mt-48 bg-[#c1bcc4] mb-8 w-24 h-1 lg:h-2"></div>

      <div className="w-full md:w-9/12">
        <p className="text-xs sm:text-sm md:text-base font-light">
          Hello! The structure and components of this site were modeled on Figma and implemented using React, Tailwind, and Gatsby. The text
          used is Raleway. Site design was heavily inspired by <a href="https://alexjpate.com" className="text-xs sm:text-sm md:text-base group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out underline" target="_blank" rel="noreferrer noopener" aria-label="Alex Pate's website! (Opens in a new tab)">Alex Pate's</a>, <a href="https://brittanychiang.com" className="text-xs sm:text-sm md:text-base group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out underline" target="_blank" rel="noreferrer noopener" aria-label="Brittany Chiang's website! (Opens in a new tab)">Brittany Chiang's</a>, and <a href="https://www.justinchi.me" className="text-xs sm:text-sm md:text-base group-hover:text-[#fffefc] hover:text-[#342f3b] duration-300 ease-in-out underline" target="_blank" rel="noreferrer noopener" aria-label="Justin Chi's website! (Opens in a new tab)">Justin Chi's</a> own
          portfolio pages.
        </p>
        <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#fffefc] pt-16">@ Carlo Dino</p>
      </div>



      {/* Divider */}
      <div className="mb-8 w-24 h-1 lg:h-2"></div>
    </main>
  )
}

export default IndexPage;

export const Head = () => <title>Carlo's Portfolio</title>
