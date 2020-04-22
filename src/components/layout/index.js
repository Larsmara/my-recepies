import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import { useScreenSize } from "../../hooks";

const Layout = ({ title, children }) => {
  const { pathname } = useLocation();
  const { width } = useScreenSize();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property='og:title' content={title} />
      </Helmet>
      <div className='grid-layout'>
        <nav className='navbar'>
          <ul className='left'>
            <li>
              <Link to='/'>MyRecipes</Link>
            </li>
          </ul>
          {width > 500 && (
            <ul className='right'>
              <li>
                <Link to='/'>Logg ut</Link>
              </li>
            </ul>
          )}
        </nav>

        <aside className='left-menu'>
          <ul>
            <li>
              <Link to='/'>Recipes</Link>
            </li>
            <li>
              <Link to='/new'>New Recipe</Link>
            </li>
            <li>
              <Link to='/favorites'>Favorites</Link>
            </li>
            <li>
              <Link to='/user'>User</Link>
            </li>
          </ul>
        </aside>

        <main className='content'>{children}</main>
      </div>
    </>
  );
};

export default Layout;
