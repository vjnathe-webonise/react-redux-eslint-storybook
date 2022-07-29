import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="user">Users</Link> | <Link to="login"> Login</Link>
      </nav>
    </div>
  );
}
