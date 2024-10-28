import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-around items-center bg-black w-[80%] h-16 rounded-full">
        <div className="flex items-center">
          <Image
            src={"/home-images/logo.png"}
            width={60}
            height={60}
            alt="logo"
          ></Image>
        </div>
        <div>
          <nav>
            <ul className="flex gap-8">
              <li className="hover:text-gray-400">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-gray-400">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <button className="bg-gray-800 p-2 pl-6 pr-6 rounded-md hover:bg-gray-600">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
