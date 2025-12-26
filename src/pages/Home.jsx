import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';

const literaryWorks = [
  { id: 1, title: 'LAS NOCHES DE FLORES', author: 'César Aira' },
  { id: 2, title: 'DIARIO DE LA GUERRA DEL CERDO', author: 'Adolfo Bioy Casares' },
  { id: 3, title: 'CIRCE', author: 'Julio Cortázar' },
  { id: 4, title: 'EL NERVIO ÓPTICO', author: 'María Gainza' },
];

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
