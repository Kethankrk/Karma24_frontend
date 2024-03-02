import React from "react";
import fileicon from "../../../assets/file.png";

const ResourceCard = ({ url, name, description }) => {
  return (
    <div className="card w-60 bg-base-100  shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      <figure className="px-3 py-2 w-48 ">
        <img src={fileicon} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={url} className="btn btn-primary">
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
