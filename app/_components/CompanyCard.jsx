import React from 'react';
import { Mail, Globe, Phone, MapPin } from 'lucide-react';

function CompanyCard({ company }) {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 shadow-lg hover:shadow-2xl">
      {/* Gradient Border */}
      <div className="absolute inset-0 border-2 border-transparent rounded-xl hover:border-blue-500 transition duration-500"></div>
      <div className="relative z-10">
        <div
          className="h-48 bg-cover bg-center "
          style={{ backgroundImage: `url('${company.imageUrl}')` }}

        ></div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">{company.name}</h3>
          <h4 className="text-lg text-blue-500 mb-4">{company.tagline}</h4>
          <p className="text-gray-700 leading-relaxed mb-4">{company.description}</p>
          <div className="text-gray-600 space-y-2">
            {/* Contact Details */}
            <p className="flex items-center group">
              <MapPin className="w-5 h-5 mr-2 text-blue-600 group-hover:text-blue-800 transition duration-300" />
              {company.address}
            </p>
            <p className="flex items-center group">
              <Phone className="w-5 h-5 mr-2 text-blue-600 group-hover:text-blue-800 transition duration-300" />
              {company.phone}
            </p>
            <p className="flex items-center group">
              <Mail className="w-5 h-5 mr-2 text-blue-600 group-hover:text-blue-800 transition duration-300" />
              {company.email}
            </p>
            <p className="flex items-center group">
              <Globe className="w-5 h-5 mr-2 text-blue-600 group-hover:text-blue-800 transition duration-300" />
              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline group-hover:text-blue-800 transition duration-300"
              >
                {company.website}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
