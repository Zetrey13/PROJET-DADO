import React from 'react'
import './footer.css'
export const Footer = () => {
  return (
      <div className="footer">
          <div className="top">
              <div className="item">
                  <h3>Telephone</h3>
                  <span>Aplle</span>
                  <span>Samsung</span>
                  <span>Alcatel</span>
                  <span>Nokia</span>
                  <span>Huaway</span>
              </div>
              <div className="item">
                  <h3>Ordinateur</h3>
                  <span>HP</span>
                  <span>DELL</span>
                  <span>Samsung</span>
                  <span>Lenovo</span>
              </div>
              <div className="item">
                  <h3>Apropos</h3>
                 <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla a numquam totam reprehenderit. </span>
              </div>
          </div>
          <div className="bottom"></div>
      </div>
  );
}
