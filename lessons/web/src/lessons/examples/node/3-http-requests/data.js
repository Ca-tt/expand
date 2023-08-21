export let countries = [
    'China',
    'India',
    'United States',
    'Indonesia',
    'Pakistan',
    'Nigeria',
    'Brazil',
    'Bangladesh',
    'Mexico',
    'Japan'
];

export function getRandom(max) {
    let randomElement = Math.floor(Math.random() * max);
    return countries[randomElement];
}