import React from "react";

const PicDetail = ({img} : {img : string}) => {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={img}
        alt="Image"
        className="w-full h-60 object-cover"
      />
    </div>
  );
};

export default PicDetail;
