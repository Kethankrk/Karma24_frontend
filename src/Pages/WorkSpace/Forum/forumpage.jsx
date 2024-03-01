import { Link, useParams } from "react-router-dom";
import ForumComp from "./ForumComp";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";

const Forumpage = () => {
  const [forums, setForum] = useState([]);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    (async () => {
      try {
        const api = import.meta.env.VITE_API;
        const response = await axios.get(
          `${api}core/get-forums/?workspace=${id}`
        );

        setForum(response.data);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);
  return (
    <div className="px-8 py-4 w-full flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl mb-9">Ask Questions</h1>
        <button className="flex gap-1 items-center hover:shadow-lg shadow-white btn">
          <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
            <path d="M5.933.87a2.89 2.89 0 014.134 0l.622.638.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 102 0 1 1 0 00-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 006 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z" />
          </svg>
          Raise question
        </button>
      </div>
      <div className="flex w-full flex-col gap-5">
        <Suspense fallback={<p>Loding</p>}>
          {forums.map((forum) => (
            <ForumComp
              key={forum.id}
              title={forum.name}
              discription={forum.description}
              id={forum.id}
              user={forum.created_by}
              time={forum.created_at.split("T")[0]}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Forumpage;
