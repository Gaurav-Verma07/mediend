import { createAsyncThunk } from "@reduxjs/toolkit";
import { setBlogs } from "../store/blogSlice";
import { AppDispatch, RootState } from "../store/store";
import { sanity } from "../sanity";

export const fetchBlogs = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch; state: RootState }
>("blogs/fetch", async (_, { dispatch }) => {
  try {
    const blogs = await sanity.fetch(`
            *[_type == "blogs"] | order(priority asc)
            `);
    console.log({ blogs });
    dispatch(setBlogs(blogs));
  } catch (error: any) {
    console.log(error);
  }
});
