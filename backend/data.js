let data;

async function getData() {
    try {
        const response = await fetch('https://api.sampleapis.com/wines/whites');
        const wines = await response.json();

        // wines is now an array of white wines
        const updatedWines = wines.map(wine => ({
            ...wine,
            slug: wine.id,
            price: Math.floor(Math.random() * (500 - 100 + 1)) + 50

        }));
        data = updatedWines;
    } catch (error) {
        // handle the error
    }
}

await getData();
console.log(data);
export default data;