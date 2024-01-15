import React, { useEffect, useState } from "react";
import tippy from "tippy.js";
import emailjs from "emailjs-com";


export default function Contact() {
  useEffect(() => {
    tippy(".link", {
      placement: "bottom",
    });
  }, []);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const profile = document.getElementById("profile");

    if (theme === "dark") {
      body.classList.remove("text-gray-900");
      body.classList.add("text-gray-100", "text-white");
      profile.classList.remove("bg-white");
      profile.classList.add("bg-gray-900");
    } else {
      body.classList.remove("text-gray-100", "text-white");
      body.classList.add("text-gray-900");
      profile.classList.remove("bg-gray-900");
      profile.classList.add("bg-white");
    }
  }, [theme]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      console.error("Please fill out all required fields");
      return;
    }
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    const serviceId = import.meta.env.VITE_MYSERVICEID;
    const templateId = import.meta.env.VITE_MYTEMPLATEID;
    const userId = import.meta.env.VITE_MYUSERID;
    console.log(serviceId)
    console.log(templateId)
    console.log(userId)
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  };

  return (
    <>
      <div
        className={`contact-container font-sans antialiased leading-normal tracking-wider bg-cover ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
        style={{
          backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')",
        }}
      >
        <div className="media max-w-4xl flex items-center h-auto lg:h-screen md:h-screen sm:h-screen flex-wrap mx-auto  ">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-8 sm:-mt-2 h-48 w-48 bg-cover bg-top" style={{backgroundImage: "url('../../image/cv5.jpg')"}}></div>
              <form onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold pt-8 lg:pt-0">Contact Me</h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

                <div className="pt-4">
                  <label className="text-base font-bold flex items-center justify-center lg:justify-start">
                    <i
                      className="fa-solid fa-user pr-4 text-green-700"
                      style={{ color: "#118d20" }}
                    ></i>{" "}
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 border-green-500 outline-none"
                    required
                  />
                </div>

                <div className="pt-4">
                  <label className="text-base font-bold flex items-center justify-center lg:justify-start">
                    <i
                      className="fa-solid fa-envelope pr-4 text-green-700"
                      style={{ color: "#118d20" }}
                    ></i>{" "}
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 border-green-500 outline-none"
                    style={{ visibility: "visible"}}
                    required
                  />
                </div>

                <div className="pt-4">
                  <label className="text-base font-bold flex items-center justify-center lg:justify-start">
                    <i
                      className="fa-solid fa-envelope pr-4 text-green-700"
                      style={{ color: "#118d20" }}
                    ></i>{" "}
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border-b-2 border-green-500 outline-none"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Get In Touch
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <img
              src="../../image/cv5.jpg"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            ></img>
          </div>

          <div className="absolute top-0 right-0 h-12 w-18 p-4">
            <button
              className="js-change-theme focus:outline-none"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        <script src="https://unpkg.com/popper.js@1/dist/umd/popper.min.js"></script>
        <script src="https://unpkg.com/tippy.js@4"></script>
        <script></script>
      </div>
    </>
  );
}
