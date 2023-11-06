import Dropdown from "@/utils/drop_down";
import Test from "@/utils/drop_down";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
export default function Home() {
  return (
    <>
      <div className="relative">
        <div className=" realtive w-[100vw] h-[100vh]">
          <div className="absolute top-0 ">
            <img
              className="w-full h-[100vh]  object-cover"
              src="afriddev-home-cover.jpg"
            />
          </div>
          <div className="relative p-6">
            <div className="flex gap-x-8 items-center">
              <a className="text-white text-3xl ">
                <HiOutlineMenuAlt4 />
              </a>
              <label className="text-primary text-3xl font-bold">
                AfridDev<span className="text-white text-[35px]">.</span>
                <span className=" text-purpleShade text-[30px] font-extrabold">
                  _
                </span>
              </label>
            </div>
            <div className="circle absolute top-[24vh] left-[60vw] "></div>
            <div
              className="flex flex-col text-white absolute top-[41vh] justify-center 
                    text-center items-center gap-y-1  "
            >
              <h1 className="font-bold text-[40px] ">SHAIK AFRID</h1>
              <h3 className="font-bold pl-8 pr-8 text-xl">
                SOFTWARE ENGINEER, FULL STACK & APP DEVELOPER.
              </h3>
            </div>
            <div className=" absolute top-[80vh] left-[40vw] flex justify-center items-center text-center">
              <Dropdown />
            </div>
          </div>
        </div>
        <div className="relative bg-bg">
          <div className="flex justify-center items-center">
            <h2 className="text-white font-bold text-3xl pt-20 ">My Expertise </h2>
          </div>
          <div className="flex flex-col justify-center items-center pt-10 ">
            <div className="flex flex-col border rounded-sm w-[90vw] h-fit p-4 ">
              <div className="w-full flex justify-between text-left p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42"><path d="M18,34.111l-1.667,6.667L14.111,43H31.889l-2.222-2.222L28,34.111M3,25.222H43M7.444,34.111H38.556A4.444,4.444,0,0,0,43,29.667V7.444A4.444,4.444,0,0,0,38.556,3H7.444A4.444,4.444,0,0,0,3,7.444V29.667A4.444,4.444,0,0,0,7.444,34.111Z" transform="translate(-2 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                <div className="flex  w-4/6 flex-col">
                  <div className="relative w-fit ">
                    <h2 className="text-white text-2xl relative z-50
                      ">Software </h2>
                    <div className=" border-b-8 border-pink-600  relative -top-4"></div>
                  </div>
                  <a className="text-white text-2xl -mt-3 ">Development</a>
                </div>
              </div>
              <div className="w-full flex justify-between p-3 items-center">
                <div className="flex flex-col justify-center items-center ">
                  <h2 className="text-lg text-secondary">{"<h2>"}</h2>
                  <div className=" h-[17vh] bg-secondary w-[2px]"></div>
                  <h2 className="text-lg text-secondary">{"<h2>"}</h2>
                </div>
                <div className="justify-center items-center">
                  <label className="text-white text-md">Experienced in both functional and OOP: Java, Dart,
                   Python, JavaScript, TypeScript.</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
