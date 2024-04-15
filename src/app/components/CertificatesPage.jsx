import React from 'react';
import Certificates from '../components/Certificates';
import certificatesData from '../data/certificatesData'; // Adjust if necessary based on your actual path

const CertificatesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">My Certifications</h1>
      <Certificates certificates={certificatesData} />
    </div>
  );
};

export default CertificatesPage;
