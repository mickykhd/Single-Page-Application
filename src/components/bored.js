import { useState, useEffect } from "react";
const url = "https://www.boredapi.com/api/activity";
const Bored = () => {
  const [bored, setBored] = useState({ activity: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleBored = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      const { type, activity } = data;
      setLoading(false);
      setBored({ activity, type });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleBored();
  }, []);

  return (
    <>
      {loading ? (
        <h1 style={{ color: "red" }}>Loading Task...</h1>
      ) : (
        <div>
          <h1>Getting Bored ???</h1>
          <h4>Let's Do Somehting...</h4>
          <div className="task-container">
            <h2> {bored.activity}</h2>
            <h2>Type: {bored.type}</h2>
          </div>
        </div>
      )}
      <button
        className={loading ? "btn btn-danger" : "btn btn-primary"}
        onClick={handleBored}
      >
        {loading ? "Generating Task" : "Get Task"}
      </button>
    </>
  );
};

export default Bored;
