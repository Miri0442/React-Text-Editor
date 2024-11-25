import { useState } from 'react'
import './App.css'
import KeyBoard from './components/keyBoard/KeyBoard'
import TextArea from './components/textArea/TextArea'
import StylingKeys from './components/stylingKeys/StylingKeys'

function App() {
  const [history, setHistory] = useState([]);
  const [text, setText] = useState([]);
  const [style, setStyle] = useState({
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '22px',
    fontFamily: 'Arial, sans-serif',
  });

  const saveToHistory = () => {
    setHistory(prevHistory => [
      ...prevHistory,
      { text: JSON.parse(JSON.stringify(text)) },
    ]);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1];
      setText(lastState.text);
      setStyle(lastState.text[text.length - 1].style);
      setHistory(prevHistory => prevHistory.slice(0, -1));
    }
  };

  return (
    <>
      <div className='layOut'>
        <TextArea text={text} />
        <StylingKeys setStyle={setStyle} style={style} setText={setText} saveToHistory={saveToHistory} />
        <KeyBoard setText={setText} style={style} saveToHistory={saveToHistory} />
        <button onClick={handleUndo} className="undoButton">Undo</button>
      </div>
    </>
  )
}

export default App