import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '../../../routes'
import Cookies from 'js-cookie'

export const PrivateRoute = () => {
    const isAuth = Cookies.get('accessToken')
    return isAuth ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
}
