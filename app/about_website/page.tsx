"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";
import { StickyHeader } from "../components/stickyHeader";

export default function AboutWebsite() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  return (
    <div className="bg-stone-900">
      <StickyHeader />

      <div className="grid items-center justify-items-center min-h-screen p-2 lg:p8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="bg-gray-200 p-3 lg:p-10 rounded-lg shadow-lg mt-10 max-w-3xl">
          <h1 className="text-7xl font-extrabold text-center text-stone-900  drop-shadow-lg py-3">
            About This Website
          </h1>
          <div className="flex space-x-5 "></div>
          <br></br>
          <div className="bg-gray-300 p-3 rounded-lg shadow-lg max-w-3xl">
            <p className="text-2xl font-extrabold text-center text-indigo-600 drop-shadow-lg">
              Introduction
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              Welcome to my beautiful website!
            </p>
            <br></br>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              Thank you for visiting. This website serves as my personal
              website, as well as my own attempt at the Cloud Resume Challange.
              As such, the website is a mix between technical showcases and
              depictions of my personal life.
            </p>
            <div className="flex space-x-5 "></div>
            <br></br>
          </div>
          <br></br>
          <div className="bg-gray-300 p-3 rounded-lg shadow-lg max-w-3xl">
            <p className="text-2xl font-extrabold text-center text-indigo-600 drop-shadow-lg">
              What&apos;s on this Website?
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              - About This Website: How and Why this Website was built.
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              - My Resume: My Developer Resume.
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              - My Pictures: Random pictures and stories from my life.
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              - About Me: A little bit about me.
            </p>
            <br></br>
          </div>
          <br></br>
          <div className="bg-gray-300 p-3 rounded-lg shadow-lg max-w-3xl">
            <p className="text-2xl font-extrabold text-center text-indigo-600 drop-shadow-lg">
              The Cloud Resume Challenge
            </p>
            <p className="text-lg text-gray-800 drop-shadow-lg">
              My take on the cloud resume challenge does not strictly follow all
              the technologies listed but nevertheless ticked all the
              requirements for the challenge. I am using AWS as my cloud
              provider and follow the challenge specs of the AWS version.
            </p>
            <br />
            <ol className="text-lg text-gray-800 drop-shadow-lg list-decimal pl-6">
              <li>
                <strong>Certification</strong>
                <br />
                Well except for this one, I haven’t taken any exam yet, but I
                did finish the AWS Certified Cloud Practitioner course on Udemy
                by Stephane Maarek. I am currently studying for the AWS
                Certified Developer course, also by him. Both courses are very
                good, lectures are straightforward and include plenty of
                hands-on lessons.
              </li>
              <br />
              <li>
                <strong>HTML</strong>
                <br />
                For the front end, I use Next.js and, as such, I use HTML
                components.
              </li>
              <br />
              <li>
                <strong>CSS</strong>
                <br />
                Instead of traditional CSS files, I use Tailwind CSS for ease of
                use, practicality, and alignment with what employers use
                nowadays.
              </li>
              <br />
              <li>
                <strong>Static Website</strong>
                <br />
                Since we are doing a static website hosted on S3, my Next.js
                needs to be exported to static files. Therefore, my front end
                may be limited to static content, but unfortunately, that is
                inevitable if you want to stay under the free tier.
                <br />I have tried to go above and beyond with solutions such as
                hosting with an EC2 Apache HTTP server or running Docker
                containers on ECS Fargate. These solutions offer more
                flexibility since I can have code running on the server instead
                of just static files. However, they were deprovisioned after a
                couple of weeks due to the cost of running them.
              </li>
              <br />
              <li>
                <strong>HTTPS</strong>
                <br />I created ACM certificates for my domain. The S3 website
                endpoint is then set as the origin of a CloudFront Distribution
                with HTTPS.
              </li>
              <br />
              <li>
                <strong>DNS</strong>
                <br />I bought <code>khuebanhzai.com</code> for $15 and created
                a AAAA record that points to my CloudFront Distribution with
                IPv6. My DNS records also contain two A records that point to{" "}
                <code>dev.khuebanhzai.com</code> and{" "}
                <code>api.khuebanhzai.com</code> hosted zones, which are the
                subdomains reserved for API endpoints.
              </li>
              <br />
              <li>
                <strong>JavaScript</strong>
                <br />
                Next.js is a Node.js framework, so everything already includes
                JavaScript.
              </li>
              <br />
              <li>
                <strong>Database</strong>
                <br />
                Instead of using DynamoDB, I use MongoDB hosted on Mongo Atlas.
                In principle, DynamoDB should be similar to MongoDB, so I chose
                the latter for my database option to navigate away from the AWS
                Console for a bit.
              </li>
              <br />
              <li>
                <strong>API</strong>
                <br />I set up endpoints on API Gateway to allow my frontend to
                interact with my Lambda functions. I also set up custom domains
                for my APIs and configured them to respond with CORS Access
                Allow headers.
              </li>
              <br />
              <li>
                <strong>Python</strong>
                <br />I already know Python, so I had the choice to pick either
                Node.js or Python runtime for my Lambda Functions. In the end, I
                picked Node.js.
              </li>
              <br />
              <li>
                <strong>Tests</strong>
                <br />
                This is ongoing.
              </li>
              <br />
              <li>
                <strong>Infrastructure as Code</strong>
                <br />I use Terraform as my IaC tool because it is
                cloud-agnostic, in case I want to do another version of the
                Cloud Resume Challenge.
              </li>
              <br />
              <li>
                <strong>Source Control</strong>
                <br />
                After every change, my code is committed to a GitHub Repo, which
                is currently private. Each time a commit to the main branch is
                made, a CI/CD job is run to test, build, and deploy new changes.
              </li>
              <br />
              <li>
                <strong>CI/CD (Back End)</strong>
                <br />
                This is ongoing.
              </li>
              <br />
              <li>
                <strong>CI/CD (Front End)</strong>
                <br />
                After each commit, a GitHub Action workflow runs to export my
                Next.js code into static files. Then, tests are run to check for
                issues. The build artifacts are uploaded to another workflow
                that deploys changes to my S3 Bucket. Finally, the CloudFront
                Distribution is invalidated to ensure visitors fetch the newest
                content from the origin.
              </li>
              <br />
              <li>
                <strong>Blog Post</strong>
                <br />
                This is my blog post.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
