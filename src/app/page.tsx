"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/phimhay"); // Navigates to the /about route
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="relative w-full bg-[url('/home-background.jpg')] bg-cover bg-center">
      <div className="relative z-10 flex items-center justify-center">
        <div className="container mx-auto px-4 text-white text-center xl:mt-[300px] mt-[100px] xl:mb-[128px] lg:mb-[90px] mb-[70px]">
          <div className="inset-0 bg-[#1B1B24] rounded-[40px] flex flex-col items-center justify-center gap-[40px] 2xl:py-[96px] xl:py-[80px] lg:py-[64px] md:py-[48px] sm:py-[40px] py-[50px] 2xl:px-[128px] xl:px-[96px] lg:px-[72px] md:px-[48px] sm:px-[40px] px-[46px] ">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="object-cover 2xl:w-[260px] xl:w-[250px] lg:w-[230px] md:w-[220px] sm:w-[200px] w-[180px]"
              width={260}
              height={60}
            />
            <p className="2xl:text-[41.6px] xl:text-[40px] lg:text-[36px] md:text-[32px] sm:text-[28px] text-[24px] text-center">
              Xem Phim Miễn Phí Cực Nhanh, Chất Lượng Cao Và Cập Nhật Liên Tục
            </p>
            <button
              onClick={handleNavigation}
              className="flex sm:px-[32px] max-[650px]:w-full flex justify-center sm:py-[15.2px] py-[15px] cursor-pointer text-[20px] font-bold items-center gap-2 text-black bg-gradient-to-tr rounded-[32px] from-[#fecf59] to-[#fff1cc]"
            >
              Xem Ngay{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#14161E]">
        <div className="container mx-auto 2xl:px-[300px] xl:px-[200px] px-4 ">
          <h5 className="leading-7 text-[#cfcfcf]">
            Trong kỷ nguyên số ngày nay, việc xem phim miễn phí trực tuyến đã
            trở thành nhu cầu giải trí không thể thiếu. Với sự bùng nổ của các
            nền tảng phát trực tuyến phim, RoPhim nổi bật lên như một trang web
            xem phim miễn phí uy tín, mang đến cho khán giả hàng loạt tác phẩm
            điện ảnh chất lượng cao từ mọi thể loại. Hãy cùng khám phá những
            điểm độc đáo khiến RoPhim trở thành lựa chọn hàng đầu cho những ai
            yêu thích phim online!
          </h5>
          <h2 className="text-[#FFD875] text-[24.64px] font-semibold py-[24px]">
            Giới thiệu về RoPhim – Phim hay cả rổ - Nền tảng xem online miễn phí
            mới 2024
          </h2>
          <h5 className="text-[#cfcfcf] leading-7">
            <span className=" font-semibold">RoPhim</span>, một nền tảng xem
            phim trực tuyến hoàn toàn miễn phí, đã không ngừng phát triển để đáp
            ứng nhu cầu giải trí của hàng triệu người dùng. Với giao diện dễ sử
            dụng và kho phim phong phú,{" "}
            <span className=" font-semibold">RoPhim</span> không chỉ thu hút
            người dùng nhờ vào việc{" "}
            <span className=" font-semibold">xem phim miễn phí trực tuyến</span>
            , mà còn nhờ vào chất lượng video đỉnh cao. Từ phim HD đến 4K, tất
            cả đều có tại đây, giúp bạn tận hưởng từng khoảnh khắc giải trí
            tuyệt vời.
          </h5>
          <h2 className="text-[24.64px] font-semibold pt-[60px] pb-[20px]">
            Trang web xem phim chất lượng HD 4K duy nhất tại Việt Nam
          </h2>
          <h5 className="text-[#cfcfcf] leading-7">
            <span className="inline font-semibold">RoPhim</span>, không chỉ dừng
            lại ở việc mang đến những bộ phim miễn phí. Một trong những lý do
            trang web này trở thành lựa chọn hàng đầu là nhờ vào chất lượng hình
            ảnh vượt trội, đặc biệt là những bộ{" "}
            <span className="inline font-semibold">phim HD</span> và{" "}
            <span className="inline font-semibold">phim 4K</span>. Điều này giúp
            người dùng cảm nhận được mọi chi tiết trong từng khung hình với độ
            sắc nét cao, không khác gì trải nghiệm rạp chiếu phim tại gia.
          </h5>
          <h2 className="text-[24.64px] font-semibold pt-[60px] pb-[20px]">
            Điểm nổi bật của RoPhim
          </h2>
          <p className="text-[#cfcfcf] leading-7">
            <span className="inline font-semibold">RoPhim</span> có nhiều đặc
            điểm nổi bật mà không phải trang web nào cũng có thể cung cấp. Hãy
            điểm qua một vài yếu tố đã giúp
          </p>
          <p className="text-[#cfcfcf] leading-7">
            <span className="inline font-semibold">RoPhim</span> vươn lên trở
            thành trang web xem phim miễn phí hàng đầu tại Việt Nam:
          </p>

          <h2 className="text-[24.64px] font-semibold pt-[60px] pb-[20px]">
            Kết luận
          </h2>
          <div className="text-[#cfcfcf] leading-7">
            Với những ưu điểm vượt trội như kho phim đa dạng, chất lượng hình
            ảnh và âm thanh tuyệt vời, giao diện thân thiện và cập nhật thường
            xuyên, <span className="inline font-semibold">RoPhim</span> đã khẳng
            định được vị thế của mình trong lòng người yêu điện ảnh Việt Nam.
            Đây là nơi lý tưởng để bạn thưởng thức những bộ phim yêu thích mà
            không cần lo lắng về chi phí. Hãy truy cập{" "}
            <span className="inline font-semibold">RoPhim</span> ngay hôm nay để
            trải nghiệm những giây phút giải trí tuyệt vời nhất.
          </div>
        </div>
      </div>
    </div>
  );
}
