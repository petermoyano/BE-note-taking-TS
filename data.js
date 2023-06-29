export const seedDB = `\c notes

DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS tags;

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    label VARCHAR(255) NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    markdown TEXT,
    tagIds INTEGER, FOREIGN KEY (tagIds) REFERENCES tags(id)
);

INSERT INTO tags (label) VALUES
  ('React'),
  ('JavaScript'),
  ('CSS'),
  ('TypeScript'),
  ('Excercise');
  
INSERT INTO notes (title, markdown, tagIds) VALUES
(
        'State is tied to a position to a DOM tree.',
        'It means that React associates each piece of state with the correct component by where the component sits in the UI tree. Same component at the same position preserves state! Use keys to help React distinguish between same components at the same position in the UI tree.',
        1
    ),
    (
        'What are the 5 possible states of the position property?',
        'static (default), relative, absolute, fixed (you always see it), sticky (mix between absolute and fixed)',
        3
    ),
    (
        'What is the purpose of the npm manager. Why do we need it?',
        'It''s used to install and manage dependencies, like React or Next',
        1
    ),
    (
        'Name 2 examples of pesudo-classes and pseudo-elements',
        ':hover and :focus. ::before, ::after and ::first-line',
        3
    ),
    (
        'What are the 3 parts of a JWT?',
        'header, payload and signature. They are not encrypted! Everyone can see the content of the payload.',
        1
    ),
    (
        'Can you explain the 4 steps for an app to use JWT?',
        '1- The react app asks for the JWT, 2- The auth server provides it, 3- The app stores the JWT and re sends it with all requests, 4- The back end app verifies the JWT using the public key',
        1
    ),
    (
        'What is the difference between inline and inline-block?',
        '',
        3
    ),
    (
        'What are the possible values of the display property?', 
        'block (respects width and height), inline (ignores width and height), inline-block (side-by-side and respects width nd height), none, flex, inline-flex, grid, inline-grid, table, and many many more',
        3
    ),
    ( 'What does the new keyword does?', '', 2 ),
    (
        'What is the difference between .bind(), .call() and .apply() methods when using the this keyword?',
        '.bind() creates a function that has a permanent value of this. Apply and call both call the function with the specified value of this but it''s a one time thing. Apply accepts an array of arguments while .call accepts them individually. The value of this is defined uppon function execution!',
        2
    ),
    (
        'What is an implicit global variable',
        'When you skip var, let or const (by mistake) your variable is in the global scope',
        2
    ),
    (
        'What does use strict does in JavaScript?',
        'Makes some simple mistakes an error: Accessing a variable before definition, accessing a property in an object that does not exist, this is undefined unless explicitly defined',
        2
    ),
    (
        'Breefly explain how promises are made and handled.',
        'They are created with the new keyword, and the callback when creating it recieves 2 parameters functions (rersolve and reject). When the promise is consumed, the first state is pending and then it can change to fullfilled or rejected. You then call .then (recieves data) and .catch (recieves error) on it, to execute a callback in each case. Whatever resolve returns will be available for .then, and same thing with reject() and .error',
        2
    ),
    (
        'Name 2 key differences between var vs (let and const).',
      'Variables declared with var get hoisted and are funciton scoped. With let and const they don''t get hoisted and are block scoped',
      2
    ),
    (
        'What are the 7 primitive data types in JavaScript?',
      'string, number, boolean, null, undefined, BigInt, symbol',
      2
    ),
    (
      'Define scope in 2 words',
      'Variable visibility or context of execution',
       2
    ),
    (
        'What are the 5 falsy values of JavaScript',
      '0, false, '''', null, undefined, NaN',
      2
    ),
    (
        'What are th 5 SOLID principles of OOP?',
      'Single responsibility(a class should do one thing only), Open-closed (open for extension and closed for modification, Liskov subsitution (subclasses should be subsituble for parent classes), Interface segregation (classes should not inherit methods or properties that they won''t use), Dependency inversion (abstractions should not depend on details, but details should depend on abstracions)',
      2
    ),
    (
        'What are 3 class modifiyers and what do they do?', 
        'Public(available everywhere), private (available inside the class only), and private (available for choldren classes also)',    
        4
    ),
    (
        'What are the 4 principles of OOP? Explain breefly each one.',
        'Inheretance (classes can use extends), encapsulation (hiding functionality, use closures or private class fields), Polymorphism (objects can take many forms, use method overloading (methods with same names but different arguments) or overriding (redefine a method coming from a parent class)) and abstraction (use abstract classes ignoring non-essential details)',
        2
        ),
        (
            'What does response.json() does',
      'Returns a promise that resolves to a JavaScript object. It parses the json text from the body of the response int  a JavaScript object',
      2
    ),
    (
        'What are closures in JavaScript?',
      'A closure is a function that has access to an outer enclosing funcion scope, even after the outer function has returned',       
      2
    ),
    (
        'Give an example of a HOF in JavaScript',
      'Array.map() and Array.filter()',
      2
    ),
    (
        'What is the Virtual Dom',
      'Before react updates the DOM it will compare changes with the Virtual DOM and update only the differences. It is used to minimize changes that need to be made in the acutal DOM',
      1
    ),
    (
        'How can you manipulate directly the HTML in React?',
      'By using the useRef hook, which returns a mutable ref object, that you can use to reference a DOM element that persists across re-renders.',
      1
    ),
    (
        'Explain how the useRef hook is used.',
        'You create your ref object by calling useRef, then you reference DOM element in your JSX and then change the current.innerHTML (for example) property of the ref object',
            1
    ),
    ( 'What is state?', '', 1 ),
    (
        'What is an updater function in react',
      'You pass a function to setState instead of a value. The updater function will recieve the old state and react will run them in aqueue, one at a time',
      1
    ),
    (
        'How does react compare old and new values of state, and why does it compares in the first place',
      'Object.is comparison, and if true skips re-rendering. It does it for performance reasons',
      1
    ),
    (
        'Does react batch state updates?',
      'Yes, after all event handlers have run, and called their setState functions. This is to prevent multiple re-renders during one event',
      1
    ),
    (
        ' What is a synthetic event?',
      'It''s a wrapper for regular events that allows react to be faster(event pooling) and more reliable (stable API for browser support)',
      1
    ),
    (
      'React will re-render it and all it''s children. Great way to reset a component to its original state',
      'What happens if a key changes for a component?',
      1
    ),
    (
        'What are the bennefits of syntetic events?',
      'Cross browser support, enables event pooling (reusing events for perfomance, use e.persist() to access the event properties in consol, otherwise they will be turn to null)',
      1
    ),
    (
        'The docs recommend setting state inside of...',
      'Event handlers',
      1
    ),
    (
      'Pass a different key or execute an empty return statement',
      'Besides state, or props changing there are 2 ways to make a component re-render',
      1
    ),
    (
      'React.suspense, useMemo, useCallback, Lazy loading components, using react fragments',
      'Name a few techniques to optimize react performance',
      1
    ),
    (
      'The process of react comparing virtual dom after a prop or component changes to see if a re-render is necesary',
      'What is reconciliation?',
      1
    ),
    (
        'What are HOC?',
      'A component that returns a new component. Some use cases are: Conditionally rendering components, changing the styles of components, showing a loader while data is being fetched.',
      1
    ),
    (
        'What does typeof NaN returns',
      'typeof NaN returns "number"!!',
      1
      );`;
