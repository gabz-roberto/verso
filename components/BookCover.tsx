import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantBookStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor?: string;
  coverImage?: string;
}

export const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantBookStyles[variant],
        className
      )}
    >
      <BookCoverSvg coverColor={coverColor}/>
      <div
        className="absolute z-10"
        style={{ height: "88%", width: "87.6%", left: "12%" }}
      >
        <Image src={coverImage} alt="cover" fill className="rounded-sm object-fill"/>
      </div>
    </div>
  );
};
