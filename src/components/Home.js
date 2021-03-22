import React, {useState, useEffect} from 'react'
import '../App.css';
import {Link} from 'react-router-dom';

// This component is declared as a functins and implement "Hoocks" for the state management
function Home() {
    // This call the fuction fetchData everytime the component is rendered
    useEffect(() => {
        fetchData();
    }, []);

    // Create Hooks (require import "useState")
    // !IMPORTANT! useState is initialized with an empty arrey
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        // Call the api and convert the data in Json format
        const rawData = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const data = await rawData.json();
        // Slice method return a part of the array, in this case the first 10 results
        const posts = data.slice(0, 10);
        // This method save the posts list in the state (some react magic behind the scenes)
        setPosts(posts);
    }

    // Return the render components 
    return (
        <div>
            <h1>Home</h1>
            <p className="text">
                In this solutions you can find the basic functions of React, see comments in code 
                to learn more.
            </p>
            <p className="text">
                In the example above you can see <span>Route</span> and <span>Hooks</span> in use.
            </p>
            <h2>Posts list</h2>
            <p className="text">
                Click one of the posts to navigate.
            </p>
            {/*Iterate over the post array*/}
            <div className="posts">
                {posts.map(post => (
                    <Link key={post.id} style={{color: 'white'}} to={`/posts/${post.id}`}>
                        <h4 className="post-title">{post.title}</h4>
                    </Link>))}
            </div>
        </div>
    )
}

export default Home;
