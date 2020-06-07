import React from "react";

import "./Loading.scss";

const Loading = ({ percent = null }) => (
  <div className="loading" data-testid="loading">
    <div className="preloader">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
    <p>{percent ? `${percent} %` : "Carregando"}</p>
  </div>
);

export default Loading;
