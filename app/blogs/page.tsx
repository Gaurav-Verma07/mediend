"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mantine/core";
import LatestEducationNews from "../components/LatestEducationNews";
import LatestNews from "../components/LatestNews";
import { AppDispatch } from "../../lib/store/store";
import { fetchBlogs } from "../../lib/api/blogAPI";

export default function HomePage() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <>
      {/* <SearchHerobox /> */}
      <Container size="lg">
        <LatestEducationNews />
        <LatestNews />
        {/* <FeaturedBlogs />
        <LatestNews /> */}
      </Container>
    </>
  );
}
