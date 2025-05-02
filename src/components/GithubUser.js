import React, { useEffect } from "react";
import { fetchGithubUser } from "../utils/githubUserSlice";
import { useDispatch, useSelector } from "react-redux";

function GithubUser() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.githubUser);
  useEffect(() => {
    dispatch(fetchGithubUser("mukuljainmj"));
  }, []);

  return (
    <div>
      <h1>GithubUser</h1>
      {status === "loading" && <h2>loading</h2>}
      {status === "fulfilled" && (
        <div>
          <h3>user name: {data.login}</h3>
          <h3>id: {data.id}</h3>
        </div>
      )}
    </div>
  );
}

export default GithubUser;
