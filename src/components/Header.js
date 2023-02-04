import discord from "../images/discord.png"
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";
import Hero from './Hero';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
// import { useLocation } from "react-router-dom";
const Header = () => {
  // const location = useLocation();
  // console.log(location.pathname);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithPopup(provider)
      .then(() => navigate("/channels"))
      .catch((error) => alert(error.message));
  };
    return (
      <>
        <header className=" flex items-center justify-between py-4 px-6 bg-black" >
        <Link to="/">
          <img
            src={discord}
            className="w-32 h-12 object-contain"
            alt="Logo"
          />
        </Link>
        <div className="hidden lg:flex  space-x-6 ">
          <Link to="/"className="link">Download</Link>
          <Link to="/" className="link">Why Discord?</Link>
          <Link to="/" className="link">Nitro</Link>
          <Link to="/" className="link">Safety</Link>
          <Link to="/" className="link">Support</Link>
        </div>
        <div className="flex space-x-4">
        <button
          className="bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium"
          onClick={!user ? signIn : () => navigate("/channels")}
        >Login
          {!user ? "Login" : "Open Discord"}
        </button>
        <MenuIcon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
       <Hero />
       </>
    )
};

export default Header;