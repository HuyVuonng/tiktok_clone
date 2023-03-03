//Layouts
import { HeaderOnly } from '~/component/Layout';

//Pages
import Home from '~/pages/home';
import Following from '~/pages/following';
import Upload from '~/pages/upload';
import Search from '~/pages/search';
import Profile from '~/pages/profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/folowing', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
