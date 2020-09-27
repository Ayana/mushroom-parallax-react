import React, { useEffect } from "react"
import "./assets/styles/App.scss"

function App() {
  useEffect(() => {
    // Get correct height function with clearTimeout to prevent too many requests
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    const currentWidth = window.innerWidth

    let timeoutId = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (currentWidth !== window.innerWidth) {
          // get correct height
          const vh = window.innerHeight * 0.01
          document.documentElement.style.setProperty("--vh", `${vh}px`)
          console.log("invoke")
        }
      }, 500)
    }
    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return (
    <div className="parallax-container">
      <div className="parallax-layer layer5"></div>
      <div className="parallax-layer layer4"></div>
      <div className="parallax-layer layer3"></div>
      <div className="parallax-layer layer2"></div>
      <div className="parallax-layer layer1"></div>
    </div>
  )
}

export default App
