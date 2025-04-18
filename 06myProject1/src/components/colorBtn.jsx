import React from "react";

function ColorBtn({ color, text, textColor, onClick }) {
    // console.log(textColor);
    return (
        <button
            onClick={() => onClick(color)}
            style={{ backgroundColor: color, color: textColor }}
            className={`m-1 px-5 py-1 rounded-2xl font-semibold`}
        >
            {text}
        </button>
    );
}

export default ColorBtn;
