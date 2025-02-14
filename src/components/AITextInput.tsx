import React, { useState, useEffect } from "react";

const AITextInput = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSuggestion = async () => {
    if (!input) return;

    setLoading(true);
    setSuggestion(""); // Reset previous suggestion

    try {
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "mistral",
          prompt: `Complete the following phrase: "${input}"`,
          stream: true, // Enables streaming
          max_tokens: 20,
        }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const parsedChunk = JSON.parse(chunk);
        const responseText = parsedChunk.response;
        accumulatedText += responseText; // Append new text as it arrives
        console.log("Accumulated text:", responseText);
        setSuggestion(accumulatedText);
      }
    } catch (error) {
      console.error("Error fetching suggestion:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        fetchSuggestion();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Start typing..."
        rows={4} // You can adjust the number of rows as needed
      />
      {loading && <p className="text-gray-400">Generating...</p>}
      {suggestion && (
        <span className="absolute top-2 left-2 text-gray-400">
          {input}
          <span className="text-gray-600">{suggestion}</span>
        </span>
      )}
    </div>
  );
};

export default AITextInput;