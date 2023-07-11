import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h3 className="footer">
              Made With{" "}
              <span style={{ color: `red`, background: `transparent` }}>❤</span>{" "}
              By JAYMIN
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};
