import React from "react";
import images from "../images/index.js";
function Card() {
  return (
    <div>
      <div className="w-full p-10 bg-gray-100">
        <div className="gap-1 p-3 bg-gray-50 rounded-2xl">
          <div
            className="w-full gap-4 rounded-xl"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
          >
            <div className="flex flex-col gap-4">
              <img
                className="h-[30rem] object-fill"
                src={images.hinh_nen_meo}
              ></img>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Tên sản phẩm:</div>
                    <div className="pl-2 text-base text-gray-700 ">
                      thịt Mều
                    </div>
                  </div>
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Giá tiền:</div>
                    <div className="pl-2 text-red-600 ">500.000VND</div>
                  </div>

                  {/* <div className="font-bold text-red-600">500.000VND</div> */}
                  {/* <div className="text-left">
                <div className="text-xl font-bold">mô tả: </div>
                <div className="p-1 text-base text-gray-700 ">
                  có trọng lượng 500g có trọng lượng 500g có trọng lượng 500g có
                  trọng lượng 500g
                </div>
              </div> */}
                </div>
              </div>
              <button className="py-2 rounded-md hover:bg-sky-700 text-gray-50 bg-sky-800">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="h-[30rem] object-fill"
                src={images.hinh_nen_meo}
              ></img>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Tên sản phẩm:</div>
                    <div className="pl-2 text-base text-gray-700 ">
                      thịt Mều
                    </div>
                  </div>
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Giá tiền:</div>
                    <div className="pl-2 text-red-600 ">500.000VND</div>
                  </div>

                  {/* <div className="font-bold text-red-600">500.000VND</div> */}
                  {/* <div className="text-left">
                <div className="text-xl font-bold">mô tả: </div>
                <div className="p-1 text-base text-gray-700 ">
                  có trọng lượng 500g có trọng lượng 500g có trọng lượng 500g có
                  trọng lượng 500g
                </div>
              </div> */}
                </div>
              </div>
              <button className="py-2 rounded-md hover:bg-sky-700 text-gray-50 bg-sky-800">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="h-[30rem] object-fill"
                src={images.hinh_nen_meo}
              ></img>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Tên sản phẩm:</div>
                    <div className="pl-2 text-base text-gray-700 ">
                      thịt Mều
                    </div>
                  </div>
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Giá tiền:</div>
                    <div className="pl-2 text-red-600 ">500.000VND</div>
                  </div>

                  {/* <div className="font-bold text-red-600">500.000VND</div> */}
                  {/* <div className="text-left">
                <div className="text-xl font-bold">mô tả: </div>
                <div className="p-1 text-base text-gray-700 ">
                  có trọng lượng 500g có trọng lượng 500g có trọng lượng 500g có
                  trọng lượng 500g
                </div>
              </div> */}
                </div>
              </div>
              <button className="py-2 rounded-md hover:bg-sky-700 text-gray-50 bg-sky-800">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="h-[30rem] object-fill"
                src={images.hinh_nen_meo}
              ></img>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Tên sản phẩm:</div>
                    <div className="pl-2 text-base text-gray-700 ">
                      thịt Mều
                    </div>
                  </div>
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Giá tiền:</div>
                    <div className="pl-2 text-red-600 ">500.000VND</div>
                  </div>

                  {/* <div className="font-bold text-red-600">500.000VND</div> */}
                  {/* <div className="text-left">
                <div className="text-xl font-bold">mô tả: </div>
                <div className="p-1 text-base text-gray-700 ">
                  có trọng lượng 500g có trọng lượng 500g có trọng lượng 500g có
                  trọng lượng 500g
                </div>
              </div> */}
                </div>
              </div>
              <button className="py-2 rounded-md hover:bg-sky-700 text-gray-50 bg-sky-800">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="h-[30rem] object-fill"
                src={images.hinh_nen_meo}
              ></img>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Tên sản phẩm:</div>
                    <div className="pl-2 text-base text-gray-700 ">
                      thịt Mều
                    </div>
                  </div>
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Giá tiền:</div>
                    <div className="pl-2 text-red-600 ">500.000VND</div>
                  </div>

                  {/* <div className="font-bold text-red-600">500.000VND</div> */}
                  {/* <div className="text-left">
                <div className="text-xl font-bold">mô tả: </div>
                <div className="p-1 text-base text-gray-700 ">
                  có trọng lượng 500g có trọng lượng 500g có trọng lượng 500g có
                  trọng lượng 500g
                </div>
              </div> */}
                </div>
              </div>
              <button className="py-2 rounded-md hover:bg-sky-700 text-gray-50 bg-sky-800">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="h-[30rem] object-fill"
                src={images.hinh_nen_meo}
              ></img>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Tên sản phẩm:</div>
                    <div className="pl-2 text-base text-gray-700 ">
                      thịt Mều
                    </div>
                  </div>
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Giá tiền:</div>
                    <div className="pl-2 text-red-600 ">500.000VND</div>
                  </div>

                  {/* <div className="font-bold text-red-600">500.000VND</div> */}
                  {/* <div className="text-left">
                <div className="text-xl font-bold">mô tả: </div>
                <div className="p-1 text-base text-gray-700 ">
                  có trọng lượng 500g có trọng lượng 500g có trọng lượng 500g có
                  trọng lượng 500g
                </div>
              </div> */}
                </div>
              </div>
              <button className="py-2 rounded-md hover:bg-sky-700 text-gray-50 bg-sky-800">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="h-[30rem] object-fill"
                src={images.hinh_nen_meo}
              ></img>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Tên sản phẩm:</div>
                    <div className="pl-2 text-base text-gray-700 ">
                      thịt Mều
                    </div>
                  </div>
                  <div
                    className="flex w-full text-left"
                    style={{ alignItems: "center" }}
                  >
                    <div className="text-lg font-bold">Giá tiền:</div>
                    <div className="pl-2 text-red-600 ">500.000VND</div>
                  </div>

                  {/* <div className="font-bold text-red-600">500.000VND</div> */}
                  {/* <div className="text-left">
                <div className="text-xl font-bold">mô tả: </div>
                <div className="p-1 text-base text-gray-700 ">
                  có trọng lượng 500g có trọng lượng 500g có trọng lượng 500g có
                  trọng lượng 500g
                </div>
              </div> */}
                </div>
              </div>
              <button className="py-2 rounded-md hover:bg-sky-700 text-gray-50 bg-sky-800">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
