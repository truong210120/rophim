import { IMovieNew } from "@/app/interface";
import { faHeart, faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag, Tooltip } from "antd";
import Image from "next/image";
import { toast } from "react-toastify";

export default function MovieTheater({ Movie }: { Movie: IMovieNew }) {
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
            offset: [-75, 350],
          }}
          title={
            <div className="bg-[#1E2545]  rounded-[10px]">
              <div className="relative">
                <Image
                  className="w-full h-auto"
                  unoptimized
                  width={320}
                  height={180}
                  src={Movie.logoImage}
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
          <div className="relative cursor-pointer mr-[16px]">
            <div className="relative h-0 rounded-[10px] w-full overflow-hidden block max-[750px]:pb-[70%] pb-[45%]">
              <Image
                src={Movie.logoImage}
                className="w-full h-auto  object-cover"
                width={500}
                height={281}
                alt={Movie.title}
              />
              <span className="text-white bg-[#5e6070] absolute bottom-0 left-[120px] rounded-t-sm text-[11px] px-[8px] py-[7px]">
                P.Đề
              </span>
            </div>
            <div className="flex gap-[20px] max-[750px]:hidden relative bottom-[50px] left-[20px] z-100">
              <Image
                src={Movie.image}
                className="rounded-[10px]"
                width={80}
                height={120}
                alt={Movie.title}
              />
              <div>
                <div className="pt-[70px]">
                  <h1 className="text-[13px] max-w-[200px] text-white hover:text-[#FFD875] whitespace-nowrap overflow-hidden text-ellipsis">
                    {Movie.title}
                  </h1>
                  <h1 className="text-[#aaa] py-[2px] max-w-[200px] text-[12px] whitespace-nowrap overflow-hidden text-ellipsis">
                    {Movie.subTitle}
                  </h1>
                  <div className="flex items-center">
                    <span className="text-[#aaa] font-bold text-[13px]">
                      {Movie.quality}
                    </span>
                    <ul
                      role="list"
                      className="flex max-[750px] list-disc marker:text-[#ffffff30]"
                    >
                      <li className="text-[#aaa] ml-[20px] text-[12px]">
                        {Movie.year}
                      </li>
                      <li className="text-[#aaa] ml-[20px] text-[12px]">
                        {Movie.quality}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-[10px] flex items-center justify-center hidden max-[750px]:flex">
              <div>
                <h1 className="text-[13px] max-w-[200px] text-white hover:text-[#FFD875] whitespace-nowrap overflow-hidden text-ellipsis">
                  {Movie.title}
                </h1>
                <h1 className="text-[#aaa] py-[2px] max-w-[200px] text-[12px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {Movie.subTitle}
                </h1>
              </div>
            </div>
          </div>
        </Tooltip>
      </div>
      <div className="relative mr-[16px] max-[1280px]:block hidden cursor-pointer max-[1024px]:px-[5px]">
        <div className="relative h-0 rounded-[10px] w-full overflow-hidden block max-[750px]:pb-[70%] pb-[45%]">
          <Image
            src={Movie.logoImage}
            className="w-full h-auto  object-cover"
            width={500}
            height={281}
            alt={Movie.title}
          />
          <span className="text-white bg-[#5e6070] absolute bottom-0 left-[120px] rounded-t-sm text-[11px] px-[8px] py-[7px]">
            P.Đề
          </span>
        </div>
        <div className="flex gap-[20px] max-[750px]:hidden relative bottom-[50px] left-[20px] z-100">
          <Image
            src={Movie.image}
            className="rounded-[10px]"
            width={80}
            height={120}
            alt={Movie.title}
          />
          <div>
            <div className="pt-[70px]">
              <h1 className="text-[13px] max-w-[200px] text-white hover:text-[#FFD875] whitespace-nowrap overflow-hidden text-ellipsis">
                {Movie.title}
              </h1>
              <h1 className="text-[#aaa] py-[2px] max-w-[200px] text-[12px] whitespace-nowrap overflow-hidden text-ellipsis">
                {Movie.subTitle}
              </h1>
              <div className="flex items-center">
                <span className="text-[#aaa] font-bold text-[13px]">
                  {Movie.quality}
                </span>
                <ul
                  role="list"
                  className="flex max-[750px] list-disc marker:text-[#ffffff30]"
                >
                  <li className="text-[#aaa] ml-[20px] text-[12px]">
                    {Movie.year}
                  </li>
                  <li className="text-[#aaa] ml-[20px] text-[12px]">
                    {Movie.quality}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[10px] flex items-center justify-center hidden max-[750px]:flex">
          <div>
            <h1 className="text-[13px] max-w-[200px] text-white hover:text-[#FFD875] whitespace-nowrap overflow-hidden text-ellipsis">
              {Movie.title}
            </h1>
            <h1 className="text-[#aaa] py-[2px] max-w-[200px] text-[12px] whitespace-nowrap overflow-hidden text-ellipsis">
              {Movie.subTitle}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
