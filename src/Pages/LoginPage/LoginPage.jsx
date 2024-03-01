import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [alert, Setalert] = useState(false);
  const [email, Setemail] = useState("");
  const [pass, Setpass] = useState("");
  const navigate = useNavigate();
  const SignInHandle = async (e) => {
    e.preventDefault();
    const api = import.meta.env.VITE_API;
    Setalert(false);
    console.log("sent");
    try {
      const data = {
        email: email,
        password: pass,
      };
      const response = await axios.post(`${api}token/`, data);
      const profile = await axios.get(`${api}user/profile/`, {
        headers: {
          Authorization: `Bearer ${response.data.access}`,
        },
      });
      console.log(profile.data);
      if (response.status == 200) {
        localStorage.setItem("token", response.data.access);
        localStorage.setItem("name", profile.data.name);
        localStorage.setItem("image", profile.data.image);
        navigate("/");
      } else {
        Setalert(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Welcome back to Co-Project: Where Completing Projects is Fast,
              Easy, and Fun! Lets Dive In and Get It Done Together!
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={SignInHandle}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  value={email}
                  onChange={(e) => Setemail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  value={pass}
                  onChange={(e) => Setpass(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {alert ? (
                <div>
                  <p className="text-red-700">Login failed</p>
                </div>
              ) : (
                <p className="hidden"></p>
              )}
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
