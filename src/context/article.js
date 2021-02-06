import React,  { useState, useEffect, createContext } from 'react'
import axios from 'axios'
const ArticleContext = createContext()

const { Provider, Consumer } = ArticleContext

const ArticleProvider = ( { children } ) => {
  const [article, setArticle] = useState([])

  useEffect(() => {
    const getArticle = async()=> {
      const url ='../assets/article.json'
      const response = await axios(url)
      setArticle(response.data)
    }
    getArticle()
  },[])
  return (
    <Provider
      value = {{
        article
      }}
    >
      { children }
    </Provider>
  )
}
export { ArticleProvider, Consumer as ArticleConsumer, ArticleContext }