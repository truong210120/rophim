import { IMovie } from "@/app/interface";
import Image from "next/image";

export default function MoviePage({
  Movie,
  index,
}: {
  Movie: IMovie;
  index: number;
}) {
  return (
    <div className="relative">
      <div className="px-2 cursor-pointer group">
        <div className="w-full aspect-[2/3] bg-transparent relative overflow-hidden ">
          <div
            className={`bg-[#FFD875] ${
              index % 2 != 0 ? "custom-clip-left" : "custom-clip-right"
            } absolute top-0 left-0 right-0 w-full h-full rounded-[20px]`}
          ></div>
          <Image
            className={`w-full h-full ${
              index % 2 != 0 ? "custom-clip-left" : "custom-clip-right"
            } object-cover transition-transform duration-300 rounded-[15px] group-hover:scale-98`}
            unoptimized
            width={211}
            height={316}
            src={Movie.image}
            alt={Movie.title}
          />
          <div className="absolute bottom-[-1px] left-[32%] z-10  w-full">
            <span className="text-white bg-[#5e6070]  rounded-tl-sm text-[11px] px-[8px] py-[7px]">
              PĐ. {Movie.explanation}
            </span>
            <span className="text-white bg-[#2ca35d] rounded-tr-sm text-[11px] px-[8px] py-[7px]">
              TM. {Movie.episodes}
            </span>
          </div>
        </div>
        <div className="pt-2">
          <div className="flex items-center max-[650px]:gap-3 gap-6">
            <span className="text-[60px] max-[650px]:text-[30px] italic font-[800] text-transparent bg-clip-text bg-[linear-gradient(39deg,_rgba(254,_207,_89,_1),_rgba(255,_241,_204,_1))]">
              {index + 1}
            </span>
            <div>
              <h1 className="text-[14px] max-w-[170px] text-white hover:text-[#FFD875] whitespace-nowrap overflow-hidden text-ellipsis">
                {Movie.title}
              </h1>
              <h1 className="text-[#aaa] py-[2px] max-w-[170px] text-[13px] whitespace-nowrap overflow-hidden text-ellipsis">
                {Movie.subTitle}
              </h1>
              <div className="max-[650px]:hidden flex items-center justify-around">
                <span className="text-white font-bold text-[13px]">
                  {Movie.quality}
                </span>
                <span className="text-white text-[12px]">{Movie.part}</span>
                <span className="text-white text-[12px]">
                  Tập {Movie.episodes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
