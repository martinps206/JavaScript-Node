import views from '../views/home.html'

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    const btnClick = divElement.querySelector('#btnClick');
    btnClick.addEventListener('click', () => {
        alert('Inscrbirse')
    })

    return divElement;
}