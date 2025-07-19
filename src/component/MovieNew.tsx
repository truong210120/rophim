import { IMovie } from "@/app/interface";

import Image from "next/image";

export default function MoviewNew({ Movie }: { Movie: IMovie }) {
  return (
    <div className="relative">
      <div className="px-1.5 cursor-pointer group">
        <div className="w-full aspect-[2/3] relative overflow-hidden rounded-md bg-[#282B3A]">
          <Image
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            unoptimized
            width={211}
            height={316}
            src={Movie.image}
            alt={Movie.title}
          />
          <div className="absolute bottom-[-1px] left-[42%] z-10  w-full">
            <span className="text-white bg-[#5e6070] text-[11px] px-[8px] py-[4px]">
              P.Đề
            </span>
          </div>
        </div>
        <div className="pt-2">
          <h1 className="whitespace-nowrap overflow-hidden text-center text-ellipsis text-sm text-white group-hover:text-[#FFD875]">
            {Movie.title}
          </h1>
          <p className="whitespace-nowrap overflow-hidden text-center text-ellipsis text-xs text-gray-400">
            {Movie.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
