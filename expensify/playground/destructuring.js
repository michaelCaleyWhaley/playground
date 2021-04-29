// object destructuring
const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

// you can create an alias and a default value using the below syntax
const { name: publisherName = "Self-Published" } = book.publisher;
console.log(publisherName);

// array destructuring
const address = [
  "1299 S Juniper Street",
  "Philidephia",
  "Pennsylvania",
  "19147"
];
const [, city, state] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);
