import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        name: "Mariana Lima",
        avatarUrl: "http://github.com/Marianaa93.png",
        role: "Web Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa" },
        {
          type: "paragraph",
          content:
            "👋 Acabei de subir mais um projeto no meu portifa. É um projeto que ,fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "link",
          content: "👉 jane.design/doctorcare",
        },
      ],
      publishedAt: new Date("2023-07-27 13:56:00"),
    },
    {
      id: 2,
      author: {
        name: "Bárbara Santos",
        avatarUrl: "http://github.com/Santos1000.png",
        role: "Web Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa" },
        {
          type: "paragraph",
          content:
            "👋 Acabei de subir mais um projeto no meu meu Portifólio. O nome do projeto é Arquitect 🚀",
        },
        {
          type: "link",
          content: "👉 barbara.design/arquitect",
        },
      ],
      publishedAt: new Date("2023-07-26 11:06:00"),
    },
    {
      id: 3,
      author: {
        name: "Marcello Aragoni",
        avatarUrl: "http://github.com/MarcelloAragoni.png",
        role: "Web Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa" },
        {
          type: "paragraph",
          content:
            "👋 Acabei de subir mais um projeto no meu portifólio. O nome do projeto é Pokédex 🚀",
        },
        {
          type: "link",
          content: "👉 marcello.design/Pokédex",
        },
      ],
      publishedAt: new Date("2023-07-27 12:06:00"),
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
