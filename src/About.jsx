import {Link} from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1> About Page</h1>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
      </ul>
    </div>
  );
}
