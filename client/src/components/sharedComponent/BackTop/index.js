import React from "react"
import { BackTop } from "antd"
import topUp from "./../../../assets/topUp.png"

export default () => (
  <div background="white">
    <BackTop
      style={{
        position: "fixed",
        "z-index": "2",
        bottom: "30px",
        width: "40px",
        height: "40px",
        background: `url(${topUp}) 100%/100% no-repeat`
      }}
    ></BackTop>
  </div>
)
