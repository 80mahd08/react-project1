import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/main.css";
import "./css/FHF.css";



const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<App />);

// const root2 = ReactDOM.createRoot(document.getElementById('root2'))
// root2.render(
//     <>
//         <h1 style={{ color: "red" , fontSize: 4 + "em" }}>hello mom</h1>
//         <Span />
//     </>
// ) 

// function Span() {
//     return(
//         <span>hello man</span>
//     )
// }