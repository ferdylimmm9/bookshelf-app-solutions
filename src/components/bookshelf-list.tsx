import { Button, Card, Flex, Text, Title } from "@mantine/core";
import { BookType } from "../hooks/use-bookshelf";

export interface BookshelfListProps {
  bookshelf: BookType[];
  onDeleteBook: (id: string) => void;
  onToggleRead: (id: string) => void;
  title: string;
}

export default function BookshelfList(props: BookshelfListProps) {
  return (
    <Card withBorder w='100%'>
      <Title order={3}>{props.title}</Title>
      {props.bookshelf.length === 0 && <Text>No Data</Text>}
      {props.bookshelf.map((book) => {
        return (
          <Flex direction="column" gap={4}>
            <Flex direction="column" w="100%" gap={4}>
              <Text>ID: {book.id}</Text>
              <Text>Title: {book.title}</Text>
              <Text>Author: {book.author}</Text>
              <Text>Publish At: {book.publish_at}</Text>
              <Text>Is Read: {`${book.is_read}`}</Text>
            </Flex>
            <Flex direction="row" w="100%" justify="flex-end" gap={4}>
              <Button onClick={() => props.onToggleRead(book.id)}>
                {book.is_read ? "Unread" : "Read"}
              </Button>
              <Button color="red" onClick={() => props.onDeleteBook(book.id)}>
                Delete
              </Button>
            </Flex>
          </Flex>
        );
      })}
    </Card>
  );
}
