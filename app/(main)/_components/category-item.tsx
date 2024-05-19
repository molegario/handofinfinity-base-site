"use client";
import qs from "query-string";
import { Category } from "@prisma/client";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import {
  FcCalculator,
  FcFilmReel,
  FcMusic,
  FcOldTimeCamera,
  // FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";
import {
  MdFastfood,
  MdComputer
} from "react-icons/md";
import { GiNinjaMask } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";
import { PiBooksDuotone, PiFloppyDisk, PiDressDuotone, PiTelevisionDuotone } from "react-icons/pi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CategoryItemProps {
  label: string;
  value?: string;
}

const iconMap: Record<Category["name"], IconType> = {
  Movies: FcFilmReel,
  Shows: PiTelevisionDuotone,
  Tech: FcCalculator,
  Hardware: MdComputer,
  Software: PiFloppyDisk,
  Fashion: PiDressDuotone,
  Sports: FcSportsMode,
  Music: FcMusic,
  Food: MdFastfood,
  Health: FcOldTimeCamera,
  Anime: GiNinjaMask,
  Art: FaPaintBrush,
  Books: PiBooksDuotone,
};

const CategoryItem = ({ label, value }: CategoryItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");

  const currentTitle = searchParams.get("title");

  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: isSelected ? null : value,
          title: currentTitle,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    router.push(url);
  };

  const Icon = iconMap[label];

  return (
    <button
      className={cn(
        "py-2 px-3 text-sm border border-slate-200 bg-[#EF5B2A]/80 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition",
        isSelected && "border-sky-700 bg-sky-200/80 text-sky-800"
      )}
      onClick={onClick}
    >
      {Icon && <Icon size={20} />}
      <div className="truncate">{label}</div>
    </button>
  );
};

export default CategoryItem;
