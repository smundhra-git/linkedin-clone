import React, {useState, useEffect} from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./inputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Posts.js';
import { db } from './firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, orderBy, query } from "firebase/firestore";
import { selectUser } from './features/userSlice';
import {useSelector} from "react-redux";
import FlipMove from "react-flip-move"

function Feed() {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    
    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                })));
            }
        );
    
        return unsubscribe; // Cleanup listener
    }, []);
    
    

    const sendPost = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, "posts"), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: serverTimestamp(),
        });

        setInput(''); // Clear the input after posting
    };


  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon/>
                <form>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Write a post"
                    />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className='feed__inputOption'>
                <InputOption Icon ={ImageIcon} title = "Photo" color = "#70B5F9"/>
                <InputOption Icon ={SubscriptionIcon} title = "Video" color = "#E7A33E"/>
                <InputOption Icon ={EventNoteIcon} title = "Event" color = "#C0CBCD"/>
                <InputOption Icon ={CalendarViewDayIcon} title = "Write Article" color = "#7FC15E"/>
            </div>
        </div>
        {/* Posts */}
        <FlipMove>
        {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post key ={id}
            name = {name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            />
        ))}
        </FlipMove>

    </div>
  )
}

export default Feed
