import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function NewWorkSpace() {
  const firstText = `# Welcome to Co-Project!
Enter the content
`;

  const [value, setValue] = useState(firstText);
  const api = import.meta.env.VITE_API;
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const sentData = async (e) => {
    e.preventDefault();
    try {
      const data = {
        body: value,
        page: id,
      };
      const reponse = await axios.post(`${api}core/blank-page/`, data);
      if (reponse.status == 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-3 py-3 px-3">
      <div className="flex w-full justify-end gap-3">
        {/* <button className="btn w-40">Cancel changes</button> */}
        <button className="btn btn-accent w-40" onClick={sentData}>
          Add Content
        </button>
      </div>
      <MDEditor
        height={window.innerHeight - 150}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
