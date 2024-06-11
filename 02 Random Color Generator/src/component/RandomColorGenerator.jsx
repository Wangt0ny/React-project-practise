import { useState } from "react";

function RandomColorGenerator() {

    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState(['00', '00', '00']);

    function RandomNumber(length) {
        return Math.floor(Math.random() * length)
    }

    function handleRgbToHex(c) {
        let newArray = [...c]
        newArray = newArray.map(x => {
            let hex = x.toString(16);
            // console.log(hex)
            return hex.length === 1 ? '0' + hex : hex
        })
        setColor(newArray)
    }

    function handleHexToRgb(c) {
        let newArray = [...c]
        newArray = newArray.map(x => {
            let rgb = parseInt(x, 16);
            return rgb
        })
        setColor(newArray)
    }

    function handleRandomHexColor() {
        let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

        let hexColor = []
        for (let i = 0; i < 3; i++) {
            hexColor.push(hex[RandomNumber(hex.length)].toString() + hex[RandomNumber(hex.length)].toString())
        }

        setColor(hexColor)
    }

    function handleRandomRgbColor() {
        let rgbColor = [RandomNumber(256), RandomNumber(256), RandomNumber(256)]

        setColor(rgbColor)
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: colorType === 'hex' ? `#${color[0]}${color[1]}${color[2]}` : `rgb( ${color[0]}, ${color[1]}, ${color[2]})`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start'
        }}>
            <button onClick={() => { setColorType('hex'); colorType === 'rgb' ? handleRgbToHex(color) : null }}>HEX格式</button>
            <button onClick={() => { setColorType('rgb'); colorType === 'hex' ? handleHexToRgb(color) : null }}>RGB格式</button>
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
            }}>{colorType === 'hex' ? `#${color[0]}${color[1]}${color[2]}` : `rgb( ${color[0]}, ${color[1]}, ${color[2]})`}</h1>
        </div>
    );
}

export default RandomColorGenerator;