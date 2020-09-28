import React, { useEffect, useState } from "react"
import "../assets/styles/App.scss"

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
  const [z, setZ] = useState("null")
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
                const gamma = Math.floor(e.gamma)
                const beta = Math.floor(e.beta)
                const alpha = Math.floor(e.alpha)
                setX(gamma)
                setY(beta)
                setZ(alpha)
                if (beta > -90 && beta < 90) {
                  layer1.style.transform = `translate3d(${-gamma * 1.4}px,${-beta * 1.2}px,0px)`
                  layer2.style.transform = `translate3d(${-gamma * 1.3}px,${-beta * 1.1}px,0px)`
                  layer3.style.transform = `translate3d(${-gamma * 1.2}px,${-beta * 1.05}px,0px)`
                  layer4.style.transform = `translate3d(${-gamma * 1.04}px,${-beta * 1.02}px,0px)`
                  layer5.style.transform = `translate3d(${-gamma * 0.8}px,${-beta * 0.9}px,0px)`
                  layer6.style.transform = `translate3d(${-gamma * 0.6}px,${-beta * 0.5}px,0px)`
                  layer7.style.transform = `translate3d(${-gamma * 0.5}px,${-beta * 0.3}px,0px)`
                  // } else if (beta > 90 && beta < 91) {
                  //   layer1.style.transformY = `translateY(${-beta * 1.2}px)`
                  //   layer2.style.transformY = `translateY(${-beta * 1.1}px)`
                  //   layer3.style.transformY = `translateY(${-beta * 1.05}px)`
                  //   layer4.style.transformY = `translateY(${-beta * 1.02}px)`
                  //   layer5.style.transformY = `translateY(${-beta * 0.9}px)`
                  //   layer6.style.transformY = `translateY(${-beta * 0.5}px)`
                  //   layer7.style.transformY = `translateY(${-beta * 0.3}px)`
                } else {
                  layer1.style.transform = `translate3d(${gamma * 1.4}px,${-beta * 1.2}px,0px)`
                  layer2.style.transform = `translate3d(${gamma * 1.3}px,${-beta * 1.1}px,0px)`
                  layer3.style.transform = `translate3d(${gamma * 1.2}px,${-beta * 1.05}px,0px)`
                  layer4.style.transform = `translate3d(${gamma * 1.04}px,${-beta * 1.02}px,0px)`
                  layer5.style.transform = `translate3d(${gamma * 0.8}px,${-beta * 0.9}px,0px)`
                  layer6.style.transform = `translate3d(${gamma * 0.6}px,${-beta * 0.5}px,0px)`
                  layer7.style.transform = `translate3d(${gamma * 0.5}px,${-beta * 0.3}px,0px)`
                }
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
          layer1.style.transform = `translate3d(${-x * 0.25}px,${-y * 0.08}px,0px`
          layer2.style.transform = `translate3d(${-x * 0.18}px,${-y * 0.06}px,0px`
          layer3.style.transform = `translate3d(${-x * 0.1}px,${-y * 0.05}px,0px`
          layer4.style.transform = `translate3d(${-x * 0.08}px,${-y * 0.04}px,0px`
          layer5.style.transform = `translate3d(${-x * 0.09}px,${-y * 0.03}px,0px`
          layer6.style.transform = `translate3d(${-x * 0.04}px,${-y * 0.02}px,0px`
          layer7.style.transform = `translate3d(${-x * 0.03}px,${-y * 0.01}px,0px`
        })
      }
    }
  })

  return (
    <>
      <button className="button">CLICK TO SHOW</button>
      <div className="note">
        gumma:{x} / beta:{y} / z:{z}
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
