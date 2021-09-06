import React, { useEffect, useState } from 'react';
import { Card } from '../../Card/';
const Home = () => {
  const [value, setValue] = useState({});

  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=John&lastName=Doe`);
    const data = await response.json();

    console.log(data);
    setValue(data.value);
  };
  return (
    <>
      <Card value={value} />
    </>
  );
};

export default Home;
