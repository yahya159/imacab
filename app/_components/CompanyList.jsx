import React from 'react';
import CompanyCard from './CompanyCard';

function CompanyList() {
  const companies = [
    {
      name: 'INGELEC',
      tagline: 'Manufacture of electrical equipment',
      description:
        'Founded in 1975, Ingelec is today the Arab-African leader in the design and manufacture of low-voltage electrical equipment.',
      address: '323, Bd Moulay Ismail 20300 Casablanca - Morocco',
      phone: '00 212 5 22 40 15 48',
      fax: '00 212 5 22 40 11 50',
      email: 'ingelec@ingelec.ma',
      website: 'www.ingelec.ma',
      imageUrl: '/ingelec-maroc-logo-B611DDDD33-seeklogo.com.png', // Corrected image URL
    },
    {
      name: 'IMACAB',
      tagline: 'Manufacture of electric cables',
      description:
        'Born in 2000 from the desire of the INGELEC group to create a unit specialized in the manufacture of electric cables, IMACAB is a young and dynamic company specialized in the manufacture of electric cables.',
      address: 'Bd Ahl Loghlam, QI Sidi Moumen 20 630 Casablanca',
      phone: '00 212 5 22 76 40 00 / 20 / 40',
      fax: '00 212 5 22 76 40 10',
      email: 'imacab@imacab.ma',
      website: 'www.imacab.ma',
      imageUrl: '/Logo-imacab-01-2 (1).webp', // Corrected image URL
    },
    {
      name: 'PLASTIMA',
      tagline: 'Transformation of plastic materials',
      description:
        'Founded in 1969, Plastima specializes in the manufacturing and processing of plastic materials. Plastima brings together 5 activities: tablecloths, coated fabrics, plasticized fabrics, calendered films, as well as PVC and polyethylene tubes.',
      address: 'Km 11 coastal road Casa Mohammedia Street LN° 111 Ain Sebâa CASABLANCA',
      phone: '00 212 22 35 59 14',
      fax: '00 212 22 34 22 36',
      email: 'i.bennouna@plastima.com',
      website: 'www.plastima.com',
      imageUrl: '/Logo-Plastima.png', // Corrected image URL
    },
    {
      name: 'MAGHREB STEEL',
      tagline: 'Manufacture of steel sheet',
      description:
        'Founded in 1975, Maghreb Steel specializes in the manufacture of cold-rolled, galvanized and pre-painted steel sheets in coils, sheets and strips.',
      address: 'Route nationale 9km 10 (Aéroclub Tit Mellil) Ahl Moughlam - BP: 3553 Casablanca 20600 – Morocco',
      phone: '00 212 5 22 76 25 00',
      fax: '00 212 5 22 76 25 01/02/03',
      email: 'maghrebsteel@maghrebsteel.ma',
      website: 'www.maghrebsteel.ma',
      imageUrl: '/Untitled-1.png',
      innerWidth: 'w-32',
      innerHeight: 'h-4', // Corrected image URL (make sure to use the correct image)
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Companies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
