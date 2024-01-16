import { CORE_CONCEPTS } from "./data";
import { useState } from "react"; //all functions which start with use are hooks
import Header from "./components/Header/Header.jsx";
import { CoreConcept } from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(""); //useState is a hook that allows you to have state variables in functional components. 
  //useState returns a pair of values: the current state and a function that updates it.
  //what does <pre> tag do?
  //The <pre> tag defines preformatted text.

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }

  console.log("App component rendered");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />  //The spread operator is used to pass the whole object as props.
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic!</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

//q: difference between imperative and declarative programming? Explain.
//Imperative programming is when you tell the computer what to do and how to do it.
//Declarative programming is when you tell the computer what to do and it figures out how to do it.

export default App;
