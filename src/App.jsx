import { useState } from 'react'
import DataImage from "./data";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="hero grid grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero image" className="w-10 rounded-md" />
            <q className="text-lg italic">
              open to work.
            </q>
          </div>
          <h1 className="text-5xl/tight font-bold ">Nur Handiena</h1>
          <p className="text-base/loose mb-6 opacity-50">
            A passionate Informatics student with an interest in visual 
            design and game development. Turning ideas into interesting 
            and interactive forms, and enjoy learning new skills. I am a 
            meticulous person, open to collaboration, and able to work in 
            a dynamic rhythm.
          </p>
          <p className="text-base/loose mb-6 opacity-35 italic">
            Skillset: HTML, CSS, JavaScript, React, Tailwind css, node js, Figma, Adobe Illustrator.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="bg-red-700 p-4 rounded-2xl hover:bg-red-600 transition-all duration-300">
              Download CV
            </a>
            {/* <a href="" className="bg-zinc-800 p-4 rounded-2xl hover:bg-zinc-600 transition-all duration-300">
              Lihat Proyek
            </a> */}
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero image" className="w-[500px] ml-auto rounded-2xl" />
      </div>

      {/* projek ku */}
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">
          Here are some projects I have worked on.
        </p>
        <div className="proyek-box"></div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="flex flex-col items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.BlobWeb} alt="Hero image" className="w-[500px] rounded-md" />
            <p className="text-base/loose text-align">
              A completely unnecessary but delightfully over-engineered 
              registration form for... fish, apparently. Blob Blob invites 
              aspiring aquatic citizens to sign up with all the seriousness 
              of a real SaaS onboarding flow, because why should humans 
              have all the fun with forms?
            </p>
          </div>
      </div>
    </>
  )
}

export default App
