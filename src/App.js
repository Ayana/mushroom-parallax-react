import React, { useEffect, useState } from "react"
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
        }
      }, 500)
    }
    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  })

  const [x, setX] = useState("null")
  const [y, setY] = useState("null")
  useEffect(() => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerWidth / 2
    const button = document.querySelector(".button")
    const container = document.querySelector(".parallax-container")
    const layer1 = document.querySelector(".layer1")
    const layer2 = document.querySelector(".layer2")
    const layer3 = document.querySelector(".layer3")
    const layer4 = document.querySelector(".layer4")
    const layer5 = document.querySelector(".layer5")
    const layer6 = document.querySelector(".layer6")
    const layer7 = document.querySelector(".layer7")
    button.addEventListener("click", onClick)

    function onClick() {
      // feature detect
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        DeviceOrientationEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
              button.style.display = "none"
              container.style.display = "block"
              window.addEventListener("deviceorientation", (e) => {
                const x = Math.floor(e.gamma)
                const y = Math.floor(e.beta)
                // const x = Math.floor(e.gamma - centerX)
                // const y = Math.floor(e.beta - centerY)
                setX(x)
                setY(y)
                layer1.style.transform = `translate3d(${-x * 0.75}px,${-y * 0.24}px,${x + y}px`
                layer2.style.transform = `translate3d(${-x * 0.6}px,${-y * 0.24}px,${x + y}px`
                layer3.style.transform = `translate3d(${-x * 0.3}px,${-y * 0.15}px,${x + y}px`
                layer4.style.transform = `translate3d(${-x * 0.24}px,${-y * 0.12}px,${x + y}px`
                layer5.style.transform = `translate3d(${-x * 0.27}px,${-y * 0.09}px,${x + y}px`
                layer6.style.transform = `translate3d(${-x * 0.12}px,${-y * 0.06}px,${x + y}px`
                layer7.style.transform = `translate3d(${-x * 0.09}px,${-y * 0.03}px,${x + y}px`
              })
            }
          })
          .catch(console.error)
      } else {
        button.style.display = "none"
        container.style.display = "block"
        // handle regular non iOS 13+ devices
        document.body.addEventListener("mousemove", (e) => {
          const x = e.clientX - centerX
          const y = e.clientY - centerY
          layer1.style.transform = `translate3d(${-x * 0.25}px,${-y * 0.08}px,${x + y}px`
          layer2.style.transform = `translate3d(${-x * 0.18}px,${-y * 0.06}px,${x + y}px`
          layer3.style.transform = `translate3d(${-x * 0.1}px,${-y * 0.05}px,${x + y}px`
          layer4.style.transform = `translate3d(${-x * 0.08}px,${-y * 0.04}px,${x + y}px`
          layer5.style.transform = `translate3d(${-x * 0.09}px,${-y * 0.03}px,${x + y}px`
          layer6.style.transform = `translate3d(${-x * 0.04}px,${-y * 0.02}px,${x + y}px`
          layer7.style.transform = `translate3d(${-x * 0.03}px,${-y * 0.01}px,${x + y}px`
        })
      }
    }
  })

  return (
    <>
      <button className="button">CLICK TO SHOW</button>
      <div className="note">
        {x} / {y}
      </div>
      <div className="parallax-container">
        <div className="parallax-layer layer7"></div>
        <div className="parallax-layer layer6"></div>
        <div className="parallax-layer layer5"></div>
        <div className="parallax-layer layer4"></div>
        <div className="parallax-layer layer3"></div>
        <div className="parallax-layer layer2"></div>
        <div className="parallax-layer layer1"></div>
      </div>
    </>
  )
}

export default App
