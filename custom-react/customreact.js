function customrender(reactelem,container){
    // const domelem=document.createElement(reactelem.type)
    // domelem.innerHTML=reactelem.children
    // domelem.setAttribute("href",reactelem.props.href)
    // domelem.setAttribute("target",reactelem.props.target)
    // container.appendChild(domelem)
    // modularized code


    const domelem=document.createElement(reactelem.type)
    domelem.innerHTML=reactelem.children

    for (const prop in reactelem.props) {
        domelem.setAttribute(prop,reactelem.props[prop])
        console.log(reactelem.props[prop])
    }
    container.appendChild(domelem)

}
const reactelem = {
    type:"a",
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    children: "click me to visit google.com"
}

const container = document.getElementById("root")
customrender(reactelem,container)


