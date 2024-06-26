import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Contact from "../components/contactMe";
import BlurredBackground from "../components/blurredBack";
import HomePage from "../components/home";

import AboutMe from "../components/aboutme";
import Experience from "../components/experience";
import MyProjects from "../components/projects";
//import Mentorship from "../components/mentorship";
import Blogs from "../components/blogs";
import { PostMetadata } from "../../blogMethods/blogType";
import Head from "next/head";
import SEO from "../components/seo";

export const getStaticProps = async () => {
  const { getPostMetadata } = await import("../../blogMethods/readFile");

  const posts: PostMetadata[] = getPostMetadata(); // Call your server-side function here
  return {
    props: {
      posts,
    },
  };
};

type MainProps = {
  posts: PostMetadata[];
};

const Main = ({ posts }: MainProps) => {
  return (
    <>
      <SEO
        title="Jayakumar Thangavel"
        description="Jayakumar Thangavel - Mobile App Developer, 5+ Hackathon Winner, and Tech Enthusiast."
        canonicalUrl="http://www.techjayakumar.dev/"
        ogImageUrl="http://www.techjayakumar.dev/assets/me.jpeg"
      />
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Jayakumar Thangavel</title>{" "}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@geeky_dan" />
          <meta name="twitter:title" content="Jayakumar Thangavel" />
          <meta
            name="twitter:description"
            content="18 y/o self taught flutter dev • full time indie hacker 👨‍💻•  freelancer(helping startups soar) 🚀🚀."
          />
          <meta
            name="twitter:image"
            content="https://www.techjayakumar.dev/assets/memoji.png"
          />
          <meta
            name="description"
            content="18 y/o self taught dev • full time indie hacker 👨‍💻 • building http://shopwise.tech  •  freelancer(helping startups soar) 🚀🚀"
          />
          <meta
            name="keywords"
            content="18 y/o self taught dev • full time indie hacker 👨‍💻 • building http://shopwise.tech  •  freelancer(helping startups soar) 🚀🚀  •  flutter developer  • mobile app developer  • software developer "
          />
          <link rel="canonical" href="http://www.techjayakumar.dev/" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-EW1YXYND70"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EW1YXYND70', {
            page_path: window.location.pathname,
          });
        `,
            }}
          />
        </Head>
        <main className="flex-grow ">
          <BlurredBackground />
          <div className="flex-col z-10 relative mx-auto justify-center items-center max-w-[1572px]">
               <HomePage />
              <AboutMe />
              <Experience />
              <MyProjects />
              <Blogs posts={posts} />
              
              <Contact />
           
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;
