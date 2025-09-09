//async await
async function networkCall() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await data.json();

    console.log(res);
}
networkCall();