"use client";
import { PaginationProfs } from "@/types/blogType";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const Pagenavigation = ({ meta }) => {
  const { currentPage, limit, totalPage, total: toalData } = meta;
  console.log(currentPage, limit, totalPage);
  const searchParams = useSearchParams();
  const router = useRouter();

  const navigateTopage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
    // console.log(router);
  };
  const start = (currentPage - 1) * limit;
  const end = Math.min(currentPage * limit, toalData);
  return (
    <div className="mt-4 flex justify-between items-center space-x-3">
      <div>
        <span className="text-sm font-medium text-gray-600">
          Showing {start} to {end} of {toalData} results
        </span>
      </div>
      <div className="flex justify-center items-center space-x-3">
        <button
          onClick={() => navigateTopage(currentPage - 1)}
          className={`p-2 rounded bg-neutral-600 ${currentPage === 1 && "bg-neutral-800"}`}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="w-3 h-3 p-0" />{" "}
        </button>

        <div>
          <span className="text-sm font-medium text-gray-400">
            Page {currentPage} Of {totalPage}
          </span>
        </div>

        <button
          onClick={() => navigateTopage(currentPage + 1)}
          className={`p-2 rounded bg-neutral-600 ${currentPage === totalPage && "bg-neutral-800"}`}
          disabled={currentPage === totalPage}
        >
          <ChevronRight className="w-3 h-3 p-0" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Pagenavigation;
