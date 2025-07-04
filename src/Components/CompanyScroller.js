import React from "react";
import '../App.css';


const companies = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" },
  { name: "Meta", logo: "https://tse3.mm.bing.net/th/id/OIP.oW2Urv3AdAeSCSgbJ-X30wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Adobe", logo: "https://blog.adobe.com/en/publish/2022/02/02/media_1a7e6fa1468d0c6882479c1038a5e2eb8966b5a90.jpeg?width=2000&format=webply&optimize=medium" },
  { name: "Intel", logo: "https://www.pngplay.com/wp-content/uploads/12/Intel-PNG-Photo-Image.png" },
  { name: "Salesforce", logo: "https://wallpapers.com/images/hd/salesforce-viz1ssx5cao8adt6.jpg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Twitter", logo: "https://cdn.pixabay.com/photo/2016/11/01/12/09/twitter-logo-1788039_640.jpg" },
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
