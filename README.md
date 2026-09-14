Name of the project: Tech Stacker



Description: Tech Stacker is a platform where you stake up your project technologies for convenience.
Technology used: React, Typescript, Tailwind Css, DaisyUI, JavaScript, React-Toastify (NPM Package), JSON (for technology data), Vite (build tool)



3 Features:
1) Add Technology Stacks
2) Remove a Stack
3) Remove All



1. What is JSX, and why is it used in React?

Answer:
JSX stands for JavaScript XML. It allows us to write HTML-like syntax inside JavaScript. React uses JSX to make building and describing the UI easier and more readable.

2. What is the difference between props and state?

Answer:
Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time and cause the component to re-render.

Easy way to remember:

Props → Received from parent
State → Managed by the component
3. What does the useState Hook do, and where did you use it in this project?

Answer:
useState is a React Hook used to create and manage state in a component. It takes an initial value and returns the current state value and a setter function.

I used it to update the tech stack when elements were added or removed.

const [stack, setStack] = useState([]);

Here:

stack → Current state value
setStack → Function used to update the state
4. What does the useEffect Hook do, and why did you need it to load the JSON data?

Answer:
useEffect is a React Hook used to perform side effects, such as fetching data, API calls, timers, and subscriptions.

I used useEffect to fetch and load JSON data because fetching data is considered a side effect in React.

useEffect(() => {
    fetch('/data.json')
        .then(res => res.json())
        .then(data => setPlayers(data));
}, []);

The empty dependency array [] means the effect runs after the component's initial render.

5. Why does every item in a .map() list need a unique key prop?

Answer:
A unique key helps React identify each list item and efficiently update the UI when items are added, removed, or changed.

Example:

players.map(player => (
    <PlayerCard 
        key={player.id} 
        player={player} 
    />
))

Here, player.id uniquely identifies each player.

6. What is conditional rendering? Show one place you used it.

Answer:
Conditional rendering means displaying different UI elements based on a condition.

For example, I showed an empty stack message when the tech stack was empty.

{stack.length === 0 && (
    <p>Your stack is empty.</p>
)}

Another example:

{isLoggedIn ? <Dashboard /> : <Login />}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Answer:
A parent passes data to a child using props.

To send data from the child back to the parent, the parent can pass a callback function as a prop, and the child can call that function with the required data.

Parent
function Parent() {
    const handleData = (data) => {
        console.log(data);
    };

    return <Child sendData={handleData} />;
}
Child
function Child({ sendData }) {
    return (
        <button onClick={() => sendData("Hello")}>
            Send
        </button>
    );
}

Easy way to remember:

Parent → Child: Props
Child → Parent: Callback function through props

