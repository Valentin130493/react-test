import React from "react";
import { useSelector } from "react-redux";

export const Footer: React.FC = () => {
  const footerSettings = useSelector((state: any) => state?.footerState)

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="logo-social">
              <div className="footer-logo">
                <a href="/">{footerSettings.ftrTitle}</a>
                <p>{footerSettings.ftrDescription}</p>
              </div>
              <div className="social-icon">
                <ul>
                  {
                    footerSettings.socialMedia.map((item) => {
                      return (
                        <li>
                          <a href={item.route}>{item.image}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="footer-link">
              <h5>Company</h5>
              <ul>
                {
                  footerSettings.frtMenus.company.map((item) => {
                    return (
                      <li>
                        <a href={item.route}>{item.label}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer-link">
              <h5>Information</h5>
              <ul>
                {
                  footerSettings.frtMenus.information.map((item) => {
                    return (
                      <li>
                        <a href={item.route}>{item.label}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer-link">
              <h5>Learn</h5>
              <ul>
                {
                  footerSettings.frtMenus.learn.map((item) => {
                    return (
                      <li>
                        <a href={item.route}>{item.label}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
