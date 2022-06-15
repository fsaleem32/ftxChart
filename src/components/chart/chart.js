import axios from "axios";
import React, { useEffect, useState } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

export default function Chart() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <TradingViewWidget
        symbol="COMPUSDT"
        theme={Themes.DARK}
        autosize="true"
        timezone="exchange"
        style="1"
        interval="D"
        save_image="false"
        toolbar_bg="#f1f3f6"
        //   enable_publishing="true"
        withdateranges="true"
        range="YTD"
        hide_side_toolbar="false"
        allow_symbol_change="true"
        //   details="true"
        //   hotlist="true"
        //   calendar="true"
        show_popup_button="true"
        popup_width="1000"
        popup_height="650"
        container_id="tradingview_817d5"
        studies={[
          "ROC@tv-basicstudies",
          "StochasticRSI@tv-basicstudies",
          "MASimple@tv-basicstudies",
        ]}
        locale="en"
      />
    </div>
  );
}
