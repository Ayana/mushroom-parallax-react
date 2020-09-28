import React from "react"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Helmet>
    </div>
  )
}
