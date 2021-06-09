import React, { useState } from 'react';
import './ColorBox.scss';
// import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue', 'orange'];
    const colorListLength = COLOR_LIST.length;
    const randomIndex = Math.floor(Math.random() * colorListLength);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink';
        console.log(initColor);
        return initColor;
    });

    function handleBoxClick() {
        // get random color --> set color
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box-color', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;