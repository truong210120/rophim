import { IMovie } from "@/app/interface";
import { faArrowTrendUp, faHeart, faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag, Tooltip } from "antd";
import Image from "next/image";
import { toast } from "react-toastify";

export default function CardMovieTrend({ Movie, id }: { Movie: IMovie, id: number }) {

      return (
            <div className="flex gap-[15px] pb-[10px] pt-[5px] items-center">
                  <span className="text-[#fff5] text-[16px] font-bold">{id+1}.</span>
                        <FontAwesomeIcon
                              icon={faArrowTrendUp}
                              style={{
                                    fontSize: "16px",
                                    paddingLeft: "5px",
                                    color: "#bedc33",
                              }}
                        />
                        <div className="w-[25px] h-[36px]">
                              <Image
                              className="w-full object-cover h-full"
                              unoptimized
                              width={25}
                              height={36}
                              src={Movie.image}
                              alt="trend1"
                        />
                        </div>
                        <div className="max-w-[250px]">
                              <p className="whitespace-nowrap cursor-pointer hover:text-[#f0d25c] overflow-hidden text-ellipsis text-white text-[14px]">{Movie.title}</p>
                        </div>
            </div>
      );
}
