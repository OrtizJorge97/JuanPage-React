import React from "react";

export default function Image(props) {
    const { srcImage } = props;

    console.log(srcImage);
    return(
        <div>
            <img 
                style={{ width: 600 }}
                src={srcImage}/>
        </div>
    );
}