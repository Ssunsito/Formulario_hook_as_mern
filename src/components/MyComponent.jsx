import React from "react";

const MyComponent = props => {
    const onClickHandler = () => {
        alert("You have clicked the button!");
    }
        return props.movies.map((item, index) => {
        return <button key={index} onClick={onClickHandler}>{item} </button>
    });
}   

export default MyComponent;