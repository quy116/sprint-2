import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-slate-300">
      <nav
        className="flex items-center justify-between w-full p-3 mx-auto lg:px-8"
        aria-label="Global"
      >
        <div className="flex text-3xl cursor-pointer lg:flex-1">
          Shop của Mều Bếu
        </div>
        <div className="flex ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* <span className="sr-only">Open main menu</span> */}
          </button>
        </div>
        <div className="items-center lg:flex lg:gap-x-12">
          <div className="text-xl font-semibold leading-6 text-gray-900 cursor-pointer hover:text-purple-600">
            Trang chủ
          </div>
          <div
            href="#"
            className="text-xl font-semibold leading-6 text-gray-900 cursor-pointer hover:text-purple-600"
          >
            Về chúng tôi
          </div>
          <div className="flex items-center justify-center p-5">
            <div className="rounded-lgp-5">
              <div className="flex">
                <div className="flex items-center justify-center w-10 p-5 bg-white border-r border-gray-200 rounded-tl-lg rounded-bl-lg">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="absolute w-5 transition pointer-events-none fill-gray-500"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full max-w-[400px] bg-white pl-2 text-base font-semibold outline-0"
                  placeholder="tìm kiếm sản phẩm"
                  id=""
                />
                <input
                  type="button"
                  value="tìm kiếm"
                  className="pl-2 pr-2 font-semibold text-white transition-colors bg-purple-500 rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-purple-600"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="items-center gap-8 lg:flex lg:flex-1 lg:justify-end">
          <FiShoppingCart className="text-4xl font-semibold leading-6 text-gray-900 " />
          <a href="#" className="text-xl font-semibold leading-6 text-gray-900">
            Đăng nhập <span>&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
