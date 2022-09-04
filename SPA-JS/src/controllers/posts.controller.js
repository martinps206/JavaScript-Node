import view from '../views/posts.html'

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json(); 
}

export default async () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view;
    
    const postsElement = divElement.querySelector('#posts')
    const totalPost = divElement.querySelector('#total');
    const posts = await getPosts();

    totalPost.innerHTML = posts.length;

    posts.forEach(posts => {
        postsElement.innerHTML += `<li>
                                        <h5>${posts.title}</h5>
                                        <p>${posts.body}</p>
                                    </li>`
    });

    return divElement;
}