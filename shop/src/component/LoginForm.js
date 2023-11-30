import React from "react";
import images from "../images/index.js";
const LoginForm = () => {
  return (
    // <div className="w-full h-full">
    //   <div className="h-[62rem] flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    //     <div className="relative ">
    //       <div className="absolute rounded-lg shadow-lg -top-2 -left-2 -right-2 -bottom-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"></div>
    //       <div
    //         id="form-container"
    //         className="relative z-10 p-16 transition duration-500 ease-in-out transform bg-white rounded-lg shadow-2xl"
    //       >
    //         <h2
    //           id="form-title"
    //           className="mb-10 text-3xl font-bold text-center text-gray-800"
    //         >
    //           Đăng nhập
    //         </h2>
    //         <form className="space-y-5">
    //           <input
    //             className="w-full h-12 px-3 border border-gray-800 rounded-lg"
    //             placeholder="Tên đăng nhập"
    //             id=""
    //             name=""
    //             type="text"
    //           />
    //           <input
    //             className="w-full h-12 px-3 border border-gray-800 rounded-lg"
    //             placeholder="Mật khẩu"
    //             id=""
    //             name=""
    //             type="password"
    //           />
    //           <button className="w-full h-12 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
    //             Đăng nhập
    //           </button>
    //           <a
    //             className="flex text-sm text-xl text-blue-500 hover:text-blue-800"
    //             href="#"
    //           >
    //             Đăng ký tại đây!
    //           </a>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="box-border flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[#dfa674] rounded-2xl flex max-w-4xl p-10 items-center">
        <div className="px-8 md:w-1/2">
          <h2 className="font-bold text-3xl text-[#002D74]">ĐĂNG NHẬP</h2>
          <p className="text-sm mt-4 text-[#002D74]">
            Nếu bạn đã là thành viên, hãy đăng nhập dễ dàng ngay bây giờ.
          </p>

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 border rounded-xl"
              type="email"
              name="email"
              placeholder="Tên đăng nhập"
            />
            <div className="relative">
              <input
                className="w-full p-2 border rounded-xl"
                type="password"
                name="password"
                id="password"
                placeholder="Mật khẩu"
              />
              {/* ... */}
            </div>
            <button
              className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
              type="submit"
            >
              Đăng nhập
            </button>
          </form>

          <div className="py-5 mt-10 text-sm border-b border-gray-500 playfair tooltip">
            Quên mật khẩu
          </div>

          <div className="flex items-center justify-between mt-4 text-sm container-mr">
            <p className="mr-3 md:mr-0 ">Nếu không có tài khoản..</p>
            <button className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#206ab1] font-semibold duration-300">
              Đăng ký ngay
            </button>
          </div>
        </div>

        <div className="w-1/2 md:block">
          <img
            className="rounded-2xl max-h-[1600px]"
            src={images.hinh_nen_meo}
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
