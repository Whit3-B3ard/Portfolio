import React from "react";
import ResumePDF from ".././resume/ibrahims_resume.pdf";
export default function Navigation() {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Ibrahim-CV.pdf";
    link.click();
  };
  return (
    <>
      <section className="pt-10 md:pt-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <nav className="flex items-center justify-between mb-40 ">
            <img src="../../image/navbar-logo.png" alt="Logo"></img>

            <button
              onClick={handleDownloadClick}
              className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
            >
              Get my CV
            </button>
          </nav>
        </div>
      </section>
    </>
  );
}
