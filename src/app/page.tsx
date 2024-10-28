"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div className=" flex justify-evenly items-center h-screen w-auto">
        <div className="flex justify-center w-1/2">
          <Image
            src="/home-images/profile.jpeg"
            alt="Profile Image"
            width={350}
            height={350}
            className=" rounded-full"
          />
        </div>
        <div className="text-lg  text-dull-white w-1/2 pl-10 pr-80">
          <div className="flex items-end text-lg text-dull-white gap-3">
            <p className="text-black font-bold"> I'M </p>
            <span className="text-4xl text-yellow-500">
              <Typewriter
                options={{
                  strings: ["Wajid Ali"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className="text-black font-bold">
            Student at Governor Sindh Initiative for GenAI, Web3, and Metaverse
          </p>
          <div className="mt-4">
            <button className=" text-black border-yellow-500 border-2 p-2 pl-6 pr-6 rounded-md hover:bg-gray-600 hover:border-white hover:text-white">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center h-[30vh] px-40 bg-black">
        <div>
          <h1 className="text-3xl font-serif text-white">About</h1>
        </div>
        <div className="flex">
          <div className="w-16 mt-2 mr-2 h-1 border-t-2 border-yellow-500"></div>
          <p className="text-justify text-white">
          Hi there! I'm a passionate web developer and graphic designer with a love for creating visually stunning and highly functional digital experiences. As a web developer, I beginner in HTML, CSS, and TypeScript, with a particular focus on building robust applications using Next.js. My goal is to craft user-friendly interfaces that are not only aesthetically pleasing but also perform seamlessly across devices. In addition to my development skills, I am a graphic designer proficient in Adobe Photoshop, Illustrator, and various other design software. I enjoy bringing ideas to life through thoughtful design, whether it’s creating logos, branding materials, or web graphics. I thrive on collaboration and am always eager to learn new techniques and tools to enhance my skill set. Let's create something amazing together!
          </p>
        </div>
      </div> */}

      <div className="flex flex-col  bg-white h-screen font-bold font-serif">
        <div className="text-4xl text-black w-full text-center mt-1 gap-50">
          <Typewriter
            options={{
              strings: ["My Skills"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="flex justify-center gap-10 mt-20 w-full h-1/4">
          <div className="flex flex-col bg-gray-950 shadow-[15px_15px_10px_gray] rounded-3xl items-center justify-center w-1/5 h-60 hover: transform -translate-x-[10px] -translate-y-[10px] hover:shadow-none hover:transition duration-500">
            <Image
              src="/home-images/html.png"
              width={100}
              height={100}
              alt="HTML"
            />
            <h1 className="text-xl mt-6">HTML</h1>
          </div>
          <div className="flex flex-col bg-gray-950 shadow-[15px_15px_10px_gray] rounded-3xl items-center justify-center w-1/5 h-60 hover: transform -translate-x-[10px] -translate-y-[10px] hover:shadow-none hover:transition duration-500">
            <Image
              src="/home-images/css.png"
              width={100}
              height={100}
              alt="CSS"
            />
            <h1 className="text-xl mt-6">CSS</h1>
          </div>
          <div className="flex flex-col bg-gray-950 shadow-[15px_15px_10px_gray] rounded-3xl items-center justify-center w-1/5 h-60 hover: transform -translate-x-[10px] -translate-y-[10px] hover:shadow-none hover:transition duration-500">
            <Image
              src="/home-images/javascript.png"
              width={100}
              height={100}
              alt="javascript"
            />
            <h1 className="text-xl mt-6">JavaScript</h1>
          </div>
        </div>

        <div className="flex justify-center gap-10 mt-20 w-full h-1/4">
          <div className="flex flex-col bg-gray-950 shadow-[15px_15px_10px_gray] rounded-3xl items-center justify-center w-1/5 h-60 hover: transform -translate-x-[10px] -translate-y-[10px] hover:shadow-none hover:transition duration-500">
            <Image
              src="/home-images/tailwindcss.png"
              width={100}
              height={100}
              alt="tailwindcss.png"
            />
            <h1 className="text-xl mt-6">Tailwind.CSS</h1>
          </div>
          <div className="flex flex-col bg-gray-950 shadow-[15px_15px_10px_gray] rounded-3xl items-center justify-center w-1/5 h-60 hover: transform -translate-x-[10px] -translate-y-[10px] hover:shadow-none hover:transition duration-500">
            <Image
              src="/home-images/type.png"
              width={80}
              height={80}
              alt="TypeScript"
            />
            {/* <div>my office wbsite <a href="https://ssusindhpolice.gos.pk/">SSU Sindh Police</a></div> */}
            <h1 className="text-xl mt-6">TypeScript</h1>
          </div>
          <div className="flex flex-col bg-gray-950 shadow-[15px_15px_10px_gray] rounded-3xl items-center justify-center w-1/5 h-60 hover: transform -translate-x-[10px] -translate-y-[10px] hover:shadow-none hover:transition duration-500">
            <Image
              src="/home-images/nextjs.png"
              width={100}
              height={100}
              alt="Next.js"
            />
            <h1 className="text-xl mt-6">Next.Js</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 justify-center h-[30vh] px-40">
        <div>
          <div>
            <h1 className="text-3xl font-serif text-black">My Projects!</h1>
          </div>
          <div className="flex">
            <p className="text-justify text-black">
              That sounds like a great set of projects!
            </p>
          </div>
        </div>

        <div className="flex flex-row text-black justify-items-start justify-center w-30 h-30 gap-8 hover: transform -translate-x-[5px] -translate-y-[5px] hover:shadow-none hover:transition duration-1000">
          <div>
            <Image
              src="/home-images/calculator.png"
              width={100}
              height={100}
              alt="calculator"
            />
            <h1 className="text-xl mt-1">Calculator</h1>
          </div>

          <div className="flex flex-col items-center text-black">
            <Image
              src="/home-images/to-do-list.png"
              width={100}
              height={100}
              alt="to-do-list"
            />
            <h1 className="px-2 text-xl mt-1">To-do-list</h1>
          </div>

          <div className="flex flex-col items-center text-black">
            <Image
              src="/home-images/currency-convert.png"
              width={100}
              height={100}
              alt="currency-convert.png"
            />
            <h1 className="text-xl mt-1">Currency Convert</h1>
          </div>

          <div className="flex flex-col items-center text-black">
            <Image
              src="/home-images/word-counter.png"
              width={100}
              height={100}
              alt="word-counter.png"
            />
            <h1 className="text-xl mt-1">Word Counter</h1>
          </div>

          <div className="flex flex-col items-center text-black">
            <Image
              src="/home-images/cli-number-guessing.png"
              width={100}
              height={100}
              alt="cli-number-guessing.png"
            />
            <h1 className="text-xl mt-1">Number Guessing</h1>
          </div>

          <div className="flex flex-col items-center text-black">
            <Image
              src="/home-images/resume-builder.png"
              width={100}
              height={100}
              alt="resume-builder.png"
            />
            <h1 className="text-xl mt-1">Resume Builder</h1>
          </div>
        </div>
      </div>
    </>
  );
}
