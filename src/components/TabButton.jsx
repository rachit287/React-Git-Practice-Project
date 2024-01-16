export default function TabButton({children, onSelect, isSelected}){
  console.log('TabButton component rendered');
    return (
      <li>
        <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button> 
      </li>     

    );
  }


const ARRAY_FOR_FUN = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//what is the li tag's use in this piece of code? Explain. 
//The li tag is used to create a list of buttons.
//q: Will that list be vertical or horizontal? Explain.


  