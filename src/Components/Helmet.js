import React from "react"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled" />
      </Helmet>
    </div>
  )
}
