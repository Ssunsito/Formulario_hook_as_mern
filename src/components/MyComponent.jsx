import React from "react";

const MyComponent = props => {
    const onClickHandler = (e,item) => {
        alert("You have clicked the button "+ item);
    }
        return props.movies.map((item, index) => {
        return <button key={index} onClick={(e) => onClickHandler(e,item)}>{item} </button>
    });
}   

export default MyComponent;