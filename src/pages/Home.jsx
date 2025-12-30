import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { literaryWorks } from '../data/literaryWorks';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <div className="card-container">
          {literaryWorks.map((work) => (
            <Card key={work.id} id={work.id} title={work.title} author={work.author} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
