import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1)); 
}

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// export function App()
// {
//     const [selectedTopic, setSelectedTopic] = useState(false);

//     function handleClick()
//     {
//       setSelectedTopic(true);
//     }

//     return (
//       <div>
//         <section>
//           <ul>
//             <li>
//               <h1 onClick={() => handleClick()}>Work harder than everyone else on the planet.</h1>
//             </li>
//           </ul>
//         </section>
//       </div>
//     );
// }