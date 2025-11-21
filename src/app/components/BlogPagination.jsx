"use client";

import { Pagination } from "antd";
import { useRouter } from "next/navigation";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function BlogsPagination({ page, limit, total, basePath = ""  }) {
  const router = useRouter();

  const pageBtnClass =
    "flex items-center justify-center px-4 py-1.5 text-sm font-semibold border bg-emerald-700/30 hover:bg-emerald-700/40 focus:outline-none border-emerald-500/50 hover:border-emerald-500 text-white transition-all duration-300 cursor-pointer rounded-md min-h-[38px] min-w-[38px]";

  const activePageClass =
    "flex items-center justify-center px-4 py-1.5 text-sm font-semibold border bg-emerald-700/50 focus:outline-none border-emerald-500 text-white transition-all duration-300 cursor-pointer rounded-md min-h-[38px] min-w-[38px]";

  const navBtnClass =
    "flex items-center justify-center px-3 py-1.5 text-sm font-semibold border bg-emerald-700/30 hover:bg-emerald-700/40 focus:outline-none border-emerald-500/50 hover:border-emerald-500 text-white transition-all duration-300 cursor-pointer rounded-md min-h-[38px] min-w-[38px]";

  return (
    <div className="flex justify-center mb-14">
      <Pagination
        current={page}
        total={total}
        pageSize={limit}
        showSizeChanger={false}
        onChange={(page, pageSize) =>
          router.push(`/${basePath}?page=${page}&limit=${pageSize}`)
        }
        itemRender={(pageNum, type, originalElement) => {
          if (type === "prev") {
            return (
              <button className={navBtnClass}>
                <FaAngleLeft className="text-white" size={16} />
              </button>
            );
          }
          if (type === "next") {
            return (
              <button className={navBtnClass}>
                <FaAngleRight className="text-white" size={16} />
              </button>
            );
          }
          return (
            <button
              key={pageNum}
              className={pageNum === page ? activePageClass : pageBtnClass}
            >
              {pageNum}
            </button>
          );
        }}
      />
    </div>
  );
}
