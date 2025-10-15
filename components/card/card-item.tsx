import React from "react";


const CardItem = () => {
  return (
    <div className="flex px-4 py-4 border-b-2 border-gray-200">
      {/* Image Placeholder */}
      <div className="w-1/3">
        <img
          src="https://img.freepik.com/free-photo/pad-thai-white-plate-with-lemon-eggs-seasoning-wooden-table_1150-21207.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Promotion"
          className="w-full h-28 rounded-md object-cover"
        />
      </div>

      {/* Description + Price */}
      <div className="w-2/3 pl-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">ผัดไทย</h2>
          <p className="text-gray-700 text-sm">
            รับส่วนลดพิเศษสำหรับเมนูสุดฮิต! วันนี้ - สิ้นเดือนเท่านั้น
          </p>
        </div>
        <div className="text-left text-md font-semibold mt-2">฿120.-</div>
      </div>
    </div>
  );
};

export default CardItem;
