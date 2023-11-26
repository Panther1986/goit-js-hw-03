function slugify(title) {
    const normalizedTitle = title.toLowerCase();
    const words = normalizedTitle.split(' ');
    const slug = words.join('-');
   

    return slug;
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));