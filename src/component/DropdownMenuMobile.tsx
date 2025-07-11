import {
  faCaretDown,
  faDownload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DropdownType from "./DropdownType";
import DropdownNation from "./DropdownNation";
import ModalLogin from "./ModalLogin";

export default function DropdownMenuMobile() {
  const router = useRouter();
  const [openType, setOpenType] = useState(false);
  const [openNation, setOpenNation] = useState(false);
  const [open, setOpen] = useState(false);
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
    <div className="absolute min-[1360px]:hidden mt-[16px] p-[24px] max-w-[360px] w-full left-[10px] bg-[rgba(59,73,135,.95)] rounded-[8px] shadow-lg z-50">
      <div>
        <button
          onClick={showModal}
          className="flex px-[12px] w-full justify-center py-[8px] rounded-full bg-[#fff] items-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faUser}
            style={{
              fontSize: "13px",
              paddingLeft: "4px",
              color: "#191B24",
            }}
          />
          <p className="text-[13px] whitespace-nowrap font-bold text-[#191B24]">
            Thành viên
          </p>
        </button>
      </div>
      <div className="flex mt-[10px] p-[8px] items-center gap-2 bg-[#ffffff11] rounded-[10px] cursor-pointer">
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
      <div className="ml-auto">
        <div className="grid grid-flow-col gap-[8px] grid-rows-4 text-[13px] cursor-pointer">
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => router.push("/chu-de")}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Chủ đề
            </a>
          </div>
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => router.push("/phim-le")}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Phim lẻ
            </a>
          </div>
          <div className="whitespace-nowrap py-[8px]">
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
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => router.push("/dien-vien")}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Diễn viên
            </a>
          </div>
          <div className="whitespace-nowrap py-[8px] relative">
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
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => router.push("/phim-bo")}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Phim bộ
            </a>
          </div>
          <div className="whitespace-nowrap py-[8px] relative">
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
          <div className="whitespace-nowrap py-[8px]">
            <a
              onClick={() => router.push("/lich-chieu")}
              className="hover:text-[#FFD875] px-[8px]"
            >
              Lịch chiếu
            </a>
          </div>
        </div>
      </div>
      <ModalLogin setOpen={setOpen} open={open} />
    </div>
  );
}
