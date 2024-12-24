import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex sticky top-0 bg-gray-800 text-white px-6 py-2 z-0 shadow-lg items-center">
        <Button
          asChild
          className="bg-white text-black border-2 border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100"
        >
          <Link href="/">Home Page</Link>
        </Button>
        <p className="px-40">
          Welcome to My Website! Check out the latest updates.
        </p>
      </div>
      <div className="grid  grid-rows-[40px_1fr_40px] items-start justify-items-start  sm:p-5 font-[family-name:var(--font-geist-sans)] min-h-screen bg-cover bg-center bg-main-background bg-fixed">
        <div className="bg-gray-200 p-10 rounded-lg shadow-lg mt-5">
          <h1 className="text-5xl font-extrabold text-center text-indigo-600 px-30">
            Hi, I&apos;m Khue Duong
          </h1>
          <p className="text-gray-600 text-center">
            0420957710 | duonghoangkhue.2004@gmail.com |{" "}
            <a
              href="https://linkedin.com/in/hoangkhue"
              className="text-indigo-600"
            >
              linkedin.com/in/hoangkhue
            </a>{" "}
            | 028787272
          </p>
          <br></br>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                EDUCATION
              </h2>
              <p className="text-gray-700">
                Bachelor of Science in Computing and Software Development{" "}
                <span className="text-gray-500">| May, 2025 - May, 2025</span>
              </p>
              <p className="text-gray-700">The University of Melbourne</p>
              <p className="text-gray-500">GPA: 79/100</p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                RELEVANT EXPERIENCE
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Full Stack Developer Intern
                </h3>
                <p className="text-gray-600">
                  Jul, 2024 - Present | Godisoft, Ontario, Canada
                </p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    Implement frontend analytic dashboards with React framework
                    and Shopify&apos;s Polaris
                  </li>
                  <li>
                    Delivered insightful business data via RESTful API endpoints
                    in C#, .NET Core, performing calculations on transactional
                    data from MongoDB
                  </li>
                  <li>
                    Coordinate with 5 members of customer support team to patch
                    over 20 bugs
                  </li>
                  <li>
                    Worked within CI/CD pipelines with separate development and
                    production environments
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Freelance Developer
                </h3>
                <p className="text-gray-600">
                  Dec, 2022 - Aug, 2023 | Upwork, Melbourne, Australia
                </p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    Developed Python automation scripts for Blender according to
                    client&apos;s requirements
                  </li>
                  <li>Ensured code readiness for backend deployment</li>
                  <li>
                    Analyzed complex geometric and mathematical problems for
                    coding solutions
                  </li>
                  <li>
                    Communicated and negotiated 4 contracts, explained technical
                    details to clients
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  STEM & English Tutor
                </h3>
                <p className="text-gray-600">
                  Apr, 2021 - Apr, 2022 | Private Household, Hanoi, Vietnam
                </p>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    Assessed students&apos; assignments weekly and provided
                    feedback
                  </li>
                  <li>
                    Guided students in gaining confidence with course materials
                    and English fluency
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">PROJECTS</h2>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Medical Pantry Item Scanner
                </h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    Android warehouse management application developed as a
                    team-based Scrum Agile project
                  </li>
                  <li>
                    Integrated database and OCR system with Node.js and Firebase
                  </li>
                  <li>
                    Initiated backend testing workflow in Jest, reducing
                    deployment issues
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Viceragenesis
                </h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    3D horror/action game created by a team of four in Unity
                  </li>
                  <li>
                    Handled graphical programming, creating Cg/HLSL shaders, UI
                    elements with GIMP, character modeling with Blender
                  </li>
                  <li>
                    Established file structure and project organization plan to
                    improve productivity
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Kosmophagist
                </h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    Hyper-casual Android game created in Unity, published on
                    Play Store
                  </li>
                  <li>
                    Handled all aspects (design, gameplay, graphics, UI, art,
                    sound, distribution)
                  </li>
                  <li>Implemented monetization through advertisements</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  Personal Website
                </h3>
                <ul className="list-disc ml-6 text-gray-700">
                  <li>
                    Designed retro website built with HTML/CSS and Express.js
                  </li>
                  <li>
                    Hosted on an AWS Linux instance using Apache, connected to a
                    MongoDB database
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                TECHNICAL SKILLS
              </h2>
              <p className="text-gray-700">
                <strong>Languages:</strong> C#, Typescript, Python, C++, Java,
                Cg/HLSL, SQL, MATLAB
              </p>
              <p className="text-gray-700">
                <strong>Frameworks & Libraries:</strong> React, Node.js, .NET,
                ABP Framework, Python Pandas, Matplotlib
              </p>
              <p className="text-gray-700">
                <strong>Technical Tools:</strong> Unity, MongoDB, PostgreSQL,
                Linux, AWS, Git
              </p>
              <p className="text-gray-700">
                <strong>Productivity Tools:</strong> Confluence, Trello, Github
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
