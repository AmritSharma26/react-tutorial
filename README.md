# This is React Tutorial

# 01 created creact app

-   `npx create-react-app 01-react-app`

    Installing react, react-dom, and react-scripts with cra-template...

    -   Not good way too bulky

-   build used when deploying

-   `npm create vite@latest`

-   library loose, framework strict

# 02 Understand the react flow and structure

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

# 03 creating own react library and jsx

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

# 04 Hooks and counter Project

-   react react on variable updation

-   data is updated through hooks

-   useState: propegate chage in UI

    ```javascript
    let [counter, setCounter] = useState(15);
    ```

-   When you call setCounter(counter + 1) multiple times in a row, React batches those updates

```javascript
const addValue = () => {
    setCounter(counter + 1); // 0 + 1 => 1
    setCounter(counter + 1); // still 0 + 1 => 1
};
```

-   Correct Way

```Javascript
    const addValue = () => {
        setCounter(prev => prev + 1);
        setCounter(prev => prev + 1);
    };
```

# Virtual DOM, fiber and reconscillation

-   createroot() -> bts create DOM like structure, then compare it with browser DOM and repaint only changes(reconcillation)

-   Reconciliation : changes between two UI states efficiently using tree

-   React fiber : help in hydration(attaching interactive JavaScript behaviors to server-rendered HTML)

    [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

-   use key in iteration to improve performance of list...

## 🔑 Key Features of React Fiber

-   **Incremental rendering**: Work is split into chunks, allowing React to render in steps rather than all at once.
-   **Pause, reuse, and abort rendering**: Rendering work can be paused, reused, or aborted as needed.
-   **Prioritized updates**: Assign priorities to updates for a smoother and more responsive UI.
-   **Concurrency support**: Enables concurrent rendering using primitives like `Suspense` and `startTransition`.

# 05 Tailwind and props

-   Install Tailwind

`npm install tailwindcss @tailwindcss/vite`

-   props - reusable components, pass value to components

    -   passing string, array, objects
    -   destructuring prop -> {, , }
    -   default value by = or ||
