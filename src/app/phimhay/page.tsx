"use client";
import {
  faAngleRight,
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faAward,
  faCircleDown,
  faCircleUp,
  faHeart,
  faInfo,
  faMessage,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tag } from "antd";
import Image from "next/image";
import Slider from "react-slick";
import { toast } from "react-toastify";
import Topic from "@/data/phimhay";
import ListMovie from "@/data/phimhay";
import { useRouter } from "next/navigation";
import { IMovie } from "../interface";
import ModalCard from "@/component/ModalCard";
import { useRef } from "react";
interface Iimage {
  image: string;
}
interface ITopic {
  topic: String;
  topicDirect: string;
  color: string;
}

interface IMoves {
  image: string;
  logo: string;
  title: string;
  imdb: string;
  name: string;
  typeMovie: string[];
  description: string;
  year: string;
  quality: string;
  duration: string;
}
export default function PhimHay() {
  var arrCarousel: IMoves[] = [
    {
      image: "/dragon.jpg",
      logo: "/dragonLogo.jpg",
      title: "How to Train Your Dragon",
      name: "Bí Kíp Luyện Rồng",
      imdb: " 8.0",
      quality: "T13",
      year: "2025",
      duration: "1h 40m",
      typeMovie: [
        "Hành Động",
        "Chiếu Rạp",
        "Gay Cấn",
        "Hành Động",
        "Phiêu Lưu",
      ],
      description:
        "Câu chuyện về một chàng trai trẻ với ước mơ trở thành thợ săn rồng, nhưng định mệnh lại đưa đẩy anh đến tình bạn bất ngờ với một chú rồng. Giống như bộ phim hay gốc từ năm 2010, Bí Kíp Luyện Rồng phiên bản live-action lần này diễn ra trên Đảo Berk, nơi người Viking và rồng đã là kẻ thù không đội trời chung trong nhiều thế hệ. Nhưng khi Hiccup (Mason Thames) – con trai của Tù trưởng Stoick the Vast đi ngược lại truyền thống hàng thế kỷ để kết bạn với Toothless - một con rồng Night Fury, chính giây phút đó anh ấy đã phá vỡ quy tắc vốn có của cộng đồng và mở ra sự căng thẳng tột cùng cho cả người Viking và rồng.",
    },
    {
      image: "/bloodline.jpg",
      logo: "/bloodlineLogo.jpg",
      title: "Blood Line",
      name: "Mượn Rượu Đẩy Kèo",
      imdb: " 8.0",
      quality: "T13",
      year: "2025",
      duration: "1h 40m",
      typeMovie: [
        "Hành Động",
        "Chiếu Rạp",
        "Gay Cấn",
        "Hành Động",
        "Phiêu Lưu",
      ],
      description:
        "Mượn Rượu Đẩy Kèo lấy bối cảnh Hàn Quốc vào năm 1997, khi cuộc khủng hoảng kinh tế tài chính đang hoành hành khắp châu Á khiến Gukbo - công ty sản xuất Soju số 1 đất nước rơi vào tình trạng cận kề phá sản. In-beom (Lee Je-hoon) - chàng trai trẻ đầy tham vọng đại diện cho tập đoàn đầu tư toàn cầu Solquin đã trở về quê hương với quyết tâm thâu tóm Gukbo. Để thực hiện âm mưu này, In-beom đội lốt một chuyên gia tư vấn ngây thơ, tiếp cận Jong-rok (Yoo Hai-jin) - giám đốc vô cùng trung thành với Gukbo, đang khao khát đưa công ty quay lại thời hoàng kim. Nhưng càng đào sâu vào đế chế Gukbo, In-beom càng nhận ra đây thực sự là một cuộc chiến xảo quyệt với rất nhiều “cú twist”, dẫn đến kết cục không ngờ dành cho tất cả.",
    },
    {
      image: "/F1.jpg",
      logo: "/F1logo.jpg",
      title: "F1: The Movie",
      name: "Tay Đua F1",
      imdb: " 8.0",
      quality: "CAM",
      year: "2025",
      duration: "1h 40m",
      typeMovie: [
        "Hành Động",
        "Chiếu Rạp",
        "Gay Cấn",
        "Hành Động",
        "Phiêu Lưu",
      ],
      description:
        "Brad Pitt vào vai một cựu tay đua trở lại với đường đua Công thức 1 cùng APXGP, một đội đua giả tưởng. Đồng hành cùng Pitt trên chặng đường này là Damson Idris, vào vai người đồng đội của anh. Cùng nhau, họ sẽ đối đầu với những tay đua máu mặt trong lĩnh vực thể thao, chinh phục những đỉnh cao mới. F1 dự kiến khởi chiếu vào 27.06.2025.",
    },
    {
      image: "/johnwich.jpg",
      logo: "/jonhWichLogo.jpg",
      title: "Ballerina",
      name: "Từ Vũ Trụ John Wich: Ballerina",
      imdb: " 8.0",
      quality: "CAM",
      year: "2025",
      duration: "1h 40m",
      typeMovie: [
        "Hành Động",
        "Chiếu Rạp",
        "Gay Cấn",
        "Hành Động",
        "Phiêu Lưu",
      ],
      description:
        "Lấy bối cảnh giữa sự kiện của Sát thủ John Wick: Phần 3 – Chuẩn Bị Chiến Tranh, bộ phim Từ Vũ Trụ John Wick: Ballerina theo chân Eve Macarro (thủ vai bởi Ana de Armas) trên hành trình trả thù cho cái chết của gia đình mình, dưới sự huấn luyện của tổ chức tội phạm Ruska Roma.",
    },
    {
      image: "/megan.jpg",
      logo: "/meganlogo.jpg",
      title: "M3GAN 2.0",
      name: "M3GAN 2.0",
      imdb: " 8.0",
      quality: "CAM",
      year: "2025",
      duration: "1h 40m",
      typeMovie: [
        "Hành Động",
        "Chiếu Rạp",
        "Gay Cấn",
        "Hành Động",
        "Phiêu Lưu",
      ],
      description:
        "MEGAN 2.0 lấy bối cảnh 2 năm sau các sự kiện ở phần 1. Lúc này, Gemma phát hiện công nghệ sản xuất MEGAN đã bị đánh cắp. Kẻ gian đã tạo ra một robot AI khác với chức năng tương tự MEGAN, nhưng được trang bị sức mạnh chiến đấu 'khủng' hơn mang tên Amelia. Để 'đối đầu' với Amelia, Gemma buộc phải 'hồi sinh' và cải tiến MEGAN, hứa hẹn một trận chiến 'nảy lửa' trên màn ảnh vào năm 2025.",
    },
    {
      image: "/squid_game.jpg",
      logo: "/quidgameLogo.jpg",
      title: "Squid Game",
      name: "Trò Chơi Con Mực",
      imdb: " 8.0",
      quality: "CAM",
      year: "2025",
      duration: "1h 40m",
      typeMovie: [
        "Hành Động",
        "Chiếu Rạp",
        "Gay Cấn",
        "Hành Động",
        "Phiêu Lưu",
      ],
      description:
        "Hàng trăm người chơi kẹt tiền chấp nhận một lời mời kỳ lạ: thi đấu trong các trò chơi trẻ con. Đón chờ họ là một giải thưởng hấp dẫn – và những rủi ro chết người.",
    },
  ];
  var imageSmall: Iimage[] = [
    { image: "/small_dragon.jpg" },
    { image: "/small_bloodlines.jpg" },
    { image: "/smallF1.jpg" },
    { image: "/small_johnwick.jpg" },
    { image: "/small_megan.jpg" },
    { image: "/small_squidgame.jpg" },
  ];
  const router = useRouter();
  const notify = () => {
    toast.error("Bạn phải đăng nhập để sử dụng tính năng này", {
      position: "bottom-right",
      autoClose: 10000,
      theme: "dark",
    });
  };

  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <Image
            src={imageSmall[i].image}
            alt={`Slide ${i + 1}`}
            unoptimized
            width={800}
            height={400}
            style={{ width: "100%", height: "auto" }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsListMovie = {
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 5,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  let sliderRef = useRef<any>(null);
  // const play = () => {
  //   sliderRef.current?.slickPlay();
  // };
  // const pause = () => {
  //   sliderRef.current?.slickPause();
  // };

  const settingsComment = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="bg-[#191B24]">
      <div className="relative">
        <Slider {...settings}>
          {arrCarousel.map((item, key) => (
            <div key={key} className="relative cursor-grab">
              <div>
                <Image
                  src={item.image}
                  alt={`Slide ${key + 1}`}
                  unoptimized
                  width={800}
                  height={400}
                  className="block max-[1200px]:h-[70vh] max-[750px]:h-[50vh] w-full h-[100vh] object-cover"
                />
                <div
                  className="absolute  top-0 left-0 w-full h-full z-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(58, 48, 48, 0.25) 1px, transparent 1.5px)",
                    backgroundSize: "3px 3px",
                    opacity: 0.4,
                  }}
                />
                <div
                  className="absolute top-0 left-0 w-full h-full z-40 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to right, #191B24 0%, rgba(30,37,69,0.6) 20%, rgba(30,37,69,0.0) 60%)",
                  }}
                />
                <div
                  className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, #191B24 0%, rgba(30,37,69,0.0) 60%)",
                  }}
                />
              </div>
              <div className="absolute animate__animated animate__fadeInLeft max-[750px]:top-[40%] max-[1200px]:top-[15%] z-100 top-[20%] max-w-[600px] max-[750px]:left-[30px] left-[60px]">
                <div className="max-[750px]:hidden">
                  <Image
                    src={item.logo}
                    alt={`Slide ${key + 1}`}
                    unoptimized
                    width={800}
                    height={400}
                    className="max-w-[500px] max-[1200px]:w-[400px] max-[1200px]:h-[100px] max-h-[130px]"
                  />
                </div>
                <div className="min-[750px]:hidden">
                  <h3>{item.name}</h3>
                </div>
                <div>
                  <h2 className="text-[15px] max-[750px]:pt-[8px] max-[750px]:pb-[5px] pt-[25px] pb-[16px] text-[#f0d25c]">
                    {item.title}
                  </h2>
                </div>
                <div className="flex gap-[10px]">
                  <div>
                    <span className="bg-transparent border-[#f0d25c] text-[#f0d25c] p-[5px] text-[11px] border rounded">
                      IMDb
                      <span className="text-[14px] text-white">
                        {item.imdb}
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="bg-white p-[5px] text-black font-bold rounded text-[12px]">
                      {item.quality}
                    </span>
                  </div>
                  <div>
                    <span className="p-[4px] border border-white bg-transparent text-white rounded text-[12px]">
                      {item.year}
                    </span>
                  </div>
                  <div>
                    <span className="p-[4px] border border-white bg-transparent text-white rounded text-[12px]">
                      {item.duration}
                    </span>
                  </div>
                </div>
                <div className="mb-[24px] mt-[12px] max-[750px]:mb-[10px]">
                  {item.typeMovie.map((type, idx) => (
                    <Tag color="#ffffff10" key={idx}>
                      {type}
                    </Tag>
                  ))}
                </div>
                <div className="mb-[32px] h-[68px] max-[120px]:mb-[20px] max-[750px]:hidden">
                  <p className="line-clamp-3 leading-[1.6] text-[14px]">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center max-[750px]:gap-[20px] gap-[32px]">
                  <button className="w-[70px] cursor-pointer play h-[70px] max-[1200px]:w-[60px] max-[1200px]:h-[60px] max-[750px]:w-[40px] max-[750px]:h-[40px] rounded-full bg-gradient-to-tr items-center from-[#fece59] flex justify-center to-[#fff1cc]">
                    <FontAwesomeIcon
                      icon={faPlay}
                      style={{
                        fontSize: "28px",
                        color: "black",
                      }}
                    />
                  </button>
                  <div className="flex border-[#ffffff10] cursor-pointer h-[50px] max-[750px]:h-[40px] hover:border-white min-w-[68px] rounded-full border-[2px] items-center">
                    <button
                      onClick={notify}
                      className="h-full heat flex cursor-pointer justify-center items-center  border-r-[1px] border-[#ffffff10] min-w-[68px]"
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{
                          fontSize: "20px",
                        }}
                      />
                    </button>
                    <div className="h-full heat flex justify-center border-l-[1px] border-[#ffffff10] items-center min-w-[68px]">
                      <FontAwesomeIcon
                        icon={faInfo}
                        style={{
                          fontSize: "20px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container py-[50px] px-[50px] max-[1250px]:px-[20px] max-[750px]:px-[12px] max-w-full">
        <h2 className="text-[28px] mb-[20px] leading-[1.4] font-bold">
          Bạn đang quan tâm gì?
        </h2>
        <div className="grid max-[1600px]:grid-cols-6 max-[1120px]:grid-cols-5 max-[970px]:grid-cols-4 max-[800px]:grid-cols-3 grid-cols-7 gap-4">
          {Topic.Topic.slice(0, 6).map((item: ITopic, key) => (
            <a
              key={key}
              className="p-[20px] min-h-[145px] max-[650px]:min-h-[100px] flex flex-col items-start justify-end max-[650px]:justify-center cursor-pointer rounded-[12px] transition-transform duration-300 ease-in-out hover:-translate-y-2.5"
              style={{ backgroundColor: item.color }}
            >
              <h1 className="text-[28px] max-[1400px]:text-[20px] max-[650px]:text-[17px] pb-[12px] max-[650px]:pb-0 whitespace-normal font-bold leading-[1.3]">
                {item.topic}
              </h1>
              <span className="text-[13px] max-[650px]:hidden flex items-center">
                Xem chủ đề
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ fontSize: "13px", paddingLeft: "5px" }}
                />
              </span>
            </a>
          ))}
          <a
            onClick={() => router.push("/chu-de")}
            className="p-[20px] min-h-[112px] flex items-center justify-center cursor-pointer rounded-[12px] transition-transform duration-300 ease-in-out hover:-translate-y-2.5"
            style={{ backgroundColor: "rgb(46, 50, 69)" }}
          >
            <span className="text-[28px] max-[1400px]:text-[20px] max-[650px]:text-[17px] font-bold leading-[1.3]">
              +{Topic.Topic.length - 6}
            </span>
            <h1 className="text-[28px] max-[1400px]:text-[20px] max-[650px]:text-[17px] font-bold leading-[1.3] pl-[10px]">
              Chủ Đề
            </h1>
          </a>
        </div>
      </div>
      <div className="container px-[50px] pb-[50px] max-[1250px]:px-[20px] max-[750px]:px-[12px] max-w-full">
        <div
          className="rounded-[16px]"
          style={{
            background:
              "linear-gradient(0deg,rgba(40,43,58,0) 20%,rgba(40,43,58,1))",
          }}
        >
          <div className="grid max-[1360px]:block max-[1360px]:px-[15px] grid-cols-7 px-[32px] pt-[32px] gap-4">
            <div className=" pl-[8px] min-[1360px]:hidden pr-[24px] pb-[24px] flex justify-between items-center">
              <div className="text-[28px] max-[650px]:text-[21px] leading-[1.3] bg-[linear-gradient(235deg,_rgb(255,255,255)_30%,_rgb(103,65,150)_130%)] font-bold text-transparent bg-clip-text bg-clip-text">
                Phim Hàn Quốc mới
              </div>
              <a href="">
                <span className="text-[14px] flex items-center">
                  Xem toàn bộ
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ fontSize: "13px", paddingLeft: "5px" }}
                  />
                </span>
              </a>
            </div>
            <div className="col-span-1 max-[1360px]:hidden pl-[8px] pr-[24px] flex w-[200px] flex-col justify-center">
              <div className="text-[28px] leading-[1.3] pb-[24px] bg-[linear-gradient(235deg,_rgb(255,255,255)_30%,_rgb(103,65,150)_130%)] font-bold text-transparent bg-clip-text bg-clip-text">
                Phim Hàn Quốc mới
              </div>
              <a href="">
                <span className="text-[14px] max-[650px]:hidden flex items-center">
                  Xem toàn bộ
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ fontSize: "13px", paddingLeft: "5px" }}
                  />
                </span>
              </a>
            </div>
            <div className="col-span-6 carouselMovie">
              <Slider {...settingsListMovie}>
                {ListMovie.ListMovie.filter(
                  (item) => item.type === "korean"
                ).map((item: IMovie, key) => (
                  <ModalCard key={key} Movie={item} />
                ))}
              </Slider>
            </div>
          </div>
          <div className="grid max-[1360px]:block max-[1360px]:px-[15px] grid-cols-7 px-[32px] pt-[32px] gap-4">
            <div className=" pl-[8px] min-[1360px]:hidden pr-[24px] pb-[24px] flex justify-between items-center">
              <div className="text-[28px] max-[650px]:text-[21px] leading-[1.3] bg-[linear-gradient(235deg,_rgb(255,255,255)_30%,_rgb(247,161,11)_130%)] font-bold text-transparent bg-clip-text bg-clip-text">
                Phim Trung Quốc mới
              </div>
              <a href="">
                <span className="text-[14px] flex items-center">
                  Xem toàn bộ
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ fontSize: "13px", paddingLeft: "5px" }}
                  />
                </span>
              </a>
            </div>
            <div className="col-span-1 max-[1360px]:hidden pl-[8px] pr-[24px] flex w-[200px] flex-col justify-center">
              <div className="text-[28px] leading-[1.3] pb-[24px] bg-[linear-gradient(235deg,_rgb(255,255,255)_30%,_rgb(247,161,11)_130%)] font-bold text-transparent bg-clip-text bg-clip-text">
                Phim Trung Quốc mới
              </div>
              <a href="">
                <span className="text-[14px] max-[650px]:hidden flex items-center">
                  Xem toàn bộ
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ fontSize: "13px", paddingLeft: "5px" }}
                  />
                </span>
              </a>
            </div>
            <div className="col-span-6 carouselMovie">
              <Slider {...settingsListMovie}>
                {ListMovie.ListMovie.filter(
                  (item) => item.type === "china"
                ).map((item: IMovie, key) => (
                  <ModalCard key={key} Movie={item} />
                ))}
              </Slider>
            </div>
          </div>
          <div className="grid max-[1360px]:block max-[1360px]:px-[15px] grid-cols-7 px-[32px] pt-[32px] gap-4">
            <div className=" pl-[8px] min-[1360px]:hidden pr-[24px] pb-[24px] flex justify-between items-center">
              <div className="text-[28px] max-[650px]:text-[21px] leading-[1.3] bg-[linear-gradient(235deg,_rgb(255,255,255)_30%,_rgb(255,0,153)_130%)] font-bold text-transparent bg-clip-text bg-clip-text">
                Phim US UK mới
              </div>
              <a href="">
                <span className="text-[14px] flex items-center">
                  Xem toàn bộ
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ fontSize: "13px", paddingLeft: "5px" }}
                  />
                </span>
              </a>
            </div>
            <div className="col-span-1 max-[1360px]:hidden pl-[8px] pr-[24px] flex w-[200px] flex-col justify-center">
              <div className="text-[28px] leading-[1.3] pb-[24px] bg-[linear-gradient(235deg,_rgb(255,255,255)_30%,_rgb(255,0,153)_130%)] font-bold text-transparent bg-clip-text bg-clip-text">
                Phim US UK mới
              </div>
              <a href="">
                <span className="text-[14px] max-[650px]:hidden flex items-center">
                  Xem toàn bộ
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ fontSize: "13px", paddingLeft: "5px" }}
                  />
                </span>
              </a>
            </div>
            <div className="col-span-6 carouselMovie">
              <Slider {...settingsListMovie}>
                {ListMovie.ListMovie.filter(
                  (item) => item.type === "us-uk"
                ).map((item: IMovie, key) => (
                  <ModalCard key={key} Movie={item} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-[50px] pb-[50px] max-[1250px]:px-[20px] max-[750px]:px-[12px] max-w-full">
        <div>
          <div>
            <FontAwesomeIcon
              icon={faAward}
              style={{ fontSize: "13px", paddingLeft: "5px" }}
            />
            <h1>TOP BÌNH LUẬN</h1>
          </div>
          <div>
            <div className="slider-container">
              <Slider
                ref={(slider: any) => (sliderRef = slider)}
                {...settingsComment}
              >
                <div className="pr-[15px] group cursor-pointer">
                  <div className="relative w-[303px] h-[228px] rounded-[8px]">
                    <div className="">
                      <div className="opacity-[0.5] rounded-[8px] group-hover:opacity-[1] mask-[linear-gradient(180deg,black_0%,transparent_80%)]">
                        <Image
                          className=" w-full blur-[5px] h-full rounded-[8px]"
                          src="/koreanmovie1.jpg"
                          width={303}
                          height={207}
                          alt=""
                        />
                      </div>
                      <div className="absolute p-[20px] top-0 h-full left-0 w-full z-[20]">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <div className=" rounded-full">
                              <img
                                src="/avatar.jpg"
                                width={46}
                                className="rounded-full border-transparent border-1 group-hover:border-white w-[46] h-[46]"
                                height={46}
                                alt=""
                              />
                            </div>
                            <h1 className="text-[14px] pt-[8px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <img
                              src="/comment1.jpg"
                              className=" w-full rounded-[8px] h-auto"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[10px]">
                          <p className="whitespace-nowrap text-[13px] text-[#fff8] overflow-hidden text-ellipsis">
                            Phim hay lắm nhé
                          </p>
                          <p className="whitespace-nowrap text-[13px] text-[#fff8] overflow-hidden text-ellipsis">
                            Phim hay lắm nhé
                          </p>
                        </div>
                        <div className="flex gap-[10px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                paddingRight: "3px",
                                color: "#fff8",
                              }}
                            />
                            <span className="text-[12px] text-[#fff8]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                paddingRight: "3px",
                                color: "#fff8",
                              }}
                            />
                            <span className="text-[12px] text-[#fff8]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                paddingRight: "3px",
                                color: "#fff8",
                              }}
                            />
                            <span className="text-[12px] text-[#fff8]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    className=" w-full blur-[5px] h-full rounded-[8px]"
                    src="/koreanmovie1.jpg"
                    width={303}
                    height={207}
                    alt=""
                  />
                  <div className="absolute p-[20px] top-0 h-full left-0 w-full z-[20]">
                    <div className="flex items-center justify-between">
                      <div className=" flex flex-col justify-between items-center ">
                        <div className=" rounded-full">
                          <img
                            src="/avatar.jpg"
                            width={46}
                            className="rounded-full border-transparent border-1 group-hover:border-white w-[46] h-[46]"
                            height={46}
                            alt=""
                          />
                        </div>
                        <h1 className="text-[14px] pt-[8px] font-bold">
                          Thomas
                        </h1>
                      </div>
                      <div className="w-[50px] h-[75px]">
                        <img
                          src="/comment1.jpg"
                          className=" w-full rounded-[8px] h-auto"
                          width={50}
                          height={75}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="py-[10px]">
                      <p className="whitespace-nowrap text-[13px] text-[#fff8] overflow-hidden text-ellipsis">
                        Phim hay lắm nhé
                      </p>
                      <p className="whitespace-nowrap text-[13px] text-[#fff8] overflow-hidden text-ellipsis">
                        Phim hay lắm nhé
                      </p>
                    </div>
                    <div className="flex gap-[10px]">
                      <div>
                        <FontAwesomeIcon
                          icon={faCircleUp}
                          style={{
                            fontSize: "12px",
                            paddingRight: "3px",
                            color: "#fff8",
                          }}
                        />
                        <span className="text-[12px] text-[#fff8]">4</span>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faCircleDown}
                          style={{
                            fontSize: "12px",
                            paddingRight: "3px",
                            color: "#fff8",
                          }}
                        />
                        <span className="text-[12px] text-[#fff8]">4</span>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faMessage}
                          style={{
                            fontSize: "12px",
                            paddingRight: "3px",
                            color: "#fff8",
                          }}
                        />
                        <span className="text-[12px] text-[#fff8]">4</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
