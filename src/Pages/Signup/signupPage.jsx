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
  const [image, setimage] = useState("");
  const navigate = useNavigate();

  const randomDataList = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      pass: "password123",
      confirmPass: "password123",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "9876543210",
      bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      pass: "securepass",
      confirmPass: "securepass",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Michael Johnson",
      email: "michaeljohnson@example.com",
      phone: "5555555555",
      bio: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      pass: "mikepass",
      confirmPass: "mikepass",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      name: "Sarah Wilson",
      email: "sarahwilson@example.com",
      phone: "4444444444",
      bio: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      pass: "sarahpass",
      confirmPass: "sarahpass",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      name: "Chris Thompson",
      email: "christhompson@example.com",
      phone: "6666666666",
      bio: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      pass: "chrispass",
      confirmPass: "chrispass",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    // Add 25 more random data entries
    {
      name: "Emily Brown",
      email: "emilybrown@example.com",
      phone: "3333333333",
      bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      pass: "emilypass",
      confirmPass: "emilypass",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      name: "David Wilson",
      email: "davidwilson@example.com",
      phone: "2222222222",
      bio: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      pass: "davidpass",
      confirmPass: "davidpass",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Jessica Martinez",
      email: "jessicamartinez@example.com",
      phone: "7777777777",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pass: "jessicapass",
      confirmPass: "jessicapass",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      name: "Andrew Taylor",
      email: "andrewtaylor@example.com",
      phone: "8888888888",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      pass: "andrewpass",
      confirmPass: "andrewpass",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Emma Johnson",
      email: "emmajohnson@example.com",
      phone: "9999999999",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      pass: "emmapass",
      confirmPass: "emmapass",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    {
      name: "Michael Brown",
      email: "michaelbrown@example.com",
      phone: "1111111111",
      bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      pass: "michaelpass",
      confirmPass: "michaelpass",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      name: "Olivia Rodriguez",
      email: "oliviarodriguez@example.com",
      phone: "2222222222",
      bio: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      pass: "oliviapass",
      confirmPass: "oliviapass",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      name: "Matthew Lee",
      email: "matthewlee@example.com",
      phone: "3333333333",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pass: "matthewpass",
      confirmPass: "matthewpass",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      name: "Isabella Martinez",
      email: "isabellamartinez@example.com",
      phone: "4444444444",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      pass: "isabellapass",
      confirmPass: "isabellapass",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      name: "Ethan Taylor",
      email: "ethantaylor@example.com",
      phone: "5555555555",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      pass: "ethanpass",
      confirmPass: "ethanpass",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      name: "Sophia Brown",
      email: "sophiabrown@example.com",
      phone: "6666666666",
      bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      pass: "sophiapass",
      confirmPass: "sophiapass",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    {
      name: "William Garcia",
      email: "williamgarcia@example.com",
      phone: "7777777777",
      bio: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      pass: "williampass",
      confirmPass: "williampass",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      name: "Ava Martinez",
      email: "avamartinez@example.com",
      phone: "8888888888",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pass: "avapass",
      confirmPass: "avapass",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Alexander Lee",
      email: "alexanderlee@example.com",
      phone: "9999999999",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      pass: "alexanderpass",
      confirmPass: "alexanderpass",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Mia Hernandez",
      email: "miahernandez@example.com",
      phone: "1111111111",
      bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      pass: "miapass",
      confirmPass: "miapass",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    {
      name: "James Garcia",
      email: "jamesgarcia@example.com",
      phone: "2222222222",
      bio: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      pass: "jamespass",
      confirmPass: "jamespass",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      name: "Amelia Rodriguez",
      email: "ameliarodriguez@example.com",
      phone: "3333333333",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pass: "ameliapass",
      confirmPass: "ameliapass",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      name: "Benjamin Hernandez",
      email: "benjaminhernandez@example.com",
      phone: "4444444444",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      pass: "benjaminpass",
      confirmPass: "benjaminpass",
      image: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      name: "Charlotte Lopez",
      email: "charlottelopez@example.com",
      phone: "5555555555",
      bio: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      pass: "charlottepass",
      confirmPass: "charlottepass",
      image: "https://randomuser.me/api/portraits/women/27.jpg",
    },
    {
      name: "Daniel Taylor",
      email: "danieltaylor@example.com",
      phone: "6666666666",
      bio: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      pass: "danielpass",
      confirmPass: "danielpass",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      name: "Chloe Lee",
      email: "chloelee@example.com",
      phone: "7777777777",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      pass: "chloepass",
      confirmPass: "chloepass",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      name: "Elijah Brown",
      email: "elijahbrown@example.com",
      phone: "8888888888",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      pass: "elijahpass",
      confirmPass: "elijahpass",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
    },
  ];

  const generateRandomData = () => {
    const randomIndex = Math.floor(Math.random() * randomDataList.length);
    const randomData = randomDataList[randomIndex];
    setName(randomData.name);
    setEmail(randomData.email);
    setPhone(randomData.phone);
    setBio(randomData.bio);
    setimage(randomData.image);
    setPass(randomData.pass);
    setConfirmPass(randomData.confirmPass);
  };

  const SignUpHandle = async (e) => {
    e.preventDefault();
    const api = import.meta.env.VITE_API;
    if (pass === confirmPass) {
      setAlert(false);
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
            image: image,
          },
        };
        const response = await axios.post(`${api}core/signup/`, data);

        if (response.status === 201) {
          localStorage.setItem("token", response.data.access);
          localStorage.setItem("name", response.data.profile.name);
          localStorage.setItem("image", response.data.profile.image);
          navigate("/");
        } else {
          alert("User already exist");
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
