import React from 'react';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/api/test');
  const data = await res.json();
  console.log('data  ===>', data);

  return {
    props: { testData: data },
  };
};

const challengeOne = ({ testData }) => {
  return (
    <div>
      <h1> Test Data</h1>
      {JSON.stringify(testData)}
    </div>
  );
};

export default challengeOne;
