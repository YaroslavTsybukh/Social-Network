import { Home } from './pages/home/Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Messages } from './pages/messages/Messages.tsx'
import { Message } from './pages/message/Message.tsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/messages' element={<Messages />} />
                <Route path='/message/:messageId' element={<Message />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
