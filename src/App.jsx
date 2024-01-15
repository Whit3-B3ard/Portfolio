import React, { useEffect } from "react";
import "./App.css";
import feather from "feather-icons";
function App() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="mb-10 lg:mb-0">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Latest Projects
            </h1>

            <p
              style={{ whiteSpace: "pre-line" }}
              className="font-normal text-gray-500 text-xs md:text-base"
            >
              Here are some of my recent projects, crafted with passion and
              dedication.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-24">
              <div className="bg-gray-100 px-4 md:px-8 py-8 md:py-10 rounded-md text-left relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden mb-4 flex justify-center">
                  <video
                    className="object-cover w-10/12 h-10/12 rounded-md"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/videos/pulse.mp4" type="video/mp4" />
                  </video>
                </div>

                <a
                  href="https://pulse-iota-rosy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="font-bold text-gray-700 text-xl md:text-2xl mb-3 text-center">
                    Pulse
                  </h4>
                </a>

                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="font-normal text-gray-500 text-base md:text-lg text-center"
                >
                  Pulse is a dynamic music player, Read all about it in the
                  documentation file
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{
                      color: "#000000",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  ></i>
                  <a
                    href="https://github.com/Whit3-B3ard/Pulse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mx-1"
                  >
                    <i
                      className="fa-brands fa-square-github fa-xl"
                      style={{
                        color: "#000000",
                        marginRight: "8px",
                        marginLeft: "8px",
                      }}
                    ></i>
                  </a>
                  first, and then check the project on this deployment
                  <a
                    href="https://pulse-iota-rosy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mx-1"
                  >
                    <i
                      className="fa-solid fa-arrow-up-right-from-square fa-l"
                      style={{
                        color: "#000000",
                        marginRight: "8px",
                        marginLeft: "8px",
                      }}
                    ></i>
                  </a>
                  .
                </p>
              </div>

              <div className="bg-gray-100 px-4 md:px-8 py-8 md:py-10 rounded-md text-left relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden mb-4 flex justify-center">
                  <video
                    className="object-cover w-10/12 h-10/12 rounded-md"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/videos/thefword.mp4" type="video/mp4" />
                  </video>
                </div>

                <a
                  href="https://cookingf-website.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="font-bold text-gray-700 text-xl md:text-2xl mb-3 text-center">
                    The F Word
                  </h4>
                </a>

                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="font-normal text-gray-500 text-base md:text-lg text-center"
                >
                  The F Word is a Food Recipes Application, Read all about it in
                  the documentation file
                  <i
                    className="fa-solid fa-arrow-right "
                    style={{
                      color: "#000000",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  ></i>
                  <a
                    href="https://github.com/Whit3-B3ard/Cookingf-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mx-1"
                  >
                    <i
                      className="fa-brands fa-square-github fa-xl"
                      style={{
                        color: "#000000",
                        marginRight: "8px",
                        marginLeft: "8px",
                      }}
                    ></i>
                  </a>
                  first, and then check the project on this deployment
                  <a
                    href="https://cookingf-website.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mx-1"
                  >
                    <i
                      className="fa-solid fa-arrow-up-right-from-square fa-l"
                      style={{
                        color: "#000000",
                        marginRight: "8px",
                        marginLeft: "8px",
                      }}
                    ></i>
                  </a>
                  .
                </p>
              </div>

              <div className="bg-gray-100 px-4 md:px-8 py-8 md:py-10 rounded-md text-left relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden mb-4 flex justify-center">
                  <video
                    className="object-cover w-10/12 h-10/12 rounded-md"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/videos/netflixclone.mp4" type="video/mp4" />
                  </video>
                </div>

                <a
                  href="https://whit3-b3ard.github.io/Netflix-Clone/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="font-bold text-gray-700 text-xl md:text-2xl mb-3 text-center">
                    Netflix Clone
                  </h4>
                </a>

                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="font-normal text-gray-500 text-base md:text-lg text-center"
                >
                  A close to pixel perfect clone of netflix, Read all about it
                  in the documentation file
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{
                      color: "#000000",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  ></i>
                  <a
                    href="https://github.com/Whit3-B3ard/Netflix-Clone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mx-1"
                  >
                    <i
                      className="fa-brands fa-square-github fa-xl"
                      style={{
                        color: "#000000",
                        marginRight: "8px",
                        marginLeft: "8px",
                      }}
                    ></i>
                  </a>
                  first, and then check the project on this deployment
                  <a
                    href="https://whit3-b3ard.github.io/Netflix-Clone/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mx-1"
                  >
                    <i
                      className="fa-solid fa-arrow-up-right-from-square fa-l"
                      style={{
                        color: "#000000",
                        marginRight: "8px",
                        marginLeft: "8px",
                      }}
                    ></i>
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Here's a snapshot of my educational journey and the institutions I
            attended.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Apr - 2023 | Jun - 2024
              </h4>

              <p
                style={{ whiteSpace: "pre-line" }}
                className="font-normal text-gray-500 text-md mb-4"
              >
                Digital Career Institute | Full Stack Web Development.
              </p>

              <div className="relative">
                <a
                  href="https://start.digitalcareerinstitute.org/become-a-web-developer/?utm_feeditemid=&utm_device=c&utm_campaign_id=20170064521&utm_adgroup_id=&utm_ad_id=&utm_asset_set_id=&utm_asset_id=&utm_term=&utm_source=google&utm_medium=ppc&utm_campaign=DE_PMX_Courses_S%C3%BCd&hsa_cam=20170064521&hsa_mt=&hsa_src=x&hsa_acc=9628643656&hsa_net=adwords&hsa_kw=&hsa_tgt=&hsa_ver=3&hsa_grp=&hsa_ad=&gad_source=1&gclid=Cj0KCQiAhomtBhDgARIsABcaYymDT_x_OD9wZO4A34o_cHxw9sdsqkbbSCeOS0c0D8dx9iDA0U31w2QaAl5fEALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    See the place here
                  </h6>
                </a>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Oct - 2015 | May - 2020
              </h4>

              <p
                style={{ whiteSpace: "pre-line" }}
                className="font-normal text-gray-500 text-md mb-4"
              >
                Alexandria University | Resources Management Major.
              </p>

              <div className="relative">
                <a
                  href="https://www.alexu.edu.eg/index.php/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    See the place here
                  </h6>
                </a>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Jul - 2022 | Mar - 2023
              </h4>

              <p
                style={{ whiteSpace: "pre-line" }}
                className="font-normal text-gray-500 text-md mb-4"
              >
                Kunz Institute | German Language, History, and Culture.
              </p>

              <div className="relative">
                <a
                  href="https://www.kunz-institut.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    See the place here
                  </h6>
                </a>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1
              style={{ whiteSpace: "pre-line" }}
              className="font-normal text-gray-300 text-3xl md:text-6xl lg:text-7xl mb-20 md:mb-32 lg:mb-48"
            >
              {" "}
              "Hello World!" - Unknown Developer
            </h1>

            <p
              style={{ whiteSpace: "pre-line" }}
              className="font-medium text-gray-700 text-xs md:text-base"
            >
              Crafting solutions with @Nodejs for the backend and @Reactjs for
              the frontend. Passionate about clean code and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Experience
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Here's an overview of my professional journey and the roles I've
            undertaken.
          </p>

          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-600 text-base uppercase">
                Company
              </h6>

              <p className="font-semibold text-gray-600 text-base">
                Digital Career Institute{" "}
                <span className="font-normal text-gray-500">/ Berlin</span>
              </p>

              <p className="font-semibold text-gray-600 text-base">
                EB24 LTD{" "}
                <span className="font-normal text-gray-500">
                  / United Kingdom
                </span>
              </p>

              <p className="font-semibold text-gray-600 text-base">
                EB24 LTD{" "}
                <span className="font-normal text-gray-500">
                  / United Kingdom
                </span>
              </p>

              <p className="font-semibold text-gray-600 text-base">
                EB24 LTD{" "}
                <span className="font-normal text-gray-500">
                  / United Kingdom
                </span>
              </p>
            </div>

            <div className="space-y-8 md:space-y-16 mb-16 md:mb-0">
              <h6 className="font-medium text-gray-600 text-base uppercase">
                Position
              </h6>

              <p className="font-normal text-gray-600 text-base">
                Web Development Tutor
              </p>

              <p className="font-normal text-gray-600 text-base">
                Junior Front-End Developer (Intern)
              </p>

              <p className="font-normal text-gray-600 text-base">
                Customer Success Manager
              </p>

              <p className="font-normal text-gray-600 text-base">Head Coach</p>
            </div>

            <div className="space-y-8 md:space-y-16">
              <h6 className="font-medium text-gray-600 text-base uppercase">
                Year
              </h6>

              <p className="font-normal text-gray-600 text-base">Present</p>

              <p className="font-normal text-gray-600 text-base">
                Nov - 2023 | Jan - 2024
              </p>

              <p className="font-normal text-gray-600 text-base">
                Oct - 2019 | Jul - 2022
              </p>

              <p className="font-normal text-gray-600 text-base">
                Dec - 2017 | Oct - 2019
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <img src="../../image/dci1.png" alt="Image"></img>

            <div className="w-full flex justify-center">
              <img src="../../image/eb24.png" alt="Image"></img>
            </div>

            <img src="../../image/alexuni.webp" alt="Image"></img>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Testimonial
          </h1>

          <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
            Discover what others have to say about their experiences working
            with me.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p
                style={{ whiteSpace: "pre-line" }}
                className="font-normal text-gray-500 text-md mb-4"
              >
                Ibrahim consistently delivered exceptional results, exceeding
                our expectations. His attention to detail and problem-solving
                skills significantly contributed to the success of our Company.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Amadeusz Giblak{" "}
                <span className="font-medium text-gray-400 text-sm">
                  - CEO at EB24 LTD
                </span>
              </h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p
                style={{ whiteSpace: "pre-line" }}
                className="font-normal text-gray-500 text-md mb-4"
              >
                Ibrahim's commitment to excellence was evident in every task he
                undertook. His ability to deliver results under pressure and his
                collaborative approach greatly enhanced the overall performance
                of our team.
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Andy Shepherd{" "}
                <span className="font-medium text-gray-400 text-sm">
                  - Vodafone UK R.M
                </span>
              </h6>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <p
                style={{ whiteSpace: "pre-line" }}
                className="font-normal text-gray-500 text-md mb-4"
              >
                Ibrahim's innovative approach to problem-solving set him apart.
                His dedication to delivering high-quality results, even in
                high-pressure situations, made a significant impact on the
                overall success of our team
              </p>

              <h6 className="font-semibold text-gray-500 text-md">
                Nicole Cruschwitz{" "}
                <span className="font-medium text-gray-400 text-sm">
                  - Manager at DCI
                </span>
              </h6>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 md:py-16 mb-20 md:mb-40 lg::mb-52">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <h1 className="font-medium text-gray-700 text-4xl md:text-5xl mb-5">
              Social Media
            </h1>

            <p
              style={{ whiteSpace: "pre-line" }}
              className="font-normal text-gray-400 text-md md:text-lg mb-20"
            >
              Connect with me on social media platforms below.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <a
                href="https://twitter.com/Ibrahim0Mansour"
                target="_blank"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <div className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: feather.icons.twitter.toSvg(),
                    }}
                  />
                </div>
              </a>

              <a
                href="https://github.com/Whit3-B3ard"
                target="_blank"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <div className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: feather.icons.github.toSvg(),
                    }}
                  />
                </div>
              </a>

              <a
                href="https://www.facebook.com/ibrahimoOoOo/"
                target="_blank"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <div className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: feather.icons.facebook.toSvg(),
                    }}
                    className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                  />
                </div>
              </a>

              <a
                href="https://www.youtube.com/channel/UCgTjpDWfoEwH8RzhQOoIy6A"
                target="_blank"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <div className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: feather.icons.youtube.toSvg(),
                    }}
                    className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                  />
                </div>
              </a>

              <a
                href="https://www.instagram.com/ibrahim0mansour/"
                target="_blank"
                className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500"
              >
                <div className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: feather.icons.instagram.toSvg(),
                    }}
                    className="text-gray-500 hover:text-gray-700 transition ease-in-out duration-500"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
