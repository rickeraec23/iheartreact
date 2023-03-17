import HeartLogo from "./heart.svg";
import "./App.css";

const message = "cool cud";
// ---psudeo code to help me understand concepts *PLEASE IGNORE COMMENTS* ---
// functional react is literally that -functions
// const add = (a, b) => {
//   return (a + b);
// };

const Heart = (props) => {
  return (
    <div className="heart">
      <img className="heart-img" src={HeartLogo} alt="heart" />
      <p className="heart-message">{props.msg}</p>
    </div>
  );
};

const Header = (props) => {
  return <div className="App-header">I ❤️ React</div>;
};

function App() {
  // add(1, 1) (goes with function on lines 5-7)
  // <Header /> and <Heart.../> are custom components.
  // We create a custom component by declaring a function that starts with a
  // capital letter, takes in props, and returns JSX.
  // This is declared on line 7-14. On line 24 we are calling that function which
  // returns our JSX.
  return (
    <>
      <Header />
      <Heart msg={message} />;
    </>
  );
}

export default App;
