import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-02-24T00:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const about = [
  {
    key: 'Age',
    value:<Age/>
  },
  {
    key: 'Name',
    value:'Rama Sapto Pamungkas'
  },
  {
    key: 'Job',
    value:'Web Developer'
  },
  {
    key: 'Country',
    value:'Indonesia'
  },
  {
    key: 'City',
    value:'Jakarta'
  },
  {
    key: 'Email',
    value:'ramasapto@gmail.com'
  },
]

export default about