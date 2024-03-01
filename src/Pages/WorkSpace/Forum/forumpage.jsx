import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ForumComp from "./ForumComp";

const Forumpage = () => {
  const [forums, setForums] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pop, setPop] = useState(false);
  const params = useParams();
  const id = params.id;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = import.meta.env.VITE_API;
        const response = await axios.get(
          `${api}core/get-forums/?workspace=${id}`
        );
        setForums(response.data.reverse());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, pop]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = import.meta.env.VITE_API;
      const data = {
        workspace: id,
        name: title,
        description: description,
      };
      const response = await axios.post(`${api}core/forum/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        setPop(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-8 py-4 w-full flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl mb-9">Ask Questions</h1>
        <button
          className="flex gap-1 items-center hover:shadow-lg shadow-white btn"
          onClick={() => setPop(true)}
        >
          <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
            <path d="M5.933.87a2.89 2.89 0 014.134 0l.622.638.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 102 0 1 1 0 00-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 006 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z" />
          </svg>
          Raise question
        </button>
      </div>
      {pop && (
        <div className="w-full flex gap-3 items-end">
          <form className="flex gap-3 items-end w-full" onSubmit={handleSubmit}>
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter your title"
                className="input input-bordered"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-control flex-grow">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Enter question description."
                className="input input-bordered min-w-96"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button className="btn btn-neutral" onClick={() => setPop(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
      <div className="flex w-full flex-col gap-5">
        {forums.map((forum) => (
          <ForumComp
            key={forum.id}
            title={forum.name}
            description={forum.description}
            id={forum.id}
            user={forum.created_by}
            time={forum.created_at.split("T")[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default Forumpage;
