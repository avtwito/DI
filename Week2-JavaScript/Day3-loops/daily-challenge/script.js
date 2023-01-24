for (let i = 1; i < 6; i++) {
    console.log(`*`.repeat(i))    
}

for (let i = 1; i < 6; i++) {
    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += `*`;
    }
    console.log(stars);
}