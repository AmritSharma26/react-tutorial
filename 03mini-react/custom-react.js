

mainContainer = document.querySelector('#root')

function customRender(element, container){
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    // domElement.setAttribute('href', element.props.href)
    // domElement.setAttribute('target', element.props.target)

    for(const prop in element.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, element.props[prop])
    }
    container.appendChild(domElement)
}


const customElement = {
    type : 'a',
    props : {
        href : 'https://youtube.com',
        target : '_blank'
    },
    children: 'Click me to visit YouTube'
}

customRender(customElement, mainContainer)