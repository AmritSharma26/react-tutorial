import ColorBtn from "./components/colorBtn";
import { useState } from "react";

function App() {
    let [bgColor, setbgColor] = useState("#333399");
    let [colorName, setColorName] = useState("Blue");

    const handleColorChange = (color, text) => {
        setbgColor(color);
        setColorName(text);
        // console.log(colorName);
    };

    return (
        <>
            <div
                id="warapper"
                style={{ backgroundColor: bgColor }}
                className={`w-full h-[100vh] flex items-center justify-center`}
            >
                <div className="bg-gray-800 text-white text-4xl font-semibold px-10 py-5 rounded">
                    {colorName}
                </div>
                <div
                    id="color-container"
                    className="fixed bottom-0 flex flex-row flex-wrap gap-2 max-w-11/12 bg-white w-fit rounded-2xl p-2 m-5"
                >
                    <ColorBtn
                        color="#FF2C2C"
                        text="Red"
                        textColor="#FFFFFF"
                        onClick={handleColorChange}
                    />
                    <ColorBtn
                        color="#00BB77"
                        text="Green"
                        textColor="#FFFFFF"
                        onClick={handleColorChange}
                    />
                    <ColorBtn
                        color="#305CDE"
                        text="Blue"
                        textColor="#FFFFFF"
                        onClick={handleColorChange}
                    />
                    <ColorBtn
                        color="#808000"
                        text="Olive"
                        textColor="#FFFFFF"
                        onClick={handleColorChange}
                    />
                    <ColorBtn
                        color="#808080"
                        text="Gray"
                        textColor="#FFFFFF"
                        onClick={handleColorChange}
                    />
                    <ColorBtn
                        color="#FFFF00"
                        text="Yellow"
                        textColor="#000000"
                        onClick={handleColorChange}
                    />
                    <ColorBtn
                        color="#FFC0CB"
                        text="Pink"
                        textColor="#000000"
                        onClick={handleColorChange}
                    />
                    <ColorBtn
                        color="#9D00FF"
                        text="Purple"
                        textColor="#FFFFFF"
                        onClick={handleColorChange}
                    />
                    <ColorBtn
                        color="#E6E6FA"
                        text="lavender"
                        textColor="#000000"
                        onClick={handleColorChange}
                    />
                    <ColorBtn
                        color="#FFFFFF"
                        text="White"
                        textColor="#000000"
                        onClick={handleColorChange}
                    />
                    <ColorBtn
                        color="#000000"
                        text="Black"
                        textColor="#FFFFFF"
                        onClick={handleColorChange}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
