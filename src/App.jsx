import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import HomePage from './routes/HomePage';
import SingleTodo from "./routes/SingleTodo";
import AllTodos from "./routes/AllTodos";


function App() {
    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="single-todo" element={<SingleTodo/>}/>
                    <Route path="single-todo/:id" element={<SingleTodo/>}/>
                    <Route path="all-todos" element={<AllTodos/>}/>
                </Routes>
            </main>
        </>
    );
}

export default App;
