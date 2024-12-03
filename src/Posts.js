import React from 'react';
import './Posts.css';
import {Avatar} from '@material-ui/core';
import InputOption from "./inputOption";
import ThumbsUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ChatOutlinesIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinesIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";


function Posts({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar/>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__button'>
            <InputOption Icon ={ThumbsUpAltOutlinedIcon} title = "Like" color = "gray"/>
            <InputOption Icon ={ChatOutlinesIcon} title = "Comment" color = "gray"/>
            <InputOption Icon ={ShareOutlinesIcon} title = "Share" color = "gray"/>
            <InputOption Icon ={SendOutlinedIcon} title = "Send" color = "gray"/>
        </div>
    </div>
  )
}

export default Posts
