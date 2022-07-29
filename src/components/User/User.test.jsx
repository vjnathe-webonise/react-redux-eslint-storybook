import renderer from 'react-test-renderer';
import UserList from './UserList';
import UserDetails from './UserDetails';
import { BrowserRouter as Router } from 'react-router-dom';

it('UserList componenet renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <UserList />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('UserDetails componenet renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <UserDetails />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
