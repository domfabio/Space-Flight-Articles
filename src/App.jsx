import articlesData from './data/articlesData';
import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          {articlesData.map((article, index) => (
            <Article
              key={index}
              image={article.image}
              title={article.title}
              subtitle={article.subtitle}
              description={article.description}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
