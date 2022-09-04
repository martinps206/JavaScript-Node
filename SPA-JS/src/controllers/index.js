import Home from './home.controller.js';
import Posts from './posts.controller.js';
import notFound from './404.controller.js';
import Contact from './contact.controller.js';

const pages = {
    home: Home,
    posts: Posts,
    contact: Contact,
    notFound: notFound,
}

export {pages}