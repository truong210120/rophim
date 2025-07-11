"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faTelegram,
  faThreads,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="bg-[#0F111A] py-[20px]">
      <div className="container px-[50px] max-[1250px]:px-[20px] max-[750px]:px-[12px] max-w-full">
        <div className="relative min-h-[400px] flex items-center max-[1120px]:justify-center justify-between">
          <div className="absolute z-1 max-[1600px]:hidden w-[750px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://www.rophim.me/images/footer-icon.svg"
              alt="Footer Image"
              className="w-full"
            />
          </div>
          <div className="block max-w-[750px]">
            <div className="inline-flex py-[8px] px-[12px] bg-[#78140f] rounded-[32px]">
              <div className="w-[20px] h-[20px]">
                <img
                  src="https://www.rophim.me/images/vn_flag.svg"
                  className="w-full h-full"
                  alt="vietnam"
                />
              </div>
              <p className="text-[14px] pl-[10px]">
                Hoàng Sa & Trường Sa là của Việt Nam!
              </p>
            </div>
            <div className="min-[1120px]:flex items-center justify-between  my-[30px] gap-[48px]">
              <div className="w-[200px] max-[1120px]:mb-[30px] max-[1120px]:mx-auto max-[1120px]:my-0">
                <img src="/logo.svg" alt="Footer Image" className="w-full" />
              </div>
              <div className="gap-4 flex items-center justify-center min-[1120px]:pl-[20px]">
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#282B3A]">
                  <FontAwesomeIcon
                    icon={faTelegram}
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#282B3A]">
                  <FontAwesomeIcon
                    icon={faDiscord}
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#282B3A]">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#282B3A]">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#282B3A]">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#282B3A]">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#282B3A]">
                  <FontAwesomeIcon
                    icon={faThreads}
                    style={{ fontSize: "18px" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#282B3A]">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ fontSize: "18px" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center max-[1120px]:justify-center text-white gap-[20px] min-[1120px]:text-[15px] text-[12px]">
              <div className="hover:text-[#FFD875] cursor-pointer">
                <p>Hỏi-Đáp</p>
              </div>
              <div className="hover:text-[#FFD875] cursor-pointer">
                <p>Chính sách bảo mật</p>
              </div>
              <div className="hover:text-[#FFD875] cursor-pointer">
                <p>Điều khoản sử dụng</p>
              </div>
              <div className="hover:text-[#FFD875] cursor-pointer">
                <p>Giới thiệu</p>
              </div>
              <div className="hover:text-[#FFD875] cursor-pointer">
                <p>Liên hệ</p>
              </div>
            </div>
            <div className="flex items-center max-[1120px]:justify-center gap-[20px] pt-[20px] text-white min-[1120px]:text-[15px] text-[12px]">
              <div className="hover:text-[#FFD875] cursor-pointer">
                <p>Dongphim</p>
              </div>
              <div className="hover:text-[#FFD875] cursor-pointer">
                <p>Ghienphim</p>
              </div>
              <div className="hover:text-[#FFD875] cursor-pointer">
                <p>Motphim</p>
              </div>
              <div className="hover:text-[#FFD875] cursor-pointer">
                <p>Subnhanh</p>
              </div>
            </div>
            <div>
              <p className="max-[1120px]:text-[12px] pt-[20px] text-[#AAAAAA] leading-6">
                RoPhim – Phim hay cả rổ - Trang xem phim online chất lượng cao
                miễn phí Vietsub, thuyết minh, lồng tiếng full HD. Kho phim mới
                khổng lồ, phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như
                Việt Nam, Hàn Quốc, Trung Quốc, Thái Lan, Nhật Bản, Âu Mỹ… đa
                dạng thể loại. Khám phá nền tảng phim trực tuyến hay nhất 2024
                chất lượng 4K!
              </p>
            </div>
            <div className="max-[1120px]:text-[12px] pt-[10px] text-[#AAAAAA] max-[1120px]:flex max-[1120px]:justify-center">
              <p>© 2024 RoPhim</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
