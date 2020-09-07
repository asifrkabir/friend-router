import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Friend = (props) => {

    const { name, email, id } = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`);
    }

    const friendStyle = {
        border: "1px solid purple",
        margin: "20px",
        padding: "20px",
        borderRadius: "20px"
    }

    const [likeColor, setLikeColor] = useState("");

    // const handleLike = () => {
    //     setLikeColor(likeColor ? "" : "primary");
    // }

    return (

        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>
                <button>Show Details of {id}</button>
            </Link>
            <br/>
            <button onClick={() => handleClick(id)}>Click me</button>
            <br/>
            <ThumbUpAltIcon color={likeColor} onClick={() => setLikeColor(likeColor ? "" : "primary")}></ThumbUpAltIcon>
        </div>
    );
};

export default Friend;