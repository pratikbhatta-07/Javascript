function fetchData(callback) {
    console.log("first");

    setTimeout( () => {
        console.log("second");
        callback();
    }, 2000);
}
function process(){
    console.log("Processing data");
}
fetchData(process);