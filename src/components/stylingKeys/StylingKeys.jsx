import React, { useState } from 'react'
import '../stylingKeys/stylingKeys.css'

const StylingKeys = ({ style, setStyle, setText, saveToHistory }) => {
    const [styleAll, setStyleForAll] = useState(false);
    const [UpperLower, toggleCase] = useState(false);

    const handelUpperLowerCase = () => {
        toggleCase((prevCase) => !prevCase);
        setText((prevText) =>
            prevText.map((item) => ({
                ...item,
                sign: item.sign === item.sign.toUpperCase() ? item.sign.toLowerCase() : item.sign.toUpperCase()
            }))
        );
        saveToHistory();
    };

    const toggleBold = () => {
        setStyle((prevStyle) => ({
            ...prevStyle,
            fontWeight: prevStyle.fontWeight === 'bold' ? 'normal' : 'bold',
        }));
        saveToHistory();
    };

    const toggleBoldForAll = () => {
        setText((prevText) =>
            prevText.map((item) => ({
                ...item,
                style: {
                    ...item.style,
                    fontWeight: item.style.fontWeight === 'bold' ? 'normal' : 'bold',
                },
            }))
        );
        saveToHistory();
    };

    const toggleItalic = () => {
        setStyle((prevStyle) => ({
            ...prevStyle,
            fontStyle: prevStyle.fontStyle === 'italic' ? 'normal' : 'italic',
        }));
        saveToHistory();
    };

    const toggleItalicForAll = () => {
        setText((prevText) =>
            prevText.map((item) => ({
                ...item,
                style: {
                    ...item.style,
                    fontStyle: item.style.fontStyle === 'italic' ? 'normal' : 'italic',
                },
            }))
        );
        saveToHistory();
    };

    const toggleUnderline = () => {
        setStyle((prevStyle) => ({
            ...prevStyle,
            textDecoration: prevStyle.textDecoration === 'underline' ? 'none' : 'underline',
        }));
        saveToHistory();
    };

    const toggleUnderlineForAll = () => {
        setText((prevText) =>
            prevText.map((item) => ({
                ...item,
                style: {
                    ...item.style,
                    textDecoration: item.style.textDecoration === 'underline' ? 'none' : 'underline',
                },
            }))
        );
        saveToHistory();
    };

    const changeColor = (color) => {
        setStyle((prevStyle) => ({ ...prevStyle, color: color }));
        saveToHistory();
    };

    const changeColorForAll = (color) => {
        setText((prevText) =>
            prevText.map((item) => ({
                ...item,
                style: {
                    ...item.style,
                    color: color,
                },
            }))
        );
        saveToHistory();
    };

    const changeFontSize = (size) => {
        setStyle((prevStyle) => ({ ...prevStyle, fontSize: size }));
        saveToHistory();
    };

    const changeFontSizeForAll = (size) => {
        setText((prevText) =>
            prevText.map((item) => ({
                ...item,
                style: {
                    ...item.style,
                    fontSize: size,
                },
            }))
        );
        saveToHistory();
    };

    const changeFontFamily = (font) => {
        setStyle((prevStyle) => ({ ...prevStyle, fontFamily: font }));
        saveToHistory();
    };

    const changeFontFamilyForAll = (fontFamily) => {
        setText((prevText) =>
            prevText.map((item) => ({
                ...item,
                style: {
                    ...item.style,
                    fontFamily: fontFamily,
                },
            }))
        );
        saveToHistory();
    };

    const colorOptions = [
        { value: "#000000", label: "Black" },
        { value: "#ff0000", label: "Red" },
        { value: "#00ff00", label: "Green" },
        { value: "#0000ff", label: "Blue" },
        { value: "#ffff00", label: "Yellow" },
        { value: "#ff00ff", label: "Magenta" },
        { value: "#00ffff", label: "Cyan" },
        { value: "#800000", label: "Maroon" },
        { value: "#808000", label: "Olive" },
        { value: "#008000", label: "Dark Green" },
        { value: "#000080", label: "Navy" },
        { value: "#808080", label: "Gray" },
    ];

    const fontOptions = [
        { value: "Arial, sans-serif", label: "Arial" },
        { value: "'Courier New', monospace", label: "Courier New" },
        { value: "'Times New Roman', serif", label: "Times New Roman" },
        { value: "'Georgia', serif", label: "Georgia" },
        { value: "'Verdana', sans-serif", label: "Verdana" },
        { value: "'Trebuchet MS', sans-serif", label: "Trebuchet MS" },
        { value: "'Comic Sans MS', cursive", label: "Comic Sans MS" },
        { value: "'Impact', sans-serif", label: "Impact" },
    ];

    const handelStyleForAll = () => {
        setStyleForAll((styleAll) => !styleAll);
    };

    return (
        <div className="toolbar">
            <button onClick={handelStyleForAll} className={`stylingKey ${styleAll ? "active" : ""}`}>Style All Text</button>
            <button onClick={handelUpperLowerCase} className='stylingKey'>{UpperLower ? "LowerCase" : "UpperCase"}</button>
            <button onClick={styleAll ? toggleBoldForAll : toggleBold} className='stylingKey'>Bold</button>
            <button onClick={styleAll ? toggleItalicForAll : toggleItalic} className='stylingKey'>Italic</button>
            <button onClick={styleAll ? toggleUnderlineForAll : toggleUnderline} className='stylingKey'>Underline</button>

            <select onChange={(e) => { styleAll ? changeColorForAll(e.target.value) : changeColor(e.target.value) }} value={style.color}>
                {colorOptions.map(color => (
                    <option key={color.value} value={color.value} style={{ color: color.value }}>
                        {color.label}
                    </option>
                ))}
            </select>

            <select onChange={(e) => { styleAll ? changeFontFamilyForAll(e.target.value) : changeFontFamily(e.target.value) }} value={style.fontFamily}>
                {fontOptions.map(font => (
                    <option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
                        {font.label}
                    </option>
                ))}
            </select>

            <select onChange={(e) => { styleAll ? changeFontSizeForAll(e.target.value) : changeFontSize(e.target.value) }} value={style.fontSize}>
                <option value="14px">12</option>
                <option value="16px">14</option>
                <option value="20px">16</option>
                <option value="30px">20</option>
                <option value="50px">24</option>
                <option value="70px">30</option>
                <option value="90px">34</option>
            </select>
        </div>
    );
};

export default StylingKeys