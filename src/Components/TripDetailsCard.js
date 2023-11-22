import React, { useState } from "react";

const TripDetailsCard = ({ title, description, imageSrc }) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleEllipsisClick = () => {
    setShowButtons(!showButtons);
  };

  const handleEditClick = () => {
    console.log("Editing trip details");
    // open a modal or navigate to an edit page
  };

  const handleDeleteClick = () => {
    console.log("Deleting trip details");
    //show a confirmation modal
  };

  return (
    <div className="relative max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-64 object-cover object-center rounded-xl"
        src={imageSrc}
        alt={title}
      />
      <div className="p-4 cursor-pointer relative">
        <span className="text-2xl" onClick={handleEllipsisClick}>
          ...
        </span>
        {showButtons && (
          <div className="absolute top-0 right-0 mt-4">
            <button
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 mr-2 rounded"
              onClick={handleEditClick}
            >
              Edit
            </button>
            <button
              className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
      </div>
    </div>
  );
};

export default TripDetailsCard;
