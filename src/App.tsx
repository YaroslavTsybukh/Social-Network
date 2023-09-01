import { Home } from './pages/home/Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Messages } from './pages/messages/Messages.tsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/messages' element={<Messages />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
