import { useState, useEffect } from "react";
import { imagesArr } from "assets";
import useWindowSize from "../../hooks/useWindowSize";
import { Button } from "components";
import { useSelector } from "react-redux";

import './header.scss';

interface HeaderProps {
  /**
   * Logo of the site
   */
  type?: boolean;
  /**
   * Logo of the site
   */
  logo?: any;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
 * Navigate your menus
 */
  user?: any;
  /**
   * Optional click handler
   */
  onClick?: (e) => any;
}

/**
 * Primary UI component for user interaction
 */

export const Header = (props: HeaderProps) => {
  const { backgroundColor, logo, type, user } = props;
  const headerSettings = useSelector((state: any) => { return state?.headerState });
  const [scrollTop, setScrollTop] = useState(document.body.scrollTop);
  const [toggler, setToggler] = useState(false);
  const [width] = useWindowSize()

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  useEffect(() => {
    if (width > (type ? 1024 : 991)) setToggler(false);
  }, [width]);

  const handleOnScroll = () => {
    setScrollTop(window.scrollY);
  }

  return (
    type ?
      <div className="m_portal">
        <header className="m_portal-header" style={{ backgroundColor }}>
          <div className="mp_container">

            <div className="mp_header">
              <button type="button" className="mp_header-toggler" onClick={() => setToggler(!toggler)}><img src={imagesArr.Menu} alt='menu' /></button>

              <div className="mp_header-logo">
                <a href="/">
                  {logo}
                </a>
              </div>

              <div className={`mp_header-nav ${toggler ? 'mp_header-nav-open' : ''}`}>
                <ul className="m_flex m_align-center">
                  {headerSettings.loggedInMenus.map((item) => {
                    return (
                      <li key={item.label}>
                        <a href={item.route}>{item.label}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="mp_header-options">

                <div className="mp_header-options-icons">
                  <ul className="m_flex m_align-center">
                    <li>
                      <imagesArr.Message />
                    </li>
                    <li>
                      <imagesArr.Notification />
                    </li>
                  </ul>
                </div>

                <div className="mp_header-user">

                  <div className="mp_header-user-image">
                    <div className="mp_header-user-avatar">
                      <img src={user.avtar} alt="User" title="User" />
                    </div>
                    <span className="mp_header-user-status active"></span>
                  </div>

                  <div className="mp_header-user-info">
                    <p className="m_flex m_align-center">
                      {user.name}
                      <i><img src={imagesArr.DropdownArrow} alt="" /> </i>
                    </p>
                    <span>{user.email}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </header>
      </div>
      :
      <>
        <header className={`main-header ${scrollTop > 0 ? 'fixed-header' : ''}`} style={{ backgroundColor }}>
          <div className="container">
            <nav className="navbar">

              <a className="navbar-brand" href="/">
                {logo}
              </a>

              <button type="button" className="navbar-toggler btn" onClick={() => setToggler(!toggler)}><img src={imagesArr.Menu} alt='menu' /></button>

              <div className={`navbar-collapse ${toggler ? 'collapse-open' : ''}`}>
                <ul className="navbar-nav">
                  {headerSettings.menus.map((item) => {
                    return (
                      <li className="nav-item">
                        <a className="nav-link" href={item.route}>{item.label}</a>
                      </li>
                    )
                  })}
                </ul>

                <div className="nav-btn">
                  <Button variant="primary" label="Sign Up" icon={undefined} />
                  <Button variant="primary" label="Patient Portal" icon={undefined} />
                </div>
              </div>
            </nav>
          </div>
        </header>
      </>
  )
}


