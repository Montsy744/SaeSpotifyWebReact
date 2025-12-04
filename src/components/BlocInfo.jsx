import React from "react";

import "./../css/BlocInfo.css";

function BlocInfo(props) {
  return (
    <div className="blocInfo">
      <div>
        <h2>{props.titre} :</h2>
      </div>

      <div className="blocInfo-body">{props.children}</div>
    </div>
  );
}

export default BlocInfo;
