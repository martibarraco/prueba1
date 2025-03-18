console.log ("hola");
async function main() {
    const req = await fetch ("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
    if (req.ok) {
        const data = await req.jason();
        console.log (data);
    }
}

main ()

