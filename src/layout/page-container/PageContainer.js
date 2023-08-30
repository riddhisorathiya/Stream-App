import React, { useState, useEffect } from "react";

const PageContainer = ({ ...props }) => {
  const [themeState] = useState({
    main: "dark",
    sidebar: "dark",
    header: "dark",
    skin: "dark",
  });

  useEffect(() => {
    document.body.className = `nk-body bg-dark npc-default has-sidebar no-touch nk-nio-theme ${
      themeState.skin === "dark" ? "dark-mode" : ""
    }`;
  }, [themeState]);

  return (
    <React.Fragment>
      <div className="nk-app-root">
        <div className="nk-wrap nk-wrap-nosidebar">
          <div className="nk-content">{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PageContainer;
