import Toppic from "@/assets/svg/Toppic"
import Moon from "@/assets/svg/Moon"
import RightMiddle from "@/assets/svg/RightMiddle"
import MainPic from "@/assets/svg/MainPic"
import RightBottom from "@/assets/svg/RightBottom"
import LeftBottom from "@/assets/svg/LeftBottom"
import VeryBottom from "@/assets/img/very-bottom.png"
import Image from "next/image"

export default function main(){
  return(
    <div>
      
      <div className="relative w-screen h-screen bg-gradient-to-b from-[#00160C] to-[#00422C]">
          <div className="absolute w-full top-0 right-0 z-10">
            <Toppic className="w-full h-min" />
          </div>
          <Moon className="absolute top-20 left-6 w-16 z-10" />
          <div className="absolute  bottom-[15rem] right-0  z-10">
            <RightMiddle className="h-[10rem] w-min"  />
          </div>
          {/* <img src="../img/very-bottom.png" /> */}
          <Image src={VeryBottom} className="absolute bottom-0 z-20"/>
          <RightBottom className="absolute w-32 right-0 bottom-5 z-10" />
          
          <div className="absolute bottom-0 w-32 z-10">
            <LeftBottom className="w-full h-min"/>
          </div>

          <div className="absolute h-min  bottom-0 w-full h-0 flex justify-center mb-0  z-0 mx-auto">
             <MainPic className="w-[17rem] h-min mb-0" />
          </div>

          <div className="mx-16 absolute z-10">
            <h1 className="text-white font-bold text-[1.5rem]  pt-[10rem]">Selamat Hari Raya</h1>
            <h1 className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#F8F7BE] to-[#DAA94B] text-[3rem] -mt-3">Idul Fitri</h1>
            <p className=" text-white">Selamat Hari Raya Idul Fitri! Mohon maaf lahir dan batin ya, semoga kita semua diberikan keberkahan dan keselamatan di hari yang suci ini.  </p>
            <button className="mt-5 bg-gradient-to-r w-32 h-10 text-[#2B1816] rounded-[100px] font-bold from-[#DAA94B] to-[#F8F7BE]">Bagikan</button>
          </div>
      </div>
    </div>
  )
}