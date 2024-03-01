import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [phone, SetPhone] = useState("");
  const [bio, Setbio] = useState("");
  const [pass, Setpass] = useState("");
  const [confimPass, SetConfirmPass] = useState("");
  const [alert, Setalert] = useState(false);
  const navigate = useNavigate();
  const SignUpHandle = async (e) => {
    e.preventDefault();
    const api = import.meta.env.VITE_API;
    if (pass === confimPass) {
      Setalert(false);
      console.log("sent");
      try {
        const data = {
          user: {
            email: email,
            password: pass,
          },
          profile: {
            name: name,
            phone: phone,
            bio: bio,
          },
        };
        const response = await axios.post(`${api}core/signup/`, data);

        if (response.status == 201) {
          localStorage.setItem("token", response.data.access);
          localStorage.setItem("name", response.data.profile.name);
          localStorage.setItem("image", response.data.profile.image);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Setalert(true);
    }
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Create user account and enjoy the project time with your friends.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ">
            <form
              className="card-body md:grid grid-cols-2"
              onSubmit={SignUpHandle}
            >
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => Setname(e.target.value)}
                />
              </div>
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
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  placeholder="phone number"
                  className="input input-bordered"
                  required
                  value={phone}
                  onChange={(e) => SetPhone(e.target.value)}
                />
              </div>
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Profile pic</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                  required
                />
              </div>

              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Bio</span>
                </label>
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Tell about yourself"
                  className="input input-bordered"
                  required
                  value={bio}
                  onChange={(e) => Setbio(e.target.value)}
                />
              </div>
              <div className="md:grid grid-cols-2 gap-1 col-span-2">
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    value={confimPass}
                    onChange={(e) => {
                      SetConfirmPass(e.target.value);
                    }}
                  />
                </div>
              </div>
              {alert ? (
                <div>
                  <p className="text-red-500">Password not match</p>
                </div>
              ) : (
                <p></p>
              )}
              <div className="form-control col-span-2">
                <button className="btn btn-primary " type="submit">
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
