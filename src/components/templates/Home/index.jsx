import React, { useEffect, useState } from 'react';

const Home = () => {
  const [value, setValue] = useState('');

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
    <div className="App">
      <p key={value.id}>{value.joke}</p>
    </div>
  );
};

export default Home;
