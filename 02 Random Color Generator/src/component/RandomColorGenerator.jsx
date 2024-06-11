import { useState } from "react";

function RandomColorGenerator() {

    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState('#000000');

    function RandomNumber(length) {
        return Math.floor(Math.random() * length)
    }

    function handleRandomHexColor() {
        let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[RandomNumber(hex.length)];
        }
        setColor(hexColor)
    }

    function handleRandomRgbColor() {
        setColor(`rgb( ${RandomNumber(255)}, ${RandomNumber(255)}, ${RandomNumber(255)})`)
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: color,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start'
        }}>
            <button onClick={() => setColorType('hex')}>HEX格式</button>
            <button onClick={() => setColorType('rgb')}>RGB格式</button>
            <button onClick={colorType === 'hex'
                ? handleRandomHexColor
                : handleRandomRgbColor}>生成隨機顏色
            </button>

            <h1 style={{
                color: '#ffffff',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>{color}</h1>
        </div>
    );
}

export default RandomColorGenerator;