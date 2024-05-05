// src/app/components/CertificatesSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const certificatesData = [
  {
    id: 1,
    name: "IBM Team Essentials for Artificial Intelligence (AI)",
    imageUrl: "/images/Enterprise.png", // Correct image path from Credly
    link: "https://www.credly.com/badges/d3446641-c5eb-4947-b12b-4f60c4d4c7d5/public_url",
  },
  {
    id: 2,
    name: "IBM Enterprise Design Thinking - Practitioner",
    imageUrl: "/images/Practioner.png", // Correct image path from Credly
    link: "https://www.credly.com/badges/a473a191-d9a7-44ae-b424-0e69aacd9090/public_url",
  },
  {
    id: 3,
    name: "IBM Enterprise Design Thinking - Co-creator",
    imageUrl: "/images/Co-creater.png", // Correct image path from Credly
    link: "https://www.credly.com/badges/2f999884-9e4f-4824-b5f9-c5f705c06271/public_url"
  },
  {
    id: 4,
    name: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
    imageUrl: "/images/AWS.png", // Correct image path from Credly
    link: "https://www.credly.com/badges/f0a456a5-039a-4c08-a910-87e61b83d07c"
  },
  // ... other certificates
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="my-8">
      <h2 className="text-3xl font-bold text-center text-white mb-8" style={{ color:""}}>CERTIFICATES</h2>
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
