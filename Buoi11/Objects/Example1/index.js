function employee_info(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}
// Creates an object using new keyword
var empMary = new employee_info("Mary", "34", "5 years");

alert("Name: "+ empMary.name + "\n" + "Age: " + empMary.age + "\n"  + "Experience: " + empMary.experience );
