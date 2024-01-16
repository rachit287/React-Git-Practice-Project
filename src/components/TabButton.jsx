export default function TabButton({children, onSelect, isSelected}){
  console.log('TabButton component rendered');
    return (
      <li>
        <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button> 
          //children is a prop that is passed to the TabButton component.
      </li>     

    );
  }


//what is the li tag's use in this piece of code? Explain. 
//The li tag is used to create a list of buttons.
//q: Will that list be vertical or horizontal? Explain.


  