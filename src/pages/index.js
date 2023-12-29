import * as React from "react"
import '@fontsource-variable/source-code-pro';

const pageStyles = {
  fontFamily: "Source Code Pro Variable, sans-serif",
}

const IndexPage = () => {
  return (
    <main className="w-full bg-customPurpleBG p-[50px]" style={pageStyles}>
      <div className="text-white pb-[50px]">
        <h>this will be header</h>
      </div>
      <div className="text-white">
        <h className="text-3xl">&gt; Carlo Dino</h>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
