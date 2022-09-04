import viewss from '../views/contact.html'

export default () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = viewss;

    return divElement;
}