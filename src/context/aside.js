/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState } from 'react'
const AsideContext = createContext()
const { Provider, Consumer } = AsideContext

const AsideProvider = ( {children} ) => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      image:'../assets/img/notice.png',
      title: 'Lorem Ipsum Dolor: Volutpat consequat',
      autor: 'por: Lorem Ipsum Dolor',
      score: 40,
      comments: 50,
      views: 75
    },
    {
      id: 2,
      image:'./assets/img/notice.png',
      title: 'Lorem Ipsum Dolor: Volutpat consequat',
      autor: 'por: Lorem Ipsum Dolor',
      score: 40,
      comments: 50,
      views: 75
    },
    {
      id: 3,
      image:'./assets/img/notice.png',
      title: 'Lorem Ipsum Dolor: Volutpat consequat',
      autor: 'por: Lorem Ipsum Dolor',
      score: 40,
      comments: 50,
      views: 75
    },
    {
      id: 4,
      image:'./assets/img/notice.png',
      title: 'Lorem Ipsum Dolor: Volutpat consequat',
      autor: 'por: Lorem Ipsum Dolor',
      score: 40,
      comments: 50,
      views: 75
    },
    {
      id: 5,
      image:'./assets/img/notice.png',
      title: 'Lorem Ipsum Dolor: Volutpat consequat',
      autor: 'por: Lorem Ipsum Dolor',
      score: 40,
      comments: 50,
      views: 75
    }
  ])
  return (
    <Provider
      value={{
       articles, setArticles
      }}
    >
      {children}
    </Provider>
  )
}
export { AsideProvider, Consumer as AsideConsumer, AsideContext}