import './App.css'
import Header from './components/Header'
import Post from './components/Posts.jsx'
import {Routes, Route} from "react-router-dom";
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './context/UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost.jsx';


function App() {
   return (
     <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/create'} element={<CreatePost />} />
          <Route path={'/post/:id'} element={<PostPage/> } />
          <Route path={'/edit/:id'} element={<EditPost/> } />
          <Route path={'/delete/:id'} element={<DeletePost />} />
        </Route>
      </Routes>
     </UserContextProvider>
  )
}

export default App
