import React from 'react'
import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img className="postImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="imgg"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                    <span className="postTitle">
                        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.
                    </span>
                    <hr />
                    <span className="postDate">1 hour ago</span>
                </div>
            </div>
        </div>
    )
}
