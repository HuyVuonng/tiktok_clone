//Layouts
import { HeaderOnly } from '~/layouts';
import config from '~/config';

//Pages
import Home from '~/pages/home';
import Following from '~/pages/following';
import Upload from '~/pages/upload';
import Search from '~/pages/search';
import Profile from '~/pages/profile';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
