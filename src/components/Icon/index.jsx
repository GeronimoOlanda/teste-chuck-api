import React from 'react';
import Favicon from 'react-favicon';

export const Icon = () => {
  const urlIcon =
    'https://cdn.dribbble.com/users/1774513/screenshots/3726127/chucknorris-02.jpg?compress=1&resize=400x300';

  return <Favicon url={`${urlIcon}`} />;
};
