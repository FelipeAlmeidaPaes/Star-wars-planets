import React from 'react'
import Box from "../components/Box/Box";
import renderer from "react-test-renderer";

it('renders correctly', () => {
  const tree = renderer
    .create(<Box />).toJSON();
  expect(tree).toMatchSnapshot();

})