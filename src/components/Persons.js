import React from "react";
import Person from "./Person";

const Persons = () => {
  const listaPersons = [
    {
      name: "John",
      job: "Developer",
      img: 75,
    },
    {
      name: "Bob",
      job: "Manager",
      img: 33,
      review: "Acesta este reviewul mew !!",
    },
    {
      name: "Peter",
      job: "Designer UX",
      img: 45,
    },
  ];

  const content = listaPersons.map((p) => {
    return (
      <Person name={p.name} job={p.job} img={p.img}>
        {p.review}{" "}
      </Person>
    );
  });
  return (
    <div>
      {/* <Person
        name={listaPersons[0].name}
        job={listaPersons[0].job}
        img={listaPersons[0].img}
      />
      <Person
        name={listaPersons[1].name}
        job={listaPersons[1].job}
        img={listaPersons[1].img}
      >
        Acesta este reviewul mew
      </Person>
      <Person
        name={listaPersons[2].name}
        job={listaPersons[2].job}
        img={listaPersons[2].img}
      /> */}
      {content}
    </div>
  );
};

export default Persons;
