import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="relative w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
          <LuUser className="text-3xl text-primary" />
          <button
          type="button"
          className="w-7 h-7 flex items-center justify-center bg-purple-400 hover:bg-purple-500 text-white rounded-full absolute bottom-0 right-0 border-2 border-white shadow-md cursor-pointer"
          onClick={onChooseFile}
          >
  <LuUpload size={14} />
</button>
        </div>
      ) : (
        <div className="relative w-20 h-20">
          <img
            src={previewUrl}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <button
            type="button"
            className="w-7 h-7 flex items-center justify-center bg-red-500 text-white rounded-full absolute bottom-0 right-0 border-2 border-white shadow-md"
            onClick={handleRemoveImage}
          >
            <LuTrash size={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;