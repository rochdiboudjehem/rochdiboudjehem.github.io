import React from 'react';
import AcademicContactsBar from './AcademicContactsBar';
import SocialMediaBlock from './SocialMediaBlock';

const MobileContactsSection: React.FC<{ social: any }> = ({ social }) => (
    <section className="d-block d-lg-none p-0 mb-0 .z-n1">
    <div className="card border-0 p-0 ml-3">
      {/* <h5 className="mb-3 fw-bold"><i className="fas fa-address-book me-2" />Contacts</h5> */}
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-0 p-0 mb-0">
        <AcademicContactsBar mode="row" />
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-0 p-0">
        <SocialMediaBlock social={social} mode="row" />
      </div>
    </div>
  </section>
);

export default MobileContactsSection;
