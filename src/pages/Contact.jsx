import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation(); // Initialize useTranslation hook
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct the mailto link
        const mailtoLink = `mailto:info@email.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0A${formData.message}`;
        
        // Open the mailto link to trigger the email client
        window.location.href = mailtoLink;
    };
    // return (
    //     <div>
    //         {/* Top Section with Full-Width Background Image */}
    //         <div 
    //             className="relative w-full h-96 md:h-96 bg-cover bg-center flex items-center justify-center text-white" 
    //             style={{ backgroundImage: 'url("/egale.png")' }}
    //         >
    //             <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional dark overlay */}
    //             <div className="relative z-10 text-center px-4">
    //                 <h1 className="text-3xl md:text-5xl font-bold">
    //                      {t("contact")}
    //                 </h1>
    //                 <p className="mt-2 text-base md:text-lg">     {t("contactdis")}  </p>
    //             </div>
    //         </div>

    //         {/* Main Content - Contact Form and Info */}
    //         <div className="container mx-auto p-6 md:p-12">
    //             <div className="flex flex-col md:flex-row justify-between">
    //                 {/* Left Side - Contact Info */}
    //                 <div className="flex-1 md:pr-12 mb-6 md:mb-0">
    //                     <h2 className="text-3xl font-bold mb-6">   {t("contact")}</h2>
    //                     <div className="mb-6 p-6 bg-gray-100 rounded-lg">
    //                         <h3 className="text-xl font-semibold">{t("phonenumber")}</h3>
    //                         <p className="text-gray-600">7710314292 964+</p>
    //                     </div>
    //                     <div className="p-6 bg-gray-100 rounded-lg">
    //                         <h3 className="text-xl font-semibold">{t("Email")}</h3>
    //                         <p className="text-gray-600">info@sama-alsayer.iq</p>
    //                     </div>
    //                 </div>

    //                 {/* Right Side - Contact Form */}
    //                 <div className="flex-1 md:pl-12 bg-gray-100 rounded-lg p-6 md:p-10">
    //                     <form className="space-y-6" onSubmit={handleSubmit}>
    //                         <input 
    //                             type="text" 
    //                             name="name"
    //                             placeholder={t("name")} 
    //                             className="w-full p-3 border border-gray-300 text-right rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
    //                             value={formData.name}
    //                             onChange={handleChange}
    //                             required
    //                         />
    //                         <input 
    //                             type="email" 
    //                             name="email"
    //                             placeholder={t("Emailin")}
    //                             className="w-full p-3 border text-right border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
    //                             value={formData.email}
    //                             onChange={handleChange}
    //                             required
    //                         />
    //                         <input 
    //                             type="text" 
    //                             name="phone"
    //                             placeholder={t("phonenumberin")} 
    //                             className="w-full p-3 border  text-right border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
    //                             value={formData.phone}
    //                             onChange={handleChange}
    //                         />
    //                         <textarea 
    //                             name="message"
    //                             placeholder="Your Message" 
    //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
    //                             rows="4"
    //                             value={formData.message}
    //                             onChange={handleChange}
    //                             required
    //                         ></textarea>
    //                         <button 
    //                             type="submit" 
    //                             className="w-full bg-black ltr:font-semibold ltr:text-xl text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
    //                         >
    //                           {t("submit")}
    //                         </button>
    //                     </form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Contact;
