import React, {useState, useEffect} from 'react'

// This component is declared as a functins and implement "Hoocks" for the state management
// Pages create by react route links (Link) have special props passed from the link
function Post(props) {
    // This call the fuction fetchData everytime the component is rendered
    useEffect(() => {
        fetchData();
    }, []);

    // Create Hooks (require import "useState")
    // !IMPORTANT! useState is initialized with an empty object
    const [post, setPost] = useState({});
    
    const fetchData = async () => {
        // retrive id frome the recived Link's params
        const id = props.match.params.id;
        // Call the api with the id and convert the data in Json format
        const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await rawData.json();
        console.log(post);
        // This method save the post object in the state (some react magic behind the scenes)
        setPost(post);
    }

    // Return the render components 
    return (
        <div>
            <h1>{post.title}</h1>
            {post.body}
        </div>
    )
}

export default Post;
