import { useEffect, useState } from "react"
import axios from 'axios'

export const usePosts = () => {
    const [ posts, setPosts ] = useState();

    const getPosts = async () => {
        try {
            const res = await axios.get('/api/blogs/');
            const data = await res.data;

            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    return { posts }
}