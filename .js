// Store a single person
function savePerson(person) {
  const people = JSON.parse(localStorage.getItem('people')) || [];
  people.push(person);
  localStorage.setItem('people', JSON.stringify(people));
}

// Get all people
function getAllPeople() {
  return JSON.parse(localStorage.getItem('people')) || [];
}

// Get person by ID
function getPersonById(id) {
  const people = getAllPeople();
  return people.find(p => p.id === id);
}

// Update person
function updatePerson(id, updatedData) {
  const people = getAllPeople();
  const index = people.findIndex(p => p.id === id);
  if (index !== -1) {
    people[index] = { ...people[index], ...updatedData };
    localStorage.setItem('people', JSON.stringify(people));
  }
}

// Delete person
function deletePerson(id) {
  const people = getAllPeople().filter(p => p.id !== id);
  localStorage.setItem('people', JSON.stringify(people));
}

// Clear all data
function clearAllPeople() {
  localStorage.removeItem('people');
}
