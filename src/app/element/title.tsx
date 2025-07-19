import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ITitle {
  title: string;
}
export default function Title(title: ITitle) {
  return (
    <div className="flex items-center mb-[20px]">
      <h2 className="text-[28px] max-[1250px]:text-[20px] pr-[20px] text-white  leading-[1.4] font-bold">
        {title.title}
      </h2>
      <div className="group">
        <div className="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out group-hover:px-[15px] px-[11px] h-[30px] rounded-full border-[1px] border-[#fff5]">
          <span className="text-[11px] group-hover:block group-hover:pr-[10px] hidden text-[#FFD875]">
            Xem thêm
          </span>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{
              fontSize: "12px",
              color: "#FFD875",
            }}
          />
        </div>
      </div>
    </div>
  );
}
