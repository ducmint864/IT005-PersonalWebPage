"use client"

import Image from 'next/image';
import { FaTwitter, FaGithub, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import ProjectCard from './components/ProjectCard'
import Link from 'next/link';

export default function Home() {
  /**
   * 
   * @dev This is a React component, not a normal function
   */
  const SideBar = () => {
    const scrollToAbout = () => {
      // aboutRef.current?.scrollIntoView({behavior: "smooth"});
      const elem = document.getElementById("AboutSection");
      elem?.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToBlog = () => {
      // blogRef.current?.scrollIntoView({behavior: "smooth"});
      const elem = document.getElementById("BlogSection");
      elem?.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToProject = () => {
      // projectRef.current?.scrollIntoView({behavior: "smooth"});
      const elem = document.getElementById("ProjectSection");
      elem?.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToContact = () => {
      const elem = document.getElementById("ContactSection");
      elem?.scrollIntoView({ behavior: "smooth" });
    }

    /**
     * 
     * @notice This is a React component
     */
    const NavButton = ({ children, scrollFunc }: {
      children: React.ReactNode,
      scrollFunc: any
    }) => {
      return (
        <div onClick={scrollFunc} className="p-2 w-full rounded-md hover:rounded-lg transition delay-50 ease-in-out hover:text-black hover:bg-indigo-50 hover:-translate-y-1 hover:scale-110 mt-14 text-center">
          {children}
        </div>
      )
    }

    return (
      <div className="mt-2 h-screen w-1/6 flex flex-col items-center">
        <div className="image-container">
          <Image className="rounded-full" src="/face.jpg" alt="my profile image" height={100} width={100} />
        </div>
        <h1 className="m-3 font-bold text-2xl">Duc Minh</h1>
        <div className="container mx-auto">
          <div className="flex-column font-semibold p-2 container">
            <NavButton scrollFunc={scrollToAbout}>ABOUT</NavButton>
            <NavButton scrollFunc={scrollToBlog}>
              <Link href="/blog" >
                BLOG
              </Link>
            </NavButton>
            <NavButton scrollFunc={scrollToProject}>PROJECT</NavButton>
            <NavButton scrollFunc={scrollToContact}>CONTACT</NavButton>
          </div>
        </div>
        <div>
        </div>
      </div>
    )
  }

  const AboutSection = () => {
    return (
      <div id="AboutSection" className="w-full rounded-lg bg-gray-900 bg-opacity-50 p-8">
        <div className="container mx-auto">
          <h1 className="font-black text-3xl">
            About me
          </h1>
          <p className="font-bold">Hi, My name is 'Nguyễn Đỗ Đức Minh'</p>
          <p>I'm a 2nd year student at University of Information Technology - Vietnam National University Ho Chi Minh.</p>
          <p className="text-sm">Major: Information Systems</p>
          <p className="text-sm">Age: {(new Date()).getFullYear() - 2004}</p>
          <br />
          <p className="font-bold">My Enthusiasm</p>
          <ul>
            <li>🔭 I’m enthusiastic in: Blockchain(Web3, DeFi, Decentralized Identity, DAOs...), Big Data, Linux</li>
            <li>🌱 I’m currently learning Blockchain and Smart Contracts development</li>
            <li>👯 I’m looking for passionate people to learn from and collab with</li>
            <li>🤔 I’m looking for help with ...</li>
          </ul>

          <Image className="mt-2 rounded-lg w-full h-full" src="/city1.gif" alt="city1" width={100} height={100} />
        </div>
      </div>
    )
  }

  const ProjectSection = () => {
    return (
      <div className="p-1 ml-2" id="ProjectSection">
        <h1 className="font-black text-3xl">
          My Projects
        </h1>
        <div className="container w-full flex flex-row p-4 gap-4 justify-between ">
          <ProjectCard _codeSrc="https://devfolio.co/projects/decarbon-protocol-58e6" _imageSrc="/decarbon.jpg" _title='deCarbon' _description='@Blockchain data analytics'>
            <div className="flex-column p-4">
              <h1 className="font-semibold">Overview: Blockchain carbon emissions dashboard</h1><br />
              <Image
                className="h-full w-full"
                src="/decarbon-architecture.jpg"
                alt="img"
                width={100}
                height={100}
              />
              <h3 className="font-semibold">| Responsibility: Algorithm researcher (Blockchain transaction metrics to emissions units), ETL process on raw Blockchain's data.</h3><br />
              <h3 className="font-semibold">| Skillsets acquired/strengthened: Teamwork, POW, POS, Typescript, Git, Github, SQL, Star Schema, NextJs, Program usecases.</h3>
            </div>
          </ProjectCard>
          <ProjectCard _codeSrc="https://github.com/ducmint864/dPassManager" _imageSrc="/pm.png" _title="dPM" _description="@Web3 Password Manager">
            <div className="flex-column p-4">
              <h1 className="font-semibold">Overview: Decentralized Password Manager</h1><br />
              <Image
                className="h-full w-full"
                src="/pm.png"
                alt="img"
                width={100}
                height={100}
              />
              <h3 className="font-semibold">| Responsibility: Core Smart Contracts</h3><br />
              <h3 className="font-semibold">| Skillsets acquired/strengthened: Teamwork, Security, Cryptography, Git, Github, Program usecases, Solidity, Design patterns</h3>
            </div>
          </ProjectCard>
          <ProjectCard _codeSrc="" _imageSrc="/next.png" _title="codefolio" _description="@IT005 Profile Page">
            <div className="flex-column p-4">
              <h1 className="font-semibold">Overview: My Personal Profile Page</h1><br />
              <Image
                className="h-full w-full"
                src="/thispage.png"
                alt="img"
                width={100}
                height={100}
              />
            </div>
          </ProjectCard>
        </div>
      </div>
    )
  }

  const ContactSection = () => {
    return (
      <div id="ContactSection" className="w-full rounded-lg bg-gray-900 bg-opacity-50 p-8">
        <div className="container mx-auto">
          <h1 className="font-black text-3xl">
            Contact me
          </h1>
          <div className="items-center flex flex-row mt-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-300 hover:text-white"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJfpsCppGSzbQdZLhKPQpDmjvQRGcdDFwjbPXsfdsMzpdZRpvRjdpqqXxxDKZcZjxnLgLKL"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-300 hover:text-white"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://github.com/ducmint864"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-300 hover:text-white"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100045421423001"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-300 hover:text-white"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-300 hover:text-white"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-gray-300 hover:text-white"
            >
              <FaYoutube size={35} />
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="divide-gray-900 divide-opacity-30 divide-x-2 flex flex-row w-screen">
      <SideBar />
      <div className="divide-gray-900 min-h-screen flex flex-col justify-between p-2 gap-8">
        <div>
          <AboutSection />
        </div>
        <div className="border-t-2">
          <div>
            <ProjectSection />
          </div>
          <div>
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  )
}
