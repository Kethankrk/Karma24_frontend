import React from "react";

function UserListCard({ image, name }) {
  return (
    <div className="bg-base-200 rounded-box flex gap-4 px-4 py-2 w-full items-center">
      <div className="w-[50px] h-[50px]">
        <img src={image} alt="" className="w-full rounded-lg" />
      </div>
      <p className="">{name}</p>
    </div>
  );
}

export default UserListCard;
