import React from "react";


const PhotoPlaceholder: React.FC<{ width?: number; height?: number }> = () => {
  return (
    <div className="photo-placeholder-responsive">
      <img
        src="/images/profile.jpg"
        alt="Personal Photo"
        className="profile-img-responsive"
      />
    </div>
  );
};

export default PhotoPlaceholder;
