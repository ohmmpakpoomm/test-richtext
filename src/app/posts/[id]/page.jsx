"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export default function page({ params }) {
  const [post, setPost] = useState("");

  const getPost = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    setPost(res.data.body);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <h1>Test Build</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        sequi et vitae officia, impedit dolor aut dolorum excepturi unde ullam
        ipsa esse voluptatum. Est, molestias maxime earum nihil sequi alias
        reprehenderit, ea tempore atque ullam, molestiae doloribus aut eos!
        Officiis dignissimos eveniet consequatur fuga quas? Aliquam nihil quasi
        impedit consequatur, quo autem, omnis illum sint earum officiis
        similique quis incidunt rem repellendus architecto, et facilis sit
        veritatis voluptatibus repudiandae error enim temporibus? Sit, quod?
        Accusamus quasi similique eum odio saepe, temporibus molestias expedita
        voluptatibus a odit! Ipsam, itaque quidem eum ducimus adipisci accusamus
        expedita, ullam sit, molestias facilis atque iure.
      </div>
      <h1>{post}</h1>
      <div className="flex">
        <Card shadow="sm" padding="lg" radius="md" withBorder w={360}>
          <Card.Section>
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink">On Sale</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </div>
    </>
  );
}
