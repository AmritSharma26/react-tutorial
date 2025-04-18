# This is React Tutorial

## 01 created creact app

-   `npx create-react-app 01-react-app`

    Installing react, react-dom, and react-scripts with cra-template...

    -   Not good way too bulky

-   build used when deploying

-   `npm create vite@latest`

-   library loose, framework strict

## 02 Understand the react flow and structure

-   react DOM implementation of react on web, native on mobile

-   basic react

    -   all work in public and scr
    -   index.html -> #root
    -   index.js -> renders in root element (func ke andar html dal ke render)
    -   react-screipt - load index.js in index.html

-   vite
    -   direct load js in html file
    -   directly getelement.render app
-   created chai component
-   one fragment
-   component name camelCase

## 03 creating own react library and jsx

-   create a react custom element - how reacts takes elements
-   created func that render element into container/root

-   vite

    -   create MyApp func return html -> render MyApp()/ <MyApp/>

    -   how reacts aspects elements behind the scene

        ```javascript
        const customElementreact = React.createElement(
            "a",
            { href: "https://youtube.com", target: "_blank" },
            "Visit YouTube customElementreact",
            username
        );
        ```

-   {} -> evaluated expression javascript, variable

-   looked react source code
