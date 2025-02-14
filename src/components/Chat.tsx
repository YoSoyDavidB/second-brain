import React, { useState } from 'react';

const Chat = () => {
  interface Message {
    text: string;
    sender: string;
  }
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    // Add the user's message to the chat
    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Send the message to the backend (Mistral AI)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const aiMessage = { text: data.reply, sender: 'ai' };

      // Add the AI's response to the chat
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
    }

    setInput('');
  };

  return (
    <div className="flex flex-col w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto mb-4">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}>
              <div
                className={`p-3 rounded-lg max-w-xs ${msg.sender === 'ai' ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-lg border-gray-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;