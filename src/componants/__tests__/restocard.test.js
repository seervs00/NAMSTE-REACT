
import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';

it('should render RestaurantCard component with props Data', () => {
  render(<RestaurantCard resinfo={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");

  expect(name).toBeInTheDocument("McDonald's");
  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});
