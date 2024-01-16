export function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

//what is the difference between export function and export default function? Explain.
//export function is used when you want to export multiple functions from a file.
//export default function is used when you want to export only one function from a file.