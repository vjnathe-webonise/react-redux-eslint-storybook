import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

it('Dashboard componenet renders correctly', () => {
  const tree = renderer
    .create(
      <Router>
        <Dashboard />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
