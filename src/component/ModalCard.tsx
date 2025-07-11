import { IMovie } from "@/app/interface";
import { faHeart, faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag, Tooltip } from "antd";
import Image from "next/image";
import { toast } from "react-toastify";

export default function ModalCard({ Movie }: { Movie: IMovie }) {
  const notify = () => {
    toast.error("Bạn phải đăng nhập để sử dụng tính năng này", {
      position: "bottom-right",
      autoClose: 10000,
      theme: "dark",
    });
  };
  return (
    <div className="relative">
      <div className="max-[1280px]:hidden">
        <Tooltip
          placement="top"
          autoAdjustOverflow={false}
          mouseEnterDelay={0.8}
          styles={{
            body: {
              width: "400px", // Đặt chiều rộng mong muốn
              padding: 0, // Bỏ padding mặc định để nội dung tràn ra sát viền
              backgroundColor: "transparent", // Để nội dung tự định nghĩa màu nền
              borderRadius: "10px", // Bo góc cho cả tooltip
              overflow: "hidden", // Ẩn phần bị tràn do bo góc
            },
          }}
          align={{
            offset: [-80, 350],
          }}
          title={
            <div className="bg-[#1E2545]  rounded-[10px]">
              <div className="relative">
                <Image
                  className="w-full h-auto"
                  unoptimized
                  width={320}
                  height={180}
                  src={Movie.image}
                  alt={Movie.title}
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1E2545] via-[#1E2545]/5 to-transparent" />
              </div>
              <div className="px-[16px] pb-[12px]">
                <h3 className="text-[15px] font-semibold text-white pb-[5px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {Movie.title}
                </h3>
                <p className="text-[12px] text-[#FFD875] whitespace-nowrap overflow-hidden text-ellipsis">
                  {Movie.subTitle}
                </p>
              </div>
              <div className="px-[16px] pb-[12px]">
                <div className="grid grid-cols-7 gap-[10px]">
                  <button className="col-span-3 hover:opacity-[0.9] text-[13px] cursor-pointer font-semibold text-black bg-[#FFD875] rounded px-[18px] py-[10px]">
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{
                        fontSize: "13px",
                        color: "black",
                        paddingRight: "5px",
                      }}
                    />
                    Xem Ngay
                  </button>
                  <button
                    onClick={notify}
                    className="col-span-2 hover:opacity-[0.8] text-[13px] cursor-pointer font-semibold text-white bg-transparent border border-white rounded px-[18px] py-[10px]"
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{
                        fontSize: "13px",
                        color: "white",
                        paddingRight: "5px",
                      }}
                    />
                    Thích
                  </button>
                  <button className="col-span-2 hover:opacity-[0.8] text-[13px] cursor-pointer font-semibold text-white bg-transparent border border-white rounded px-[18px] py-[10px]">
                    <FontAwesomeIcon
                      icon={faInfo}
                      style={{
                        fontSize: "13px",
                        color: "white",
                        paddingRight: "5px",
                      }}
                    />
                    Chi tiết
                  </button>
                </div>
                <div className="flex gap-[10px] pt-[20px]">
                  <div>
                    <span className=" py-[4px] px-[6px] text-black bg-white font-bold rounded text-[12px]">
                      {Movie.quality}
                    </span>
                  </div>
                  <div>
                    <span className="p-[4px] bg-[#2F3346] border border-[#2F3346]  text-white rounded text-[12px]">
                      {Movie.year}
                    </span>
                  </div>
                  <div>
                    <span className="p-[4px] bg-[#2F3346] border border-[#2F3346]  text-white rounded text-[12px]">
                      {Movie.part}
                    </span>
                  </div>
                  <div>
                    <span className="p-[4px] bg-[#2F3346] border border-[#2F3346]  text-white rounded text-[12px]">
                      Tập {Movie.episodes}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="mb-[24px] whitespace-nowrap overflow-hidden text-ellipsis mt-[12px] max-[750px]:mb-[10px]">
                    {Movie.typeMovie.map((type, idx) => (
                      <Tag color="#ffffff10" key={idx}>
                        {type}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <div className="pr-[10px]  cursor-pointer max-[1024px]:px-[5px] relative">
            <Image
              className="w-full h-auto rounded-[10px]"
              unoptimized
              width={289}
              height={162}
              src={Movie.image}
              alt={Movie.title}
            />
            <div>
              <div className="absolute left-[30px] max-[650px]:bottom-[68px] bottom-[71px] ">
                <span className="text-[11px] max-[650px]:p-[5px] max-[650px]:text-[10px] px-[8px] py-[8px] bg-[#5e6070]">
                  PĐ {Movie.episodes}
                </span>
                <span className="text-[11px] max-[650px]:p-[5px] max-[650px]:text-[10px] px-[8px] py-[8px] bg-[#2ca35d]">
                  TM {Movie.explanation}
                </span>
              </div>
              <div className="px-[16px] py-[12px]">
                <h3 className="text-[14px] hover:text-[#FFD875] cursor-pointer pb-[5px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {Movie.title}
                </h3>
                <p className="text-[12px] cursor-pointer text-[#aaa] whitespace-nowrap overflow-hidden text-ellipsis">
                  {Movie.subTitle}
                </p>
              </div>
            </div>
          </div>
        </Tooltip>
      </div>

      <div className="pr-[10px] max-[1280px]:block hidden cursor-pointer max-[1024px]:px-[5px] relative">
        <Image
          className="w-full h-auto rounded-[10px]"
          unoptimized
          width={289}
          height={162}
          src={Movie.image}
          alt={Movie.title}
        />
        <div>
          <div className="absolute left-[30px] max-[650px]:bottom-[68px] bottom-[71px] ">
            <span className="text-[11px] max-[650px]:p-[5px] max-[650px]:text-[10px] px-[8px] py-[8px] bg-[#5e6070]">
              PĐ {Movie.episodes}
            </span>
            <span className="text-[11px] max-[650px]:p-[5px] max-[650px]:text-[10px] px-[8px] py-[8px] bg-[#2ca35d]">
              TM {Movie.explanation}
            </span>
          </div>
          <div className="px-[16px] py-[12px]">
            <h3 className="text-[14px] hover:text-[#FFD875] cursor-pointer pb-[5px] whitespace-nowrap overflow-hidden text-ellipsis">
              {Movie.title}
            </h3>
            <p className="text-[12px] cursor-pointer text-[#aaa] whitespace-nowrap overflow-hidden text-ellipsis">
              {Movie.subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
