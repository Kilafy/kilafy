import { useState } from "react";
import hubspotService from "../services/hubspotService";
import { contactUsContent } from "../constants";
import EmailSvg from "./design/social_media/EmailSvg";
import WhatsAppSvg from "./design/social_media/WhatsAppSvg";

const renderSocialMedia = () => {
  return (
    <div>
      <h2 className="h2 mb-6">{contactUsContent.title}</h2>
      {contactUsContent.socialMedia.map((socialMedia) => (
        <div key={socialMedia.id} className="flex items-center gap-2">
          {socialMedia.name === "Email" && (
            <EmailSvg width="50px" height="50px" fill="#F5F5F5" />
          )}
          {socialMedia.name === "WhatsApp" && (
            <WhatsAppSvg width="50px" height="50px" fill="#F5F5F5" />
          )}
          <a href={socialMedia.href} target="_blank" className="p">
            {socialMedia.value}
          </a>
        </div>
      ))}
    </div>
  );
};

const ContactUs = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fields: [
        { name: "firstname", value: formData.firstname },
        { name: "lastname", value: formData.lastname },
        { name: "email", value: formData.email },
        { name: "message", value: formData.message },
      ],
    };

    try {
      await hubspotService.postFormContactUs(data);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 8000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 8000);
    }
  };

  return (
    <section id="contacto" className="p-8 bg-color-3 text-color-2 lg:p-16">
      <div className="flex flex-col lg:flex-row lg:gap-14 xl:gap-40 2xl:gap-60">
        {renderSocialMedia()}

        <form className="my-5 lg:flex-grow lg:my-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col my-1">
            <label htmlFor="firstname" className="p font-bold my-1">
              Nombre
            </label>
            <input
              name="firstname"
              type="text"
              className="px-2 py-1 rounded-md bg-color-2/5 text-color-2 shadow-2xl transition ease-in-out duration-100 focus:outline-none focus:ring-2 focus:ring-color-2/80 focus:ring-inset md:px-4 md:py-2"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="lastname" className="p font-bold my-1">
              Apellido
            </label>
            <input
              name="lastname"
              type="text"
              className="px-2 py-1 rounded-md bg-color-2/5 text-color-2 shadow-2xl transition ease-in-out duration-100 focus:outline-none focus:ring-2 focus:ring-color-2/80 focus:ring-inset md:px-4 md:py-2"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="email" className="p font-bold my-1">
              Correo
            </label>
            <input
              name="email"
              type="email"
              className="px-2 py-1 rounded-md bg-color-2/5 text-color-2 shadow-2xl transition ease-in-out duration-100 focus:outline-none focus:ring-2 focus:ring-color-2/80 focus:ring-inset md:px-4 md:py-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col my-1">
            <label htmlFor="message" className="p font-bold my-1">
              Mensaje
            </label>
            <textarea
              name="message"
              className="min-h-44 px-2 py-1 rounded-md bg-color-2/5 text-color-2 shadow-2xl transition ease-in-out duration-100 focus:outline-none focus:ring-2 focus:ring-color-2/80 focus:ring-inset md:px-4 md:py-2 lg:min-h-56"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {success && (
            <p className="p my-2 font-bold text-color-1">
              ¡Te contactaremos pronto!
            </p>
          )}
          {error && (
            <p className="p my-2 font-bold text-red-500">
              ¡Ocurrió un error al enviar el formulario!
            </p>
          )}
          <button type="submit" className="p font-bold my-5">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
