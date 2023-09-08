import { Home } from './pages/home/Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Messages } from './pages/messages/Messages.tsx'
import { Message } from './pages/message/Message.tsx'
import { Friends } from './pages/friends/Friends.tsx'
import { Profile } from './pages/profile/Profile.tsx'
import { Auth } from './pages/auth/Auth.tsx'
import { Register } from './pages/register/Register.tsx'
import { ROUTES } from './routes'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Auth />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />

                <Route path={ROUTES.HOME} element={<Home />} />
                {[ROUTES.PROFILE, `${ROUTES.FRIEND}/:friendId`].map((path, i) => (
                    <Route key={i} path={path} element={<Profile />} />
                ))}
                <Route path={ROUTES.MESSAGES} element={<Messages />} />
                <Route path={`${ROUTES.MESSAGE}/:messageId`} element={<Message />} />
                <Route path={ROUTES.FRIENDS} element={<Friends />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
