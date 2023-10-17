import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}></img>
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray leading-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* <div className="lg:hidden"> */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
