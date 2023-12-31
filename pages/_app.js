import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress"

import '../styles/globals.css'

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "bar-of-progress",
  delay: 80,
});

Router.events.on("routeChangeStart",progress.start)
Router.events.on("routeChangeComplete",progress.finish)
Router.events.on('routeChangeError',progress.finish)
// Router.events.no("routeChangeComplete", progress.finish)
// Router.events.no("routeChangeError", progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
