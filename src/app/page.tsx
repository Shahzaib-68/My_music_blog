 import Image from "next/image";
import guitar from "./IMAGES/eddies-guitar-3-gary-bodnar.jpg"
import piano from "./IMAGES/th.jpeg"
import Percussion from "./IMAGES/th (2).jpeg"
import Woodwind from "./IMAGES/th (3).jpeg"
import Brass from "./IMAGES/th (1).jpeg"
import Drum from "./IMAGES/th (4).jpeg"

export default function Home() {
  type Data = {
    title: string;
    description: string;
    image : any;
  }
  let data: Data[] = [
    {
      title: "Guitars",
      description:
        " Acoustic Guitars :These produce sound acoustically through the vibration of strings over a hollow chamber. ",
       image : guitar ,
    },
    {
      title: "piano",
      description:
        "The modern piano was invented around 1700 by Bartolomeo Cristofori in Italy.",
        image : piano ,
    },
    {
      title: "Percussion",
      description:
        "Pitched Percussion : Instruments that produce specific notes, like xylophones, marimbas, and timpani.",
        image : Percussion ,
    },
    {
      title: "Woodwind",
      description:
        "Clarinet : Uses a single reed to produce sound. It has a rich, warm tone and is versatile across genres.",
        image : Woodwind ,
    },
    {
      title: "Brass",
      description:
        "Trumpet: The highest-pitched brass instrument, its versatile and used in various music genres, from classical to jazz.",
        image : Brass ,
    },
    {
      title: "Drum",
      description:
        "Snare Drum: Known for its sharp, staccato sound. A central part of drum kits.",
        image : Drum ,
    },
  ];
  {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-950">
      <header className="bg-gray-800 text-white py-4 w-full sm:w-[1080px] rounded-full pl-4 sm:pl-12 mt-8 mx-auto">
        <nav className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h1 className="text-3xl font-bold">My Blog</h1>
          <ul className="flex space-x-4 font-bold text-lg">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-wrap justify-evenly w-full sm:w-[1320px] mx-auto mt-8 space-y-6">
        {data.map((item, index) => (
          <div key={index} className="flex-grow max-w-sm p-6 bg-white shadow-2xl rounded-lg border border-gray-200 bg-stone-900 m-4">
            <Image className="w-full h-48 rounded-t-lg object-cover" src={item.image} alt="this is my guitar blog" />
            <div className="mt-4">
              <h1 className="text-2xl font-semibold text-gray-800">{item.title}</h1>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-4">
        <p className="text-center">© 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
}
 


 