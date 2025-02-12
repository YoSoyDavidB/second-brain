import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default Home;
