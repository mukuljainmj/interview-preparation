import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGithubUser = createAsyncThunk(
  "githubUsers/fetchUser", // domain/feature
  async (username) => {
    console.log("payload creator");
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const userData = await response.json();
    return userData;
  }
);

const githubUserSlice = createSlice({
  name: "githubUser",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGithubUser.pending, (state) => {
        // action.type === "githubUsers/fetchUser/pending"
        console.log("pending");
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGithubUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchGithubUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default githubUserSlice.reducer;
