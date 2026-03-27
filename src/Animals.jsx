// rendering a list of elements (pretty straightforward)

export function ElementAnimals() {
  
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {/* note the curly brackets, which means JS code */}
        {animalsList}
      </ul>
    </div>
  );
}


///////////////////////////////////////////////////////////////////////////////////////


// rendering a list of components

// helper method to create an individual list item
function ListItem(props) {
  // remember that props is properties, and "props.animal" is an input property called "animal"
  return <li>{props.animal}</li>
}

// method to create the list items
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        // input props here are "props.key" & "props.animal", of which List() is expecting and can use only "props.animal" (so props.key here is useless for now)
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

// main method, which calls for list creation
export function ComponentAnimals() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      {/* input prop here is "props.animals", which List() is expecting and can use */}
      <List animals={animals} />
    </div>
  );
}


///////////////////////////////////////////////////////////////////////////////////////


// conditional rendering

function ConditionalList(props) {
  // base case 1: if props.animals doesn't exist
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  // base case 2: if props.animals list exists, but is empty
  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  // filter only animals that start with "L" from props.animals
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}

export function ConditionalAnimals() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ConditionalList animals={animals} />
    </div>
  );
}