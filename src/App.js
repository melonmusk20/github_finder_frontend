import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {

    try {

      const res = await axios.get(
        "http://localhost:8080/github/history"
      );

      setHistory(res.data.reverse());

    } catch (err) {

      console.log(err);
    }
  };

  const searchProfile = async () => {

    if (!username) return;

    try {

      setLoading(true);
      setError("");

      const response = await axios.get(
        `http://localhost:8080/github/${username}`
      );

      setProfile(response.data);

      fetchHistory();

    } catch (err) {

      setError("User not found");
      setProfile(null);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="container">

      <h1>GitHub Profile Finder</h1>

      <div className="search-box">

        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={searchProfile}>
          Search
        </button>

      </div>

      {loading && <div className="spinner"></div>}

      {error && <p>{error}</p>}

      {profile && (

        <div className="card">

          <img
            src={profile.avatar_url}
            alt="profile"
          />

          <h2>{profile.name}</h2>

          <p>@{profile.login}</p>

          <p>{profile.bio}</p>

          <p>Followers: {profile.followers}</p>

          <p>Following: {profile.following}</p>

          <p>Public Repos: {profile.public_repos}</p>

          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub Profile
          </a>

        </div>
      )}

      <div className="history">

        <h3>Recent Searches</h3>

        {history.length === 0 ? (
          <p>No searches yet</p>
        ) : (

          history.map((item) => (

            <p key={item.id}>
              {item.username}
            </p>
          ))
        )}

      </div>

    </div>
  );
}

export default App;

