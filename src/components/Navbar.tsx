import React from "react";

const Navbar: React.FC = () => (
  <nav className="navbar" style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '8px 16px',
    backgroundColor: '#1976d2',
    color: 'white'
  }}>
    <span style={{ fontWeight: 600, fontSize: 18 }}>
      Dr. Rochdi Boudjehem &mdash; Curriculum Vitae
    </span>
  </nav>
);

export default Navbar;
