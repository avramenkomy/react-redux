import React from 'react';
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
          <div className="col">
              <PostForm />
          </div>
      </div>
      <div className="row">
          <div className="col">
              <h4>Синхронные посты</h4>
              <Posts posts={[1,2,3]}/>
          </div>
          <div className="col">
              <h4>Асинхронные посты</h4>
              <FetchedPosts posts={[]} />
          </div>
      </div>
    </div>
  );
}

export default App;
