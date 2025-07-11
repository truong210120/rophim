import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import Turnstile from "react-cloudflare-turnstile";

type OpenModal = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
  openLogin?: () => void;
};

export default function ModalRegister({
  setOpen,
  setClose,
  open,
  openLogin,
}: OpenModal) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [rePass, setRePass] = useState("");
  const [passWord, setPassWord] = useState("");
  const [cfToken, setCfToken] = useState<string | null>(null);
  const [showTurnstile, setShowTurnstile] = useState(false);

  useEffect(() => {
    if (open) {
      setShowTurnstile(false);
      setTimeout(() => setShowTurnstile(true), 0); // Force remount Turnstile
      setCfToken(null); // Reset token
    }
  }, [open]);
  const handleCancel = () => {
    setOpen(false);
    setClose(false);
    setShowTurnstile(false);
  };

  const modalStyles = {
    mask: {
      background: "#131727",
      opacity: 0.9,
    },
    content: {
      background: "#131727",
    },
    body: {
      background: "#131727",
    },
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cfToken) {
      alert("Vui lòng xác minh Cloudflare!");
      return;
    }
    // Lấy dữ liệu form
    const formData = {
      email,
      passWord,
      name,
      rePass,
      cfToken,
    };
    console.log("Form data:", formData);
    console.log("showTurnstile", e);
  };
  return (
    <div>
      <Modal
        footer={false}
        open={open}
        centered
        onCancel={handleCancel}
        styles={modalStyles}
        width={860}
      >
        <div className="flex w-full h-[540px]">
          <div className="w-1/2 h-full max-[800px]:hidden">
            <img
              src="/rophim-login.jpg"
              alt="register"
              className="w-full h-full object-fill rounded-l-[8px]"
            />
          </div>
          <div className="w-1/2 h-full max-[800px]:w-full flex flex-col justify-center p-[64px] bg-[#1E2545] rounded-r-[8px]">
            <h1 className="text-[20px] text-white font-[500] pb-[16px]">
              Tạo Tài Khoản Mới
            </h1>
            <p className="mb-[24px] text-[#AAAAAA]">
              Bạn đã có tài khoản,
              <a
                onClick={() => {
                  if (openLogin) openLogin();
                }}
              >
                <span className="text-[#FFD875]"> đăng nhập</span>
              </a>
            </p>
            <form className="w-full">
              <input
                type="text"
                id="nameF"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tên hiển thị"
                className="px-[15px] mb-[10px] border border-[#ffffff10] w-full text-[13.5px] placeholder-white text-white py-[13px] rounded-[8px] bg-transparent focus:outline-none"
              />
              <input
                type="text"
                id="emailF"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="px-[15px] mb-[10px] border border-[#ffffff10] w-full text-[13.5px] placeholder-white text-white py-[13px] rounded-[8px] bg-transparent focus:outline-none"
              />
              <input
                type="password"
                id="passF"
                value={passWord}
                onChange={(e) => setPassWord(e.target.value)}
                placeholder="Mật khẩu"
                className="px-[15px] mb-[10px] border border-[#ffffff10] w-full text-[13.5px] placeholder-white text-white py-[13px] rounded-[8px] bg-transparent focus:outline-none"
              />
              <input
                type="password"
                id="rePassF"
                value={rePass}
                onChange={(e) => setRePass(e.target.value)}
                placeholder="Nhập lại mật khẩu"
                className="px-[15px] mb-[10px] border border-[#ffffff10] w-full text-[13.5px] placeholder-white text-white py-[13px] rounded-[8px] bg-transparent focus:outline-none"
              />
              <span className="text-[#ff0000]">
                {passWord != rePass ? "Mật khẩu không chính xác" : ""}
              </span>
              {showTurnstile ? (
                <div className="my-2 flex justify-center">
                  <Turnstile
                    turnstileSiteKey="3x00000000000000000000FF"
                    callback={(token: string) => setCfToken(token)}
                  />
                </div>
              ) : (
                ""
              )}
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#FFD875] my-[24px] px-[12px] font-[500] py-[8px] rounded w-full"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
