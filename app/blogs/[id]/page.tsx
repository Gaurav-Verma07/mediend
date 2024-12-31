"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mantine/core";
import SingleBlog from "../../components/SingleBlog";
import { AppDispatch, RootState } from "../../../lib/store/store";
import { Blog } from "../../../lib/utils/blogType";
import { fetchBlogs } from "../../../lib/api/blogAPI";

export default function HomePage() {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const { blogs } = useSelector((state: RootState) => state.blogs);

  const decodedId = id ? decodeURIComponent(id as string) : "";
  const formattedId = decodedId.replace(/-/g, " ");

  const [mainBlog, setMainBlog] = useState<Blog>();

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
    const findBlog = blogs.filter(
      (el: Blog) => el.mainContent.title.trim() === formattedId
    )[0];
    setMainBlog(findBlog);
  }, [blogs, formattedId]);

  return (
    <>
      <Container size="lg" mt={40} mb={100}>
        <SingleBlog data={mainBlog} />
      </Container>
    </>
  );
}
