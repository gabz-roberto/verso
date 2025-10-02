import Link from "next/link";
import React from "react";
import { BookCover } from "./BookCover";

export const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLoanedBook = false,
}: Book) => {
  return (
    <li>
      <Link href={`/books/${id}`}>
        <BookCover coverColor={color} coverImage={cover}/>
      </Link>
    </li>
  );
};
