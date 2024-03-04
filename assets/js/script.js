class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
      }
    }
  }

  
  const user1 = new User("Mario", "Rossi", 30, "Roma");
  const user2 = new User("Anna", "Verdi", 25, "Milano");
  
  const comparison = user1.compareAge(user2);
  console.log(comparison); 
  
  const user3 = new User("Luigi", "Bianchi", 30, "Torino");
  
  const comparison2 = user1.compareAge(user3);
  console.log(comparison2); 
  

  class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    sameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  
    toString() {
      return `Nome: ${this.petName} - Proprietario: ${this.ownerName} - Specie: ${this.species} - Razza: ${this.breed}`;
    }
  }
  
  const petForm = document.getElementById("pet-form");
  const petList = document.getElementById("pet-list");
  
  petForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const petName = document.getElementById("pet-name").value;
    const ownerName = document.getElementById("owner-name").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
  
    const newPet = new Pet(petName, ownerName, species, breed);
  
    // Aggiungi il nuovo pet alla lista
    const listItem = document.createElement("li");
    listItem.textContent = newPet.toString();
    petList.appendChild(listItem);
  
    // Resetta il form
    petForm.reset();
  });
  