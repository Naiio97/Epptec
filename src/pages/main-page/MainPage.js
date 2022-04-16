import React, {useState, useEffect} from 'react'
import axios from "axios";
import ThePosts from '../../components/posts/ThePosts'

const MainPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/posts")
          .then((res) => setPosts(res.data))
          .catch((err) => console.error(err));
      }, []);

  return (
    <div>
        <ThePosts posts={posts} />
    </div>
  )
}

export default MainPage