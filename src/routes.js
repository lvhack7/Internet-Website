import Admin from './pages/Admin';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import DevicePage from './pages/DevicePage';
import Auth from './pages/Auth'; 
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REG_ROUTE, SHOP_ROUTE } from './utils/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REG_ROUTE,
        Component: Auth
    }
]

