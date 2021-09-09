import React, { useEffect, useState } from 'react';
import { Buttonn } from '../../Button';
import { Card } from '../../Card/';
import { Icon } from '../../Icon';

const Home = () => {
  const [value, setValue] = useState({});

  const head = {
    title: 'ChuckNorris - Não mexe com quem ta quieto!',
  };
  //utilizado para o fetch dos dados
  useEffect(() => {
    getValue();
  }, []);

  // utilizando para o title
  useEffect(() => {
    document.title = `${head.title}`;
  });

  const getValue = async () => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=John&lastName=Doe`);
    const data = await response.json();

    setValue(data.value);
  };

  return (
    <>
      <Icon />
      <Buttonn />
      <Card value={value} />
    </>
  );
};

export default Home;
