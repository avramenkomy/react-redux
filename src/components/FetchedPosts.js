import React from 'react';
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.fetchedPosts);
  const loading = useSelector(state => state.app.loading);

  if (loading) {
    return (
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only" />
      </div>
    )
  }

  if (!posts.length) {
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts()) }
      >Загрузить</button>
  )}
  return posts.map(post => <Post post={ post } key={ post.id }/>)
}