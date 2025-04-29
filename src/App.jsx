import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThreeDots } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles/');
        const newsData = response.data.results;
        
        setNews(newsData);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        alert('Falha ao carregar as notícias. Tente novamente mais tarde.');
      }
    }
  
    loadNews();
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>
          {news.length === 0 ? (
            <div className='h-screen flex justify-center'>
              <ThreeDots
                visible={true}
                height='80'
                width='80'
                color='white'
                ariaLabel='oval-loading'
                wrapperStyle={{}}
                wrapperClass=''
              />
            </div>
          ) : (
            news.map((article, index) => (
              <Article
                key={index}
                image={article.image_url}
                title={article.title}
                subtitle={article.news_site}
                description={article.summary}
              />
            ))
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
