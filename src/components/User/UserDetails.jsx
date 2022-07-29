import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function UserDetails() {
  const params = useParams();
  return (
    <>
      <Link to="/user">Back</Link>
      <h1>User Details of ID: {params.id} </h1>
    </>
  );
}
