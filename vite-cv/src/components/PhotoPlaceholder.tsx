import React from "react";


const PhotoPlaceholder: React.FC = () => (
  <div className="photo-placeholder" style={{ padding: 0, background: 'none', border: 'none' }}>
    <img
      src="/images/profile.jpg"
      alt="Personal Photo"
      style={{ width: 140, height: 180, objectFit: 'cover', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
    />
  </div>
);

export default PhotoPlaceholder;
