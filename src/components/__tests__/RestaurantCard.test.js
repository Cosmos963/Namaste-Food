import { render, screen } from '@testing-library/react';
import RestaurantCard, { withPromotedLabel } from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';
import { withPromotedLabel } from '../RestaurantCard';

// it('should render RestaurantCard component with props Data', () => {
//   render(<RestaurantCard resData={MOCK_DATA} />);

//   const name = screen.getByText("McDonald's");

//   expect(name).toBeInTheDocument();
// });

it('should render RestaurantCard component with Promoted label', () => {
  render(withPromotedLabel());

  const name = screen.getAllByText("Promoted");

  expect(name).toBeInTheDocument();
});