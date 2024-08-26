import { Button, Card, Checkbox, Flex, TextInput } from "@mantine/core";
import React from "react";
import { BookType } from "../hooks/use-bookshelf";

interface AddBookshelfFormProps {
  onSubmit: (book: BookType) => void;
}

export default function AddBookshelfForm(props: AddBookshelfFormProps) {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [is_read, setIsRead] = React.useState(false);
  const [publish_at, setPublishAt] = React.useState("");

  const onClickAdd = () => {
    props.onSubmit({
      id: (+new Date()).toString(),
      title: title,
      author: author,
      genre: genre,
      is_read: is_read,
      publish_at: publish_at,
    });

    setTitle("");
    setAuthor("");
    setGenre("");
    setIsRead(false);
    setPublishAt("");
  };

  return (
    <Card withBorder>
      <Flex direction='column' gap={16}>
        <TextInput
          label="Title"
          placeholder="Insert Title"
          value={title}
          onChange={(e) => {
            const title = e.target.value;
            setTitle(title);
          }}
          required
        />
        <TextInput
          label="Author"
          placeholder="Insert Author"
          value={author}
          onChange={(e) => {
            const author = e.target.value;
            setAuthor(author);
          }}
          required
        />
        <TextInput
          label="Publish At"
          placeholder="DD/MM/YYYY"
          value={publish_at}
          onChange={(e) => {
            const publish_at = e.target.value;
            setPublishAt(publish_at);
          }}
          required
        />
        <TextInput
          label="Genre"
          placeholder="Insert Genre"
          value={genre}
          onChange={(e) => {
            const genre = e.target.value;
            setGenre(genre);
          }}
          required
        />
        <Checkbox
          label="Is Read"
          checked={is_read}
          onChange={(e) => {
            const checked = e.currentTarget.checked;
            setIsRead(checked);
          }}
        />
        <Button onClick={() => onClickAdd()}>Add</Button>
      </Flex>
    </Card>
  );
}
