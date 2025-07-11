"use client";
interface ITypeMovie {
  typeName: string;
  typeDirec: string;
}

export default function DropdownType() {
  var arrType: ITypeMovie[] = [
    { typeName: "Anime", typeDirec: "anime" },
    { typeName: "Chuyển Thể", typeDirec: "chuyen-the" },
    {
      typeName: "Chương Trình Truyền Hình",
      typeDirec: "chuong-trinh-truyen-hinh",
    },
    { typeName: "Cổ Trang", typeDirec: "co-trang" },
    { typeName: "Disney", typeDirec: "disney" },
    { typeName: "Gỉa Tưởng", typeDirec: "gia-tuong" },
    { typeName: "Hành Động", typeDirec: "hanh-dong" },
    { typeName: "Kinh Dị", typeDirec: "kinh-di" },
    { typeName: "Miền Viễn Tây", typeDirec: "mien-vien-tay" },
    { typeName: "Phép Thuật", typeDirec: "phep-thuat" },
    { typeName: "Tâm Lý", typeDirec: "tam-ly" },
    { typeName: "Thể Thao", typeDirec: "the-thao" },
    { typeName: "Võ Thuật", typeDirec: "vo-thuat" },
    { typeName: "Bí Ẩn", typeDirec: "bi-an" },
    { typeName: "Chính Kịch", typeDirec: "chinh-tri" },
    { typeName: "Cung Đấu", typeDirec: "cung-dau" },
    { typeName: "Cổ Tích", typeDirec: "co-tich" },
    { typeName: "Gây Cấn", typeDirec: "gay-can" },
    { typeName: "Hoàng Cung", typeDirec: "bi-an" },
    { typeName: "Hình Sự", typeDirec: "bi-an" },
    { typeName: "Kinh Điển", typeDirec: "bi-an" },
    { typeName: "Lãng Mạn", typeDirec: "lang-man" },
    { typeName: "Nghề Nghiệp", typeDirec: "nghe-nghiep" },
    { typeName: "Siêu Anh Hùng", typeDirec: "sieu-anh-hung" },
    { typeName: "Truyền Hình Thực Tế", typeDirec: "truyen-hinh-thuc-te" },
    { typeName: "Tình Cảm", typeDirec: "tinh-cam" },
    { typeName: "Chính Luận", typeDirec: "chien-tranh" },
    { typeName: "Cuối Tuần", typeDirec: "xuyen-khong" },
    { typeName: "Cổ Điển", typeDirec: "co-dien" },
    { typeName: "Gia Đình", typeDirec: "gia-dinh" },
    { typeName: "Học Đường", typeDirec: "hoc-duong" },
    { typeName: "Kịch Nói", typeDirec: "xuyen-khong" },
    { typeName: "Lịch Sử", typeDirec: "lich-su" },
    { typeName: "Nhạc Kịch", typeDirec: "nhac-kich" },
    { typeName: "Thiếu Nhi", typeDirec: "thieu-nhi" },
    { typeName: "Tuổi Trẻ", typeDirec: "tuoi-tre" },
    { typeName: "Tập Luyện", typeDirec: "tap-luyen" },
    { typeName: "Đau Thương", typeDirec: "dau-thuong" },
    { typeName: "Chiếu Rạp", typeDirec: "chieu-rap" },
    { typeName: "Chiến Tranh", typeDirec: "chien-tranh" },
    { typeName: "Cách Mạng", typeDirec: "cach-mang" },
    { typeName: "DC", typeDirec: "dc" },
    { typeName: "Giáng Sinh", typeDirec: "giang-sinh" },
    { typeName: "Hài", typeDirec: "hai" },
    { typeName: "Khoa Học", typeDirec: "khoa-hoc" },
    { typeName: "Marvel", typeDirec: "marvel" },
    { typeName: "Phiêu Lưu", typeDirec: "phieu-luu" },
    { typeName: "Thần Thoại", typeDirec: "than-thoai" },
    { typeName: "Tài Liệu", typeDirec: "tai-lieu" },
    { typeName: "Viễn Tưởng", typeDirec: "vien-tuong" },
    { typeName: "Đời Thường", typeDirec: "doi-thuong" },
    { typeName: "Ma Thái Lan", typeDirec: "ma-thai-lan" },
  ];
  return (
    <div className="absolute mt-[16px] left-0 bg-[rgba(15,17,26,.95)] rounded-[8px] shadow-lg z-50">
      <div className="grid grid-flow-col p-[8px] grid-rows-13">
        {arrType.map((item, index) => (
          <a
            key={index}
            href={`/the-loai/${item.typeDirec}`}
            className="block w-[140px] px-4 py-2 text-[13px] black whitespace-nowrap overflow-hidden text-ellipsis text-sm text-white hover:bg-[#FFD875] hover:text-black"
          >
            {item.typeName}
          </a>
        ))}
      </div>
    </div>
  );
}
