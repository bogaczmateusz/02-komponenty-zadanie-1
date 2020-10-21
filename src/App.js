import React, { useState, useEffect } from 'react';
import BlogTile from './components/BlogTile'

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postsArray = [
            {id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
            {id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
            {id: 3, title: 'Adam Małysz Zgolił wąs', intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'}
        ];

        setPosts(postsArray);
    }, []);

    return (
        <div style={{maxWidth: 500, margin: '0 auto', padding: '50px 0'}}>
            {posts.map(post => <BlogTile key={`blogtile-${post.id}`} title={post.title} intro={post.intro} />)}
        </div>
    );
}

export default App;
