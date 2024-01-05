import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles} className="bg-white">
      <h1 style={headingStyles}>Page not found??</h1>
      <p style={paragraphStyles}>
        Sorry, this page does not exist! How did you even get here by the way?

        <br />
        <Link to="/">
          <div className="w-fit h-fit bg-green-700 hover:bg-green-800 rounded-xl mt-5">
            <p className="px-5 py-3 text-white">Return</p>
          </div>
        </Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
