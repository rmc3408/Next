//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'

export default function Home(props) {
  //console.log(props.articles);
  const x = 10;
  return (
    <div>
      <h1 className='title'>Hello</h1>
      <style jsx>
        {` .title {
            color: ${ x > 3 ? 'red' : ' blue'};
          }`
        }
      </style>
      <ArticleList articles={props.articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users?_limit=8');
  const articles = await result.json();
  
  return {
    props: {
      articles
    }
  };

}