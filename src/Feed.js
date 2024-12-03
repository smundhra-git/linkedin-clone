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

function Feed() {
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
            name: 'Shlok Mundhra',
            description: 'this is a test',
            message: input,
            photoUrl: '',
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
        {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post key ={id}
            name = {name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            />
        ))}
        <Post name = 'Shlok Mundhra' description='this is a try' message = 'random try message'/>

    </div>
  )
}

export default Feed
