import { Avatar } from '@material-ui/core';
import React from 'react'
import InputOption from './InputOption';
import "./Post.css";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined"
import { SendOutlined, ShareOutlined } from '@material-ui/icons';


function Post({name, description, message, photoURL}) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar />
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
 
        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="grey"/>
            <InputOption Icon={ChatOutlinedIcon} title="Comment" color="grey"/>
            <InputOption Icon={ShareOutlined} title="Share" color="grey"/>
            <InputOption Icon={SendOutlined} title="Send" color="grey"/>
        </div>
    </div>
  )
}

export default Post