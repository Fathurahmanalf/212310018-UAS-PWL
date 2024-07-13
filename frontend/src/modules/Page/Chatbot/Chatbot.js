import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(1);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const fetchInitialMessage = async () => {
      try {
        const response = await axios.post('http://localhost:5000/chatbot', { step });
        const { step: nextStep, question, options } = response.data;
        setMessages([{ from: 'bot', text: question, options }]);
        setStep(nextStep);
      } catch (error) {
        console.error('Error communicating with the chatbot:', error);
      }
    };

    fetchInitialMessage();
  }, []);

  

  const handleOptionClick = async (option) => {
    setMessages([...messages, { from: 'user', text: option }]);
    setUserInput('');

    try {
      const response = await axios.post('http://localhost:5000/chatbot', {
        step,
        response: option,
      });

      const { step: nextStep, question, options } = response.data;
      setMessages((prevMessages) => [
        ...prevMessages,
        { from: 'bot', text: question, options },
      ]);
      setStep(nextStep);
    } catch (error) {
      console.error('Error communicating with the chatbot:', error);
    }
  };

  return (
    <div className="mx-auto p-6 max-w-xxl">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="messages p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.from === 'bot' ? 'bg-gray-300' : 'bg-blue-500 text-white'} rounded-lg p-2 max-w-4xl mx-auto ${msg.from === 'bot' ? 'ml-auto' : 'mr-auto'}`}>
              <div dangerouslySetInnerHTML={{ __html: msg.text }} />
              {msg.options && (
                <div className="options-box mt-2 space-y-2">
                  {Object.keys(msg.options).map((option, idx) => (
                    <button key={idx} className="flex flex-col option-button bg-blue-500 text-white rounded-lg p-2 transition duration-300 hover:bg-blue-600 mx-1 w-1/2" onClick={() => handleOptionClick(option)}>
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
