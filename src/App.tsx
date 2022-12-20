import * as React from "react";
import "../public/AauxPro-Bold.ttf";
import "./style.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

/**
 * https://stackoverflow.com/questions/71822728/how-to-enable-listitembutton-to-use-react-router-v6-link
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <div className="top-left">
          <p className="top-left-contact">contact</p>
          <p className="top-left-nico">nicocarmine</p>
        </div>
        <div className="central">
          <div className="central-pix">
            <div className="pix"></div>
            <div className="text">
              <div className="text-left">
                <p className="text-content">
                  It's always a hassle to correctly position a rotated text.
                </p>
              </div>
              <div className="text-right">
                <p className="text-content">
                  It's always a hassle to correctly position a rotated text.
                  width or height is needed (hover to change the text direction)
                </p>
              </div>
            </div>
            <div className="divider"></div>

            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
            <div className="pix"></div>
          </div>
        </div>

        <div className="top-right">
          <p className="top-left-travaux">travaux</p>
        </div>
      </div>
    </Router>
  );
};
export default App;
