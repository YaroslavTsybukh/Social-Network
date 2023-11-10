import { Home, Auth, Friends, Message, Profile, Messages, Register, NotFound } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './routes'
import { PrivateRoute } from './core/utils/router/privateRoute.tsx'
import { ResetPassword } from './pages/auth/ResetPassword.tsx'
import { AllUsers } from './pages/allUsers/AllUsers.tsx'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Auth />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
                <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
                <Route element={<PrivateRoute />}>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.SEARCH} element={<AllUsers />} />
                    {[ROUTES.PROFILE, `${ROUTES.USER}/:uid`].map((path, i) => (
                        <Route key={i} path={path} element={<Profile />} />
                    ))}
                    <Route path={ROUTES.MESSAGES} element={<Messages />} />
                    <Route path={`${ROUTES.MESSAGE}/:messageId`} element={<Message />} />
                    <Route path={ROUTES.FRIENDS} element={<Friends />} />
                </Route>
                <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
