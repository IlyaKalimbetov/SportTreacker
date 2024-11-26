import React, { useState } from 'react'
import axios from 'axios';
import CreateForm from '../ui/CreateForm';
import OnePost from '../ui/OnePost';

export default function HomePage({ allPosts }) {
    const [posts, setPosts] = useState(allPosts || []);

    // УДАЛЕНИЕ
    const onDelete = async (id) => {
        await axios.delete(`/api/main/post/${id}`);
        setPosts((prev) => prev.filter((post) => post.id !== id));
    }
    // РЕДАКТИРОВАНИЕ
    const onEdit = async (id, input) => {
        const response = await axios.patch(`/api/main/post/${id}`, input);
        setPosts((prev) => prev.map((el) => (el.id === id ? response.data : el)));
    }
    return (
        <>
            <img src="/image/logo.jpg" alt="" style={{ width: '200px', position: 'absolute', left: '-20px', top: '60px' }} />
            <CreateForm setPosts={setPosts} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {posts.map((post) => (
                    <OnePost
                        post={post}
                        key={post.id}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </div>
        </>
    )
}
