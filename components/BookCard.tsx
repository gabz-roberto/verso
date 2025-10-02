import Link from "next/link";
import React from "react";
import { BookCover } from "./BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLoanedBook = false,
}: Book) => {
  return (
    <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
      <Link
        href={`/books/${id}`}
        className={cn(isLoanedBook && "w-full flex-col items-center")}
      >
        <BookCover coverColor={color} coverImage={cover} />

        <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>
        {isLoanedBook && (
          <div className="mt-3 w-full">
              <div className="book-loaned">
              <Image
                className="object-contain"
                src={"/icons/calendar.svg"}
                alt="calendar"
                height={18}
                width={18}
              />
              <p className="text-light-100">11 dias restantes</p>
            </div>
            <Button className="book-btn">Baixar recibo</Button>
          </div>
        )}
      </Link>
    </li>
  );
};
