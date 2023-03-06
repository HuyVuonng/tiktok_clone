//Layouts
import { HeaderOnly } from '~/component/Layout';
import routesConfig from '~/config/routes';

//Pages
import Home from '~/pages/home';
import Following from '~/pages/following';
import Upload from '~/pages/upload';
import Search from '~/pages/search';
import Profile from '~/pages/profile';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
