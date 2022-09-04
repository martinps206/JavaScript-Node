import {pages} from '../controllers/index.js'

let content = document.getElementById('root');

const router = async (route) => {
    console.log(route);

    content.innerHTML = "";
    switch (route) {
        case '#/': {
            return content.appendChild(pages.home());
        }
        
        case "#posts": {
            return content.appendChild(await pages.posts());
        }
            
    
        case '#contact': {
            return content.appendChild(pages.contact());
        }
        
        default:
            return content.appendChild(pages.notFound());
        
    }
}

export{router};