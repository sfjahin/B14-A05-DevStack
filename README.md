Name of the project: Tech Stacker



Description: Tech Stacker is a platform where you stake up your project technologies for convenience.
Technology used: React, Typescript, Tailwind Css, DaisyUI, JavaScript, React-Toastify (NPM Package), JSON (for technology data), Vite (build tool)



3 Features:
1) Add Technology Stacks
2) Remove
3) Remove All



1. What is JSX, and why is it used in React?
Jsx is a Javascript xml file which can combile html and javascript at the same time and they return inside a function.
2. What is the difference between props and state?
Props are kind of variable type values which can be passed from parent to child components, state on the other hand controls a condition or event with certain template function.
3. What does the useState hook do, and where did you use it in this project?
useState takes inital value of an action and also set value in certain condition. I used for updating events like tech stack elements addition and removal.
4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is similar to useState but it holds dependencies. Because fetching data is considered a side effect in React.
5. Why does every item in a .map() list need a unique key prop?
To keep them in unique sequence
6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering is kind of rendering which used when an event need multiple condition for showing up.
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
I pass data from parent to child by using props. Child can't sent something back to the parent, insted, Parent should take the thing from declaration.


