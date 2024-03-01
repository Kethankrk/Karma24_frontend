import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function WorkSpaceEdit() {
  const navigate = useNavigate();
  const api = import.meta.env.VITE_API;
  const params = useParams();
  const id = params.id;
  console.log(id);
  const [value, setValue] = useState("");
  const [data, setdata] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getdata = async () => {
      try {
        const data = await axios.get(`${api}core/get-page/?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setValue(data.data.details);
        setdata(data.data.details.body);
      } catch (error) {
        console.log(error);
      }
    };

    getdata();
  }, []);
  const updatedata = async (e) => {
    e.preventDefault();
    try {
      const sentdata = {
        body: data,
        page: id,
      };
      const reponse = await axios.put(
        `${api}core/blank-page/${value.id}/`,
        sentdata
      );
      reponse;
      if (reponse.status == 200) {
        navigate(`/blank/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log();

  return (
    <div className="flex flex-col gap-3 py-3 px-3">
      <div className="flex w-full justify-end gap-3">
        <button className="btn w-40" onClick={() => navigate(`/blank/${id}`)}>
          Cancel changes
        </button>
        <button className="btn btn-accent w-40" onClick={updatedata}>
          Commit changes
        </button>
      </div>
      <MDEditor
        height={window.innerHeight - 150}
        value={data}
        onChange={setdata}
      />
    </div>
  );
}
