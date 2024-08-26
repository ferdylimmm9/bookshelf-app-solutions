import React from "react";

export type BookType = {
  id: string;
  title: string;
  author: string;
  is_read: boolean;
  publish_at: string;
  genre: string;
};

export default function useBookshelf() {
  const [title, setTitle] = React.useState("");
  const [bookshelf, setBookshelf] = React.useState<BookType[]>([]);

  const onEditBookshelf = (bookshelf: BookType) => {
    setBookshelf((prev) =>
      prev.map((book) => {
        if (book.id === bookshelf.id) {
          return {
            author: book.author,
            genre: book.genre,
            id: book.id,
            is_read: book.is_read,
            publish_at: book.publish_at,
            title: book.title,
          };
        }
        return book;
      })
    );
  };

  const onAddBookshelf = (bookshelf: BookType) => {
    setBookshelf((prev) => [...prev, bookshelf]);
  };

  const onDeleteBookshelf = (id: string) => {
    setBookshelf((bookshelf) => bookshelf.filter((book) => book.id !== id));
  };

  const onSearchTitle = (title: string) => {
    setTitle(title);
  };

  const onToggleRead = (id: string) => {
    setBookshelf((bookshelf) =>
      bookshelf.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            is_read: !book.is_read,
          };
        }
        return book;
      })
    );
  };

  return {
    title,
    setTitle,
    bookshelf: bookshelf.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    ),
    setBookshelf,
    onAddBookshelf,
    onDeleteBookshelf,
    onEditBookshelf,
    onSearchTitle,
    onToggleRead,
  };
}
