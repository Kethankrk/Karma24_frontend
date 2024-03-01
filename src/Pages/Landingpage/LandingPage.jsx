import { Link } from "react-router-dom";
import hero from "../../assets/HeroImage.svg";
import HomeNavbar from "../Components/HomeNavbar";
const LandingPage = () => {
  return (
    <div>
      <HomeNavbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={hero} className="max-w-sm rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">Welcome to Co-Project!</h1>
            <p className="py-6">
              Co-Project: Making Co-projecting Easy, Fun, and Lightning Fast! 🚀
              #CollaborationGoals
            </p>
            <Link
              to="/signup"
              className="hover:shadow-lg shadow-white btn px-8 font-bold text-2xl"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
