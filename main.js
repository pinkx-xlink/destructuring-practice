//for/of iteration 
const people = [
    {
        name: "Miss Daisy",
        family: {
            mother: "Polly Daisy",
            father: "Stephen Daisy",
            sister: "Lily Daisy",
        },
        age: 24,
    },
    {
        name: "Tom Jones",
        family: {
            mother: "Norah Jones",
            father: "Richard Jones",
            brother: "Howie Jones",
        },
        age: 32,
    },
];

for (const {
    name: n,
    family: { father: f },
} of people) {
    console.log(`Name: ${n}, Father: ${f}`);
}
// Name: Miss Daisy, Father: Stephen Daisy
// Name: Tom Jones, Father: Richard Jones