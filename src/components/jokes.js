import { useState, useEffect } from "react";

const url = "https://official-joke-api.appspot.com/random_joke";
const DailyFacts = () => {
  const [joke, setJoke] = useState({ general: "", punch: "" });
  const [loading, setLoading] = useState(false);
  const handleJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      const { setup, punchline } = data;
      setLoading(false);
      setJoke({ general: setup, punch: punchline });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleJoke();
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <h1 style={{ color: "green" }}>Please Wait...</h1>
        ) : (
          <div>
            <h1 style={{ color: "blue" }}>Your Daily Jokes</h1>
            <h2>Question: {joke.general}</h2>
            <h3>Answer: {joke.punch}</h3>
          </div>
        )}

        <button
          className={loading ? "btn btn-warning" : "btn btn-success"}
          onClick={handleJoke}
        >
          {loading ? "Loading..." : "Generate"}
        </button>
      </div>
    </>
  );
};

export default DailyFacts;
