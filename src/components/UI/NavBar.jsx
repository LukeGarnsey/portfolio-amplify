import { Link, useLocation } from 'react-router-dom';
import './css/navbar.css';

function NavBar(){
  
  return (
    <nav className="navbar navbar-expand navbar-light bg-app-dark py-4">
      
      <div className="container">
      <div className='bg-app-light navbar-title-container'></div>
        <h1 className='p-2 navbar-title'>Luke Garnsey</h1>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              <span className= {CheckCurrentPage("/")}>About</span></Link>
            <Link className="nav-item nav-link" to="/Portfolio">
            <span className={CheckCurrentPage("/Portfolio")}>Portfolio</span></Link>
            <Link className="nav-item nav-link" to="/Resume">
            <span className={CheckCurrentPage("/Resume")}>Resume</span></Link>
            <Link className="nav-item nav-link" to="/Contact">
            <span className={CheckCurrentPage("/Contact")}>Contact</span></Link>
          </div>
      </div>
    </nav>
  );
}

function CheckCurrentPage(myURL){
  return useLocation().pathname === myURL?"bg-app-blue text-app-black p-2":"text-app-blue p-2";
}
export default NavBar;