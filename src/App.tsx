import "@mantine/core/styles.css";
import { Flex, MantineProvider, Title } from "@mantine/core";
import { theme } from "./theme";
import useBookshelf from "./hooks/use-bookshelf";
import AddBookshelfForm from "./components/add-bookshelf-form";
import BookshelfList from "./components/bookshelf-list";

export default function App() {
  const { bookshelf, onAddBookshelf, onToggleRead, onDeleteBookshelf } =
    useBookshelf();
  return (
    <MantineProvider theme={theme}>
      <Flex direction="column" p={16} gap={16}>
        <Title order={2} ta="center">
          Bookshelf App
        </Title>
        <AddBookshelfForm onSubmit={(book) => onAddBookshelf(book)} />
        <Flex direction="row" gap={16}>
          <BookshelfList
            bookshelf={bookshelf.filter((book) => book.is_read === true)}
            onDeleteBook={(id) => onDeleteBookshelf(id)}
            onToggleRead={(id) => onToggleRead(id)}
            title="Read Book"
          />
          <BookshelfList
            bookshelf={bookshelf.filter((book) => book.is_read === false)}
            onDeleteBook={(id) => onDeleteBookshelf(id)}
            onToggleRead={(id) => onToggleRead(id)}
            title="Unread Book"
          />
        </Flex>
      </Flex>
    </MantineProvider>
  );
}
