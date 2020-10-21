import React from 'react';

function BlogTile(props) {
    const { title, intro } = props;

    return (
        <div style={{backgroundColor: '#f1f1f1', padding: '20px', border: '2px solid #999999', marginBottom: 20}}>
            <h2 style={{marginTop: 0}}>{title}</h2>
            <p style={{marginBottom: 0}}>{intro.length > 25 ? intro.substring(0, 25) + '...' : intro}</p>
        </div>
    )
}

export default BlogTile;