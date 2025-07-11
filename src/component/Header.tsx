"use client";
import {
  faBars,
  faCaretDown,
  faDownload,
  faSearch,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DropdownType from "./DropdownType";
import DropdownNation from "./DropdownNation";
import DropdownMenuMobile from "./DropdownMenuMobile";
import ModalLogin from "./ModalLogin";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [openType, setOpenType] = useState(false);
  const [openNation, setOpenNation] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openBarMenu, setOpenBarMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?query=${encodeURIComponent(search.trim())}`);
    }
  };
  const handleDripdownType = () => {
    setOpenType(!openType);
    setOpenNation(false);
  };

  const handleDripdownNation = () => {
    setOpenNation(!openNation);
    setOpenType(false);
  };

  const showModal = () => {
    setOpen(true);
  };
  return (
    <header
      className={`fixed top-0 left-0 w-full px-[16px] z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0F111A] bg-opacity-90" : "bg-transparent"
      } text-white`}
    >
      <div className="container max-w-full">
        <div
          className={`flex items-center justify-between py-3 mx-auto gap-[32px] ${
            scrolled ? "h-[70px]" : "h-[70px]"
          }`}
        >
          {openSearch === false ? (
            <div className="flex items-center">
              <div>
                {openBarMenu === true ? (
                  <a
                    onClick={() => setOpenBarMenu(!openBarMenu)}
                    className="cursor-pointer pr-[25px] min-[1360px]:hidden"
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{
                        fontSize: "20px",
                      }}
                    />
                  </a>
                ) : (
                  <a
                    onClick={() => setOpenBarMenu(!openBarMenu)}
                    className="cursor-pointer pr-[22px] min-[1360px]:hidden"
                  >
                    <FontAwesomeIcon
                      icon={faBars}
                      style={{
                        fontSize: "20px",
                      }}
                    />
                  </a>
                )}
                {openBarMenu ? <DropdownMenuMobile /> : null}
              </div>
              <a
                onClick={() => router.push("/phimhay")}
                className="cursor-pointer"
              >
                <img
                  src="/logo.svg"
                  alt="Footer Image"
                  className="h-[40px] max-w-[135px]"
                />
              </a>
            </div>
          ) : null}
          <div className="w-full max-[1360px]:hidden max-w-[368px]">
            <form className="flex w-full items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm phim, diễn viên"
                className="px-[48px] max-[1450px]:px-[15px] w-full text-[13.5px] placeholder-white text-white py-[13px] rounded-[08px] bg-[#23232b] bg-[rgba(255,255,255,.08)]  text-white focus:outline-none"
              />
            </form>
          </div>
          <div className="flex max-[1360px]:hidden items-center ml-auto gap-8">
            <div className="flex items-center gap-[8px] text-[13px] cursor-pointer">
              <div className="whitespace-nowrap">
                <a
                  onClick={() => router.push("/chu-de")}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Chủ đề
                </a>
              </div>
              <div className="whitespace-nowrap relative">
                <a
                  onClick={handleDripdownType}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Thể loại
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ fontSize: "14px", paddingLeft: "4px" }}
                  />
                </a>
                {openType ? <DropdownType /> : null}
              </div>
              <div className="whitespace-nowrap">
                <a
                  onClick={() => router.push("/phim-le")}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Phim lẻ
                </a>
              </div>
              <div className="whitespace-nowrap">
                <a
                  onClick={() => router.push("/phim-bo")}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Phim bộ
                </a>
              </div>
              <div className="whitespace-nowrap">
                <a
                  onClick={() => router.push("/xem-chung")}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  <span className="text-black bg-[#FFD875] text-[12px] rounded p-[2px] mr-[10px]">
                    New
                  </span>
                  Xem chung
                </a>
              </div>
              <div className="whitespace-nowrap relative">
                <a
                  onClick={handleDripdownNation}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Quốc gia
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ fontSize: "14px", paddingLeft: "4px" }}
                  />
                </a>
                {openNation ? <DropdownNation /> : null}
              </div>
              <div className="whitespace-nowrap">
                <a
                  onClick={() => router.push("/dien-vien")}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Diễn viên
                </a>
              </div>
              <div className="whitespace-nowrap">
                <a
                  onClick={() => router.push("/lich-chieu")}
                  className="hover:text-[#FFD875] px-[8px]"
                >
                  Lịch chiếu
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FontAwesomeIcon
                icon={faDownload}
                style={{
                  fontSize: "20px",
                  paddingRight: "12px",
                  color: "#FFD875",
                }}
              />
              <div>
                <p className="text-[12px] whitespace-nowrap text-[#f8f9fa]">
                  Tải ứng dụng
                </p>
                <span className="text-[13px] font-bold">RoPhim</span>
              </div>
            </div>
            <a
              onClick={showModal}
              className="flex px-[12px]  py-[8px] rounded-full bg-[#fff] items-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  fontSize: "14px",
                  paddingLeft: "4px",
                  color: "#191B24",
                }}
              />

              <p className="text-[14px] whitespace-nowrap font-bold text-[#191B24]">
                Thành viên
              </p>
            </a>
          </div>
          <div
            className={`hidden max-[1360px]:block absolute z-100 ${
              openSearch === true ? "left-[12px]" : ""
            } right-[12px] top-[12px]`}
          >
            <div className="flex items-center justify-between">
              <form
                className={`flex  ${
                  openSearch === true
                    ? "max-[1360px]:block"
                    : "max-[1360px]:hidden"
                } w-full items-center`}
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Tìm kiếm phim, diễn viên"
                  className="px-[48px] max-[1450px]:px-[15px] w-full text-[13.5px] placeholder-white text-white py-[13px] rounded-[08px] bg-[#23232b] bg-[rgba(255,255,255,.08)]  text-white focus:outline-none"
                />
              </form>
              <div className="ml-auto h-[46px] flex items-center">
                {openSearch === true ? (
                  <a
                    onClick={() => setOpenSearch(!openSearch)}
                    className="cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{
                        fontSize: "25px",
                        paddingLeft: "10px",
                      }}
                    />
                  </a>
                ) : (
                  <a
                    onClick={() => setOpenSearch(!openSearch)}
                    className="cursor-pointer"
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      style={{
                        fontSize: "18px",
                        paddingLeft: "10px",
                      }}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalLogin setOpen={setOpen} open={open} />
    </header>
  );
}
