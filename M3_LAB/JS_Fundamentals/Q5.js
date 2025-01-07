function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log(getGreeting("john"));

const getGreeting1 = function (name) {
  // function expression syntax for creating a function
  return "Hello " + name + "!";
};

console.log(getGreeting1("Mery"));

const getGreeting2 = (name) => {
  return "Hello " + name + "!";
};

console.log(getGreeting2("peter"));

// jo: arrow function could be simplified to:
const getGreeting3 = (name) => "Hello " + name + "!";

console.log(getGreeting3("james"));
