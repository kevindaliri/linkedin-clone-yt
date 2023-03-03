import React from 'react'
import { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image"; 
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"; 
import EventNoteIcon from "@material-ui/icons/EventNote"; 
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";  
import Post from './Post';
import InputOption from './InputOption';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



 function Feed() {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'LinkedIn User',
            description: 'Location',
            message: input,
            photoURL: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");

       
    };

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input"> 
                <CreateIcon />
                <form> 
                    <input value={input} onChange={e => setInput(e.target.value)}type="text"/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title='Video' color="orange" />
                <InputOption Icon={EventNoteIcon} title='Event' color="grey" />
                <InputOption Icon={CalendarViewDayIcon} title='Write Article' color="green" /> 
            </div>
        </div>
        {/* Posts */}
        {posts.map(({ id, data: {name, description, message, photoURL} }) => (
        <Post key={id} 
              name={name} 
              description={description}
              message={message}
              photoURL={photoURL}
              />
              ))}
    </div>
  );
}

export default Feed