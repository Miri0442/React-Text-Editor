import React, { useState } from 'react'
import '../keyBoard/KeyBoard.css'

function KeyBoard({ setText, style, saveToHistory }) {
    const [language, setLanguage] = useState('english');
    const [caps, setCaps] = useState(false);
    const [isSymbols, setIsSymbols] = useState(false);

    const emojiKeys = ["😂", "💖", "😍", "😎", "😭", "😴", "🤔", "💔", "❤️", "❤️‍🩹", "💯", "👍"];

    const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    const controlKeys = ['Symbols', 'Space', 'language'];

    const hebrewKeys = [
        ['ז', 'ש', 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
        ['CapsLock', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', 'Backspace'],
        ['Clear', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', 'Enter',],
    ];

    const englishKeys = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Backspace'],
        ['Clear', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter',],
    ];

    const upperEnglishKeys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Backspace'],
        ['Clear', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter',],
    ];

    const symbolKeys = [
        ['?', '!', '@', '#', '$', '%', '^', '&', '*', '('],
        ['CapsLock', '?', '/', '-', '=', '_', '+', ';', ':', 'Backspace'],
        ['Clear', '<', '>', '~', '|', '`', '^', '"', '{', '}', 'Enter'],
    ];

    // const hebrewKeys = [
    //     ['ז', 'ש', 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ'],
    //     ['ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף'],
    //     ['ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ']
    // ];

    // const controlKeys = ['Clear','CapsLock', Symbols', 'Space', 'language','Enter','Backspace'];

    // const englishKeys = [
    //     ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    //     ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    //     ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    // ];

    // const upperEnglishKeys = [
    //     ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    //     ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    //     ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    // ];

    // const symbolKeys = [
    //     ['?', '!', '@', '#', '$', '%', '^', '&', '*', '('],
    //     ['?', '/', '-', '=', '_', '+', ';', ':'],
    //     ['<', '>', '~', '|', '`', '^', '"', '{', '}']
    // ];

    const handleClear = () => {
        setText([]);
        saveToHistory();
    };

    const handleBackspace = () => {
        setText((prev) => prev.slice(0, -1));
        saveToHistory();
    };

    const handleEnter = () => {
        setText((prev) => [...prev, { sign: "\n", style }]);
        saveToHistory();
    };

    const handleSpace = () => {
        setText((prev) => [...prev, { sign: " ", style }]);
        saveToHistory();
    };

    const handleLanguageChanges = () => {
        setLanguage((prevLanguage) => (prevLanguage === "hebrew" ? "english" : "hebrew"));
    };

    const handleCapsLock = () => {
        setCaps((prevCaps) => !prevCaps);
    };

    const handleSymbols = () => {
        setIsSymbols((prevSymbols) => !prevSymbols);
    };

    const handleKeyPress = (key) => {
        if (keyActions[key]) {
            keyActions[key]();
        } else {
            setText((prev) => [...prev, { sign: key, style: style }]);
            saveToHistory();
        }
    };

    const keyActions = {
        language: handleLanguageChanges,
        Clear: handleClear,
        Backspace: handleBackspace,
        Space: handleSpace,
        Enter: handleEnter,
        CapsLock: handleCapsLock,
        Symbols: handleSymbols,
    };

    const getKeyClass = (key) => {
        switch (key) {
            case 'language': return 'language';
            case 'Clear': return 'clear';
            case 'Backspace': return 'backspace';
            case 'Space': return 'space';
            case 'Enter': return 'enter';
            case 'CapsLock': return `capslock ${caps ? 'active' : ''}`.trim();
            case 'Symbols': return isSymbols ? 'active' : 'symbols';
            default: return '';
        }
    };

    const getKeyLayout = () => {
        const mainKeys = isSymbols ? symbolKeys : (caps ? upperEnglishKeys : (language === "hebrew" ? hebrewKeys : englishKeys));
        return [
            emojiKeys,
            numberKeys,
            ...mainKeys,
            controlKeys
        ];
    };

    return (
        <div className='keyBoard'>
            {getKeyLayout().map((row, rowIndex) => (
                <div key={rowIndex} className="keyBoard-row">
                    {row.map((key, keyIndex) => (
                        <button key={keyIndex} className={`key ${getKeyClass(key)}`} onClick={() => handleKeyPress(key)}>
                            {key === 'Space' ? '' : key === 'language' ? (language === 'hebrew' ? 'English' : 'עברית') : key}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default KeyBoard