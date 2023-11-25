import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaHackerrank } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <section className="bg-bg flex flex-col  p-4 justify-center">
        <div className="flex flex-col">
          <div className="text-center font-bold  text-xl  ">
            <h2>Available for select freelance opportunities</h2>
          </div>
          <div className="flex flex-col text-white text-center pt-6 p-3">
            <h3>have an exciting project you need help with ?</h3>
            <p>Send me and email or contct me via instant message!</p>
          </div>
        </div>
        <div className="text-center pt-10 flex   flex-col justify-center">
          <div className="  w-full text-center ">
            <label className=" font-bold w-fit border-b-2 rounded-sm  border-purpleShade  ">
              afridayan01@gmail.com
            </label>
          </div>
          <div className="text-center pt-10 list-none  flex space-x-6 justify-center ">
            <a className="font-bold w-10 text-2xl flex h-10 rounded-lg bg-zinc-800 items-center justify-center">
              <FaGithub />
            </a>
            <a className="font-bold w-10 text-2xl flex h-10 rounded-lg bg-zinc-800 items-center justify-center">
              <FaLinkedin />
            </a>
            <a className="font-bold w-10 text-2xl flex h-10 rounded-lg bg-zinc-800 items-center justify-center">
              <RiInstagramFill />
            </a>
            <a className="font-bold w-10 text-2xl flex h-10 rounded-lg bg-zinc-800 items-center justify-center">
              <FaHackerrank />
            </a>
            
          </div>
        </div>
        <div className="text-center text-sm  pt-4">
            <label className="text-zinc-300"> © 2023 Made with passion by Shaik Afrid.</label>
        </div>
      </section>
    </>
  );
}
