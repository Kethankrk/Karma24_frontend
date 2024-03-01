import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const randomDataList = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      pass: "password123",
      confirmPass: "password123",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "9876543210",
      bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      pass: "securepass",
      confirmPass: "securepass",
    },
    // Add more random data entries as needed
  ];

  const generateRandomData = () => {
    const randomIndex = Math.floor(Math.random() * randomDataList.length);
    const randomData = randomDataList[randomIndex];
    setName(randomData.name);
    setEmail(randomData.email);
    setPhone(randomData.phone);
    setBio(randomData.bio);
    setPass(randomData.pass);
    setConfirmPass(randomData.confirmPass);
  };

  const SignUpHandle = async (e) => {
    e.preventDefault();
    const api = import.meta.env.VITE_API;
    if (pass === confirmPass) {
      setAlert(false);
      console.log("Sending data...");
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

        if (response.status === 201) {
          localStorage.setItem("token", response.data.access);
          localStorage.setItem("name", response.data.profile.name);
          localStorage.setItem("image", response.data.profile.image);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setAlert(true);
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
            <button className="btn btn-secondary" onClick={generateRandomData}>
              Load Random Data
            </button>
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
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPhone(e.target.value)}
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
                  onChange={(e) => setBio(e.target.value)}
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
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                  />
                </div>
              </div>
              {alert && (
                <p className="text-red-500 col-span-2">
                  Passwords do not match
                </p>
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
