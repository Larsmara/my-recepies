import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./index.scss";
import { useScreenSize } from "../../hooks";
import placeholderFace from "../../images/placeholder-face.png";
import { AuthCheck, useAuth, useFirestoreDocData, useUser, useFirestore } from "reactfire";

const Layout = ({ title, children }) => {
  const { pathname } = useLocation();
  const { width } = useScreenSize();

  const auth = useAuth();
  const user = useUser();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const signOut = () => {
    auth.signOut().then(() => console.log("signed out"));
  };

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
                <AuthCheck fallback={<Link to='/login'>Logg inn</Link>}>
                  <button className='navButton' onClick={signOut}>
                    Logg ut
                  </button>
                </AuthCheck>
              </li>
            </ul>
          )}
        </nav>

        <aside className='left-menu'>
          {user && (
            <div className='user-box'>
              <img src={user.photoURL ? user.photoURL : placeholderFace} alt='' />
              <div className='user-box-info'>
                <h1>{user.displayName}</h1>
                <Link className='btn btn-text' to={`/user/${user.uid}`}>
                  Profile
                </Link>
              </div>
            </div>
          )}
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
          </ul>
        </aside>

        <main className='content'>{children}</main>
      </div>
    </>
  );
};

export default Layout;
