import { Link } from 'react-router-dom';

export default function UserList() {
  return (
    <>
      <Link to="/">Home</Link>
      <h1>User List</h1>
      <ul>
        {[1, 2, 3].map((uid) => (
          <li key={uid}>
            <Link to={`/user/${uid}`}>User{uid}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
