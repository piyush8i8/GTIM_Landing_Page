import React from "react";
import '../App.css';


const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Adobe_Systems_logo_and_wordmark.svg" },
  { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Twitter", logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/Twitter_bird_logo_2012.svg" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  { name: "Zoom", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg" },
];

const CompanyScroller = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Trusted by Leading Companies
        </h2>
        <p className="text-gray-500 mb-10 text-lg">
          Our graduates are making an impact at the world’s top organizations
        </p>

        <div className="overflow-hidden relative">
          <div className="scroller-track flex items-center gap-10 w-max">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="company-card bg-white rounded-2xl p-6 w-[180px] h-[110px] flex items-center justify-center shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyScroller;
