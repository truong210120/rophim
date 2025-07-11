"use client";
interface INationMovie {
  nationName: string;
  nationDirec: string;
}

export default function DropdownNation() {
  var arrType: INationMovie[] = [
    { nationName: "Mỹ", nationDirec: "my" },
    { nationName: "Hàn Quốc", nationDirec: "han-quoc" },
    { nationName: "Trung Quốc", nationDirec: "trung-quoc" },
    { nationName: "Việt Nam", nationDirec: "viet-nam" },
    { nationName: "Thái Lan", nationDirec: "thai-lan" },
    { nationName: "Nhật Bản", nationDirec: "nhat-ban" },
    { nationName: "Tây Ban Nha", nationDirec: "tay-ban-nha" },
    { nationName: "Anh", nationDirec: "anh" },
    { nationName: "Ý", nationDirec: "y" },
    { nationName: "Đức", nationDirec: "duc" },
    { nationName: "Hồng Kông", nationDirec: "hong-kong" },
    { nationName: "Canada", nationDirec: "canada" },
    { nationName: "Úc", nationDirec: "uc" },
  ];
  return (
    <div className="absolute mt-[16px] left-0 bg-[rgba(15,17,26,.95)] rounded-[8px] shadow-lg z-50">
      <div className="grid grid-flow-col p-[8px] grid-rows-13">
        {arrType.map((item, index) => (
          <a
            key={index}
            href={`/quoc-gia/${item.nationDirec}`}
            className="block w-[140px] px-4 py-2 text-[13px] black whitespace-nowrap overflow-hidden text-ellipsis text-sm text-white hover:bg-[#FFD875] hover:text-black"
          >
            {item.nationName}
          </a>
        ))}
      </div>
    </div>
  );
}
