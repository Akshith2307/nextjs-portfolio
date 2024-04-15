// src/app/components/CertificatesSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const certificatesData = [
  {
    id: 1,
    name: "IBM Team Essentials for Artificial Intelligence (AI)",
    //imageUrl: "https://images.credly.com/size/110x110/images/...png", // Correct image path from Credly
    link: "https://www.credly.com/badges/d3446641-c5eb-4947-b12b-4f60c4d4c7d5/public_url",
  },
  {
    id: 2,
    name: "IBM Enterprise Design Thinking - Practitioner",
    // imageUrl: "https://images.credly.com/size/110x110/images/...png", // Correct image path from Credly
    link: "https://www.credly.com/badges/a473a191-d9a7-44ae-b424-0e69aacd9090/public_url",
  },
  // ... other certificates
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="my-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificatesData.map((certificate) => (
          <Link href={certificate.link} key={certificate.id} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={certificate.imageUrl}
                  alt={certificate.name}
                  layout="fill"
                  objectFit="contain"
                  className="hover:opacity-75"
                />
              </div>
              <div className="bg-gray-800 p-4">
                <h3 className="text-lg text-white font-semibold">{certificate.name}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
