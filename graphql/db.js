export const people = [
  {
    id: "0",
    name: "Wonseok",
    age: 27,
    gender: "male"
  },
  {
    id: "1",
    name: "GilDong",
    age: 52,
    gender: "male"
  },
  {
    id: "2",
    name: "Gop",
    age: 22,
    gender: "female"
  }
]

export const getById = id =>{
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}