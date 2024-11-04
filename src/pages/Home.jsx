import { useState } from "react";
import { Button, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import { Eye } from "lucide-react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Home = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const staticImages = [
    "/assets/30.jpg",
    "/assets/16.jpg",
    "/assets/52.jpg",
    "/assets/33.jpg",
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="font-tajawal">
      {/* Main Section */}
      <section className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side: Text section */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 px-4">
            <div className="max-w-lg">
              <div className="h-1 w-10 bg-black mb-4"></div>
              <h1 className="font-bold text-4xl mb-6">
                {t("homePage.companyName")} {/* Translate company name */}
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                {t("homePage.companyDescription")}{" "}
                {/* Translate company description */}
              </p>
              <Link to={"/about"}>
                <Button
                  color="black"
                  className="rounded-full hover:bg-gray-800 px-6 py-2 text-xl"
                >
                  {t("homePage.companyDescriptionButton")}{" "}
                  {/* Translate button text */}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side: Image section */}
          <div className="w-full md:w-1/2 flex justify-center px-4">
            <Card className="max-w-lg overflow-hidden rounded-[30px]">
              <img
                src="/pic.webp"
                alt="Fashion Model"
                className="w-96 object-cover transition-transform duration-300 hover:scale-105"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">{t("homePage.aboutUs")}</h2>{" "}
            {/* Translate About Us section title */}
            <p className="text-gray-700 mb-8">
              {t("homePage.aboutUsContent")} {/* Translate About Us content */}
            </p>
            {/* <Button className="bg-lime-300 text-gray-800 rounded-full w-40 py-3 hover:bg-lime-400 transition-colors">
              Shop now
            </Button> */}
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/pic2.webp"
              alt="Minimalist room design"
              className="rounded-3xl px-2 w-96 max-w-md h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1
            className="text-3xl font-bold text-center mb-8" // Reduced heading size and margin
          >
            {t("homePage.OurGallery")}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Column: Two stacked images */}
            <div className="grid grid-rows-2 gap-4">
              {staticImages.slice(0, 2).map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[20px] shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer" // Reduced shadow and rounded corners
                  onClick={() => openModal(image)} // Open modal on image click
                >
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-105" // Set fixed height for images
                    loading="lazy"
                    onError={(e) => {
                      if (!e.target.src.endsWith("placeholder-image.jpg")) {
                        e.target.src = "/assets/placeholder-image.jpg"; // Fallback image
                      }
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Right Column: Tall image */}
            <div className="flex items-center">
              <div
                className="group relative overflow-hidden rounded-[20px] shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer w-full"
                onClick={() => openModal(staticImages[2])} // Open modal on tall image click
              >
                <img
                  src={staticImages[2]}
                  alt="Tall Image"
                  className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-105" // Set fixed height for tall image
                  loading="lazy"
                  onError={(e) => {
                    if (!e.target.src.endsWith("placeholder-image.jpg")) {
                      e.target.src = "/assets/placeholder-image.jpg"; // Fallback image
                    }
                  }}
                />
              </div>
            </div>
          </div>
          {/* See More Button */}
          <div className="text-center mt-8">
            {" "}
            {/* Reduced margin */}
            <Link to="/gallery">
              <button
                className="bg-black text-white rounded-full hover:bg-gray-800 px-6 py-2 text-lg font-semibold" // Reduced padding
              >
                {t("homePage.OurGalleryButton")}{" "}
                {/* Translate See More button */}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section (Full Width) */}
      <section
        className="relative bg-cover bg-center h-80 flex items-center"
        style={{
          backgroundImage: "url('/assets/40.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center w-full">
          <h1 className="text-3xl font-bold text-white mb-4">
            {" "}
            {t("homePage.contactUs")}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            {t("homePage.contactUsContent")}
          </p>
          <a href="mailto:info@albasra-heavy-machinery.iq">
            <button className="bg-white rounded-full hover:bg-gray-300 px-6 py-1 text-gray-800 font-semibold text-lg">
              {t("homePage.contactUsButton")}
            </button>
          </a>
        </div>
      </section>

      {/* Modal for larger image display */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal} // Close modal on backdrop click
        >
          <div
            className="relative bg-white p-2 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up to the backdrop
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Large View"
              className="max-w-[400px] h-auto rounded-lg" // Set a maximum width for the image
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
