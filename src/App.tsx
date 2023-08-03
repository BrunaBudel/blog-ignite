import {Post, PostType} from "./components/Post";
import { Header } from "./components/header";
import { Sidebar } from "./components/SideBar";


import './global.css';
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO - Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 '}, 
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content:'👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-07-10 10:11:47')
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Instrutor - Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 ' }, 
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content:'👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-07-12 08:00:38')
  }
]

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return ( 
            <Post
              key={post.id}
              post={post}
            />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}

