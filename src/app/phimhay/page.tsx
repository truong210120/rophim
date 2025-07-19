"use client";
import {
  faAngleRight,
  faAward,
  faBolt,
  faChevronLeft,
  faChevronRight,
  faCircleDown,
  faCircleUp,
  faClapperboard,
  faFolderPlus,
  faHeart,
  faHeartCircleCheck,
  faInfo,
  faMessage,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tag } from "antd";
import Image from "next/image";
import Slider from "react-slick";
import { toast } from "react-toastify";
import Topic from "@/data/phimhay";
import ListMovie from "@/data/phimhay";
import { useRouter } from "next/navigation";
import { IMovie, IMovieNew } from "../interface";
import ModalCard from "@/component/ModalCard";
import { useRef } from "react";
import CardMovieTrend from "@/component/CardMovieTrend";
import MoviewNew from "@/component/MovieNew";
import Title from "../element/title";
import MoviePage from "@/component/MoviePage";
import MovieTheater from "@/component/MovieTheater";
interface Iimage {
  image: string;
}
interface ITopic {
  topic: string;
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
    slidesToShow: 4,
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
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const prev = () => {
    console.log("prev", sliderRef.current?.slickPrev());
    sliderRef.current?.slickPrev();
  };

  const settingsComment = {
    infinite: false,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const settingsCommentList = {
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    vertical: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settingsMovieTheater = {
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const settingMovieNews = {
    infinite: false,
    slidesToShow: 8,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
  const settingsTop10Movie = {
    infinite: false,
    slidesToShow: 6,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
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
                <div className="mb-[24px] max-[750px]:hidden mt-[12px] max-[750px]:mb-[10px]">
                  {item.typeMovie.map((type, idx) => (
                    <Tag color="#ffffff10" key={idx}>
                      {type}
                    </Tag>
                  ))}
                </div>
                <div className="mb-[24px] mt-[12px] max-[750px]:mb-[10px]">
                  {item.typeMovie.slice(0, 3).map((type, idx) => (
                    <Tag color="#ffffff10" key={idx}>
                      {type}
                    </Tag>
                  ))}
                  <Tag>+{item.typeMovie.length - 3}</Tag>
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
        <div className="border-[#fff2] border-[1px] rounded-[16px]">
          <div className="pt-[24px] border-b-[1px] relative border-b-[#fff2] px-[32px] max-[650px]:px-[16px]">
            <div className="flex  items-center">
              <FontAwesomeIcon
                icon={faAward}
                style={{
                  fontSize: "16px",
                  paddingLeft: "5px",
                  color: "#FFD875",
                }}
              />
              <h1 className="text-[16px] font-bold pl-[10px] text-white">
                TOP BÌNH LUẬN
              </h1>
            </div>
            <div className="py-[20px]">
              <div className="slider-container">
                <button
                  onClick={prev}
                  className="w-[40px] max-[450px]:hidden bg-[#191B24] absolute left-[-20] top-[40%] cursor-pointer flex justify-center items-center h-[40px] border-[1px] border-[#fff2] rounded-full"
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    style={{
                      fontSize: "13px",
                      color: "white",
                    }}
                  />
                </button>
                <Slider ref={sliderRef} {...settingsComment}>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[5px] cursor-pointer group">
                    <div className="relative  rounded h-full min-h-[230px] w-full mr-[20px]">
                      <Image
                        width={303}
                        height={230}
                        className="w-full absolute rounded-[15px] [mask-image:linear-gradient(180deg,_black_0%,_transparent_80%)] blur-[5px] opacity-[0.5] group-hover:opacity-[0.9] [mask-repeat:no-repeat] top-0 object-cover left-0 right-0 bottom-0 h-full"
                        src="/comment1.jpg"
                        alt=""
                      />
                      <div className="absolute  p-[20px] top-0 left-0 w-full z-100">
                        <div className="flex items-center justify-between">
                          <div className=" flex flex-col justify-between items-center ">
                            <img
                              src="/avatar.jpg"
                              width={46}
                              className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                              height={46}
                              alt=""
                            />
                            <h1 className="text-[14px] text-white pt-[15px] font-bold">
                              Thomas
                            </h1>
                          </div>
                          <div className="w-[50px] h-[75px]">
                            <Image
                              src="/comment1.jpg"
                              className=" w-full rounded h-full"
                              width={50}
                              height={75}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="py-[8px]">
                          <p className="text-[#fff8] text-[13px] leading-6 line-clamp-2">
                            {" "}
                            Phim hay quá đi à Phim hay quá đi àPhim hay quá đi
                            đi àPhim hay quá điàPhim hay quá đi à Phim hay quá
                            đi à Phim hay quá đi à
                          </p>
                        </div>
                        <div className="flex gap-4 pt-[15px]">
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleUp}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faCircleDown}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faMessage}
                              style={{
                                fontSize: "12px",
                                color: "#fff8",
                                paddingRight: "5px",
                              }}
                            />
                            <span className="text-[#fff8] text-[12px]">4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                <button
                  onClick={next}
                  className="w-[40px] max-[450px]:hidden bg-[#191B24] absolute right-[-20px] top-[40%] cursor-pointer flex justify-center items-center h-[40px] border-[1px] border-[#fff2] rounded-full"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{
                      fontSize: "13px",
                      color: "white",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex max-[650px]:block ">
            <div className="border-r-[1px] border-r-[#fff2] px-[32px] max-[650px]:border-b-[1px] max-[650px]:border-[#fff2] max-[1600px]:grow max-[650px]:w-full max-[650px]:border-r-0  max-[1600px]:w-[320px] py-[24px] flex-none w-[420px]">
              <div className="flex pb-[24px] items-center">
                <FontAwesomeIcon
                  icon={faClapperboard}
                  style={{
                    fontSize: "16px",
                    paddingLeft: "5px",
                    color: "#FFD875",
                  }}
                />
                <h1 className="text-[16px] font-bold pl-[10px] text-white">
                  SÔI NỔI NHẤT
                </h1>
              </div>
              <div className="">
                {ListMovie.ListMovie.slice(0, 5).map((item, key) => (
                  <div key={key}>
                    <CardMovieTrend index={key} Movie={item} />
                  </div>
                ))}
                <button className="text-[#fff5] cursor-pointer text-[12px] hover:text-[#f0d25c]">
                  Xem thêm
                </button>
              </div>
            </div>
            <div className="border-r-[1px] border-r-[#fff2] px-[32px] max-[1600px]:grow max-[650px]:w-full max-[650px]:border-r-0  max-[1600px]:w-[320px] py-[24px] flex-none w-[420px]">
              <div className="flex pb-[24px] items-center">
                <FontAwesomeIcon
                  icon={faHeartCircleCheck}
                  style={{
                    fontSize: "16px",
                    paddingLeft: "5px",
                    color: "#FFD875",
                  }}
                />
                <h1 className="text-[16px] font-bold pl-[10px] text-white">
                  YÊU THÍCH NHẤT
                </h1>
              </div>
              <div className="">
                {ListMovie.ListMovie.slice(4, 9).map((item, key) => (
                  <div key={key}>
                    <CardMovieTrend index={key} Movie={item} />
                  </div>
                ))}
                <button className="text-[#fff5] cursor-pointer text-[12px] hover:text-[#f0d25c]">
                  Xem thêm
                </button>
              </div>
            </div>
            <div className="border-r-[1px] border-r-[#fff2] max-[1600px]:hidden px-[32px] py-[24px] flex-none w-[320px]">
              <div className="flex pb-[24px] items-center">
                <FontAwesomeIcon
                  icon={faFolderPlus}
                  style={{
                    fontSize: "16px",
                    paddingLeft: "5px",
                    color: "#FFD875",
                  }}
                />
                <h1 className="text-[16px] font-bold pl-[10px] text-white">
                  THỂ LOẠI HOT
                </h1>
              </div>
              <div className="">
                {Topic.Topic.slice(0, 5).map((item, key) => (
                  <div key={key} className="h-[50px] flex items-center">
                    <div>
                      <div className="flex gap-[20px] items-center">
                        <span className="text-[#fff5] font-bold">
                          {key + 1}.
                        </span>
                        <span className="pb-[15px] text-[#fff5] font-bold">
                          _
                        </span>
                        <button
                          style={{ background: `${item.color}` }}
                          className="text-white text-[13px] px-[14px] cursor-pointer hover:text-[#FFD875] rounded-full py-[3px]"
                        >
                          {item.topic}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="text-[#fff5] cursor-pointer text-[12px] hover:text-[#f0d25c]">
                  Xem thêm
                </button>
              </div>
            </div>
            <div className=" px-[32px] max-[995px]:hidden  py-[20px] grow w-[300px]">
              <div className="flex pb-[24px] items-center">
                <FontAwesomeIcon
                  icon={faBolt}
                  style={{
                    fontSize: "16px",
                    paddingLeft: "5px",
                    color: "#FFD875",
                  }}
                />
                <h1 className="text-[16px] font-bold pl-[10px] text-white">
                  BÌNH LUẬN MỚI
                </h1>
              </div>
              <div className="">
                <Slider {...settingsCommentList}>
                  <div className="my-[2px]">
                    <div className="flex bg-black rounded-[10px] px-[10px] py-[10px] items-center gap-[15px]">
                      <div>
                        <img
                          src="/avatar.jpg"
                          width={46}
                          className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                          height={46}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="text-[12px] pb-[2px] flex items-center gap-[10px]">
                          <span className="text-white">Thomas</span>
                          <p className=" text-[#aaa]">Phim vớ vẩn quá</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <FontAwesomeIcon
                            icon={faPlay}
                            style={{
                              fontSize: "10px",
                              paddingLeft: "5px",
                              color: "#FFD875",
                            }}
                          />
                          <p className="whitespace-nowrap cursor-pointer  overflow-hidden text-ellipsis text-[#fff5] text-[12px]">
                            Ngưu lang chức nữ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-[2px]">
                    <div className="flex bg-black rounded-[10px] px-[10px] py-[10px] items-center gap-[15px]">
                      <div>
                        <img
                          src="/avatar.jpg"
                          width={46}
                          className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                          height={46}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="text-[12px] pb-[2px] flex items-center gap-[10px]">
                          <span className="text-white">Thomas</span>
                          <p className=" text-[#aaa]">Phim vớ vẩn quá</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <FontAwesomeIcon
                            icon={faPlay}
                            style={{
                              fontSize: "10px",
                              paddingLeft: "5px",
                              color: "#FFD875",
                            }}
                          />
                          <p className="whitespace-nowrap cursor-pointer  overflow-hidden text-ellipsis text-[#fff5] text-[12px]">
                            Ngưu lang chức nữ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-[2px]">
                    <div className="flex bg-black rounded-[10px] px-[10px] py-[10px] items-center gap-[15px]">
                      <div>
                        <img
                          src="/avatar.jpg"
                          width={46}
                          className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                          height={46}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="text-[12px] pb-[2px] flex items-center gap-[10px]">
                          <span className="text-white">Thomas</span>
                          <p className=" text-[#aaa]">Phim vớ vẩn quá</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <FontAwesomeIcon
                            icon={faPlay}
                            style={{
                              fontSize: "10px",
                              paddingLeft: "5px",
                              color: "#FFD875",
                            }}
                          />
                          <p className="whitespace-nowrap cursor-pointer  overflow-hidden text-ellipsis text-[#fff5] text-[12px]">
                            Ngưu lang chức nữ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-[2px]">
                    <div className="flex bg-black rounded-[10px] px-[10px] py-[10px] items-center gap-[15px]">
                      <div>
                        <img
                          src="/avatar.jpg"
                          width={46}
                          className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                          height={46}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="text-[12px] pb-[2px] flex items-center gap-[10px]">
                          <span className="text-white">Thomas</span>
                          <p className=" text-[#aaa]">Phim vớ vẩn quá</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <FontAwesomeIcon
                            icon={faPlay}
                            style={{
                              fontSize: "10px",
                              paddingLeft: "5px",
                              color: "#FFD875",
                            }}
                          />
                          <p className="whitespace-nowrap cursor-pointer  overflow-hidden text-ellipsis text-[#fff5] text-[12px]">
                            Ngưu lang chức nữ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-[2px]">
                    <div className="flex bg-black rounded-[10px] px-[10px] py-[10px] items-center gap-[15px]">
                      <div>
                        <img
                          src="/avatar.jpg"
                          width={46}
                          className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                          height={46}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="text-[12px] pb-[2px] flex items-center gap-[10px]">
                          <span className="text-white">Thomas</span>
                          <p className=" text-[#aaa]">Phim vớ vẩn quá</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <FontAwesomeIcon
                            icon={faPlay}
                            style={{
                              fontSize: "10px",
                              paddingLeft: "5px",
                              color: "#FFD875",
                            }}
                          />
                          <p className="whitespace-nowrap cursor-pointer  overflow-hidden text-ellipsis text-[#fff5] text-[12px]">
                            Ngưu lang chức nữ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="my-[2px]">
                    <div className="flex bg-black rounded-[10px] px-[10px] py-[10px] items-center gap-[15px]">
                      <div>
                        <img
                          src="/avatar.jpg"
                          width={46}
                          className="rounded-full border-transparent border-[1px] group-hover:border-white group-hover:border-[1px] w-[46] h-[46]"
                          height={46}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="text-[12px] pb-[2px] flex items-center gap-[10px]">
                          <span className="text-white">Thomas</span>
                          <p className=" text-[#aaa]">Phim vớ vẩn quá</p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <FontAwesomeIcon
                            icon={faPlay}
                            style={{
                              fontSize: "10px",
                              paddingLeft: "5px",
                              color: "#FFD875",
                            }}
                          />
                          <p className="whitespace-nowrap cursor-pointer  overflow-hidden text-ellipsis text-[#fff5] text-[12px]">
                            Ngưu lang chức nữ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-[50px] pb-[50px] max-[1250px]:px-[20px] max-[750px]:px-[12px] max-w-full">
        <Title title="Phim Điện Ảnh Mới Cóong" />
        <div>
          <Slider {...settingMovieNews}>
            {ListMovie.ListNewMovie.map((item: IMovieNew, key) => (
              <MoviewNew key={key} Movie={item} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="container px-[50px] pb-[50px] max-[1250px]:px-[20px] max-[750px]:px-[12px] max-w-full">
        <Title title="Top 10 Phim Bộ Hôm Nay" />
        <div>
          <Slider {...settingsTop10Movie}>
            {ListMovie.ListNewMovie.slice(0, 10).map((item: IMovieNew, key) => (
              <MoviePage index={key} key={key} Movie={item} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="container px-[50px] pb-[50px] max-[1250px]:px-[20px] max-[750px]:px-[12px] max-w-full">
        <Title title="Mãn Nhãn Với Phim Chiếu Rạp" />
        <div>
          <Slider {...settingsMovieTheater}>
            {ListMovie.ListNewMovie.slice(0, 10).map((item: IMovieNew, key) => (
              <MovieTheater key={key} Movie={item} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="container px-[50px] pb-[50px] max-[1250px]:px-[20px] max-[750px]:px-[12px] max-w-full">
        <Title title="Phim Sắp Tới Rổ" />
        <Slider {...settingsTop10Movie}>
          {ListMovie.ListMovie.slice(3, 10).map((item: IMovie, key) => (
            <div key={key} className="cursor-pointer pr-[15px]">
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-[10px] h-full"
                  width={303}
                  height={230}
                />
                <span className="absolute bottom-0 left-[20px] rounded-t-[6px] px-[10px] font-bold py-[4px] bg-white text-[#000] text-[11px]">
                  Sắp chiếu
                </span>
              </div>
              <div className="px-[20px] py-[16px]">
                <h1 className="text-[14px] hover:text-[#FFD875] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </h1>
                <h1 className="text-[14px] text-[#aaa]">{item.subTitle}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
