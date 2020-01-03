import React from "react";
import { useField } from "./hooks";
import { useResource } from "./hooks";
import removeReset from "./utils/removeReset";

const App = () => {
  const content = useField("text");
  const name = useField("text");
  const number = useField("text");

  const [notes, noteService] = useResource("http://localhost:3005/notes");
  const [persons, personService] = useResource("http://localhost:3005/persons");

  const handleNoteSubmit = async event => {
    event.preventDefault();
    const newNote = await noteService.create({ content: content.value });
    noteService.setValue(notes.concat(newNote));
    content.reset();
  };

  const handlePersonSubmit = async event => {
    event.preventDefault();
    const newContact = await personService.create({
      name: name.value,
      number: number.value
    });
    personService.setValue(persons.concat(newContact));
    name.reset();
    number.reset();
  };

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...removeReset(content)} />
        <button>create</button>
      </form>
      {notes.map(n => (
        <p key={n.id}>{n.content}</p>
      ))}
      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...removeReset(name)} /> <br />
        number <input {...removeReset(number)} />
        <button>create</button>
      </form>
      {persons.map(n => (
        <p key={n.id}>
          {n.name} {n.number}
        </p>
      ))}
    </div>
  );
};

export default App;
