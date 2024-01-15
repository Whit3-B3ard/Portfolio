import React, { useEffect } from "react";
import feather from "feather-icons";

export default function Highlights() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md text-left">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: feather.icons.activity.toSvg(),
                  }}
                />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Diverse Expertise
              </h4>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="font-normal text-gray-500 text-md"
              >
                With a rich background in service processing and team
                management, I bring a diverse skill set to every project.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md text-left">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: feather.icons.codesandbox.toSvg(),
                  }}
                />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Innovative Solutions
              </h4>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="font-normal text-gray-500 text-md"
              >
                Crafting creative and innovative solutions that transcend
                conventional boundaries, ensuring each project stands out.
              </p>
            </div>

            <div className="bg-gray-50 px-8 py-10 rounded-md text-left">
              <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: feather.icons.coffee.toSvg(),
                  }}
                />
              </div>
              <h4 className="font-medium text-gray-700 text-lg mb-4">
                Impactful Projects
              </h4>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="font-normal text-gray-500 text-md"
              >
                Enthusiastically working on projects that make a difference,
                ensuring each endeavor leaves a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
