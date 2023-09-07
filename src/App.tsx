import { Home } from './pages/home/Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Messages } from './pages/messages/Messages.tsx'
import { Message } from './pages/message/Message.tsx'
import { Friends } from './pages/friends/Friends.tsx'
import { Profile } from './pages/profile/Profile.tsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                {['/profile', '/friend/:friendId'].map((path, i) => (
                    <Route key={i} path={path} element={<Profile />} />
                ))}
                <Route path='/messages' element={<Messages />} />
                <Route path='/message/:messageId' element={<Message />} />
                <Route path='/friends' element={<Friends />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
