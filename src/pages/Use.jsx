import React from 'react'

function Use() {
    // First Learning 
    useCallback(() => {
        return a + b
    }, [a, b])
    //   returns the same function every time unless a or b changes.

    useMemo(() => {
        return () => a + b
    }, [a, b])
    //   runs the function immediately and stores its result (which in this case, happens to be another function).


    //   Second Learning
    function Parent() {
        function sayHello() {
            alert("Hello from Parent!");
        }

        return <Child doSomething={sayHello} />;
    }

    function Child({ doSomething }) {
        return <button onClick={doSomething}>Click me</button>;
        // when clicked the function will run
    }
}
//   Fixed with useCallback
// Every time Parent re-renders, it creates a new function, which can make Child re-render unnecessarily.
// To stop this, we use useCallback() so React remembers the function and doesn’t create a new one every time.


function Parent() {
    const sayHello = useCallback(() => {
        alert("Hello from Parent!");
    }, []);

    return <Child doSomething={sayHello} />;
}


// Lazy Loading 

// Normal import
import MarkdownPreview from './MarkdownPreview.js';

//  import with lazy, it will only load once the user needs it
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

// Suspense

{/* <Suspense fallback={<Loading />}>
  <MarkdownPreview />
</Suspense> */}

// You can use something else instead of <Loading /> since its a component you creat yourslf
// You can have it as a gif or image or whatever you want pretty sure you can even make animations for it

{/* <Suspense fallback={<img src="spinner.gif" alt="Loading..." />}>
  <MarkdownPreview />
</Suspense> */}

// If markdown is still loading it will show loading if not then it will display whats in the mardown page
// Once its done it will replace loading with markdown thus showing the info


export default Use