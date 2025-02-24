import './App.css';
import AddPost from './features/posts/AddPost';
import PostList from './features/posts/PostList';

function App() {
  return (
    <main className="App">
      <AddPost />
      <PostList />
    </main>
  );
}

export default App;
