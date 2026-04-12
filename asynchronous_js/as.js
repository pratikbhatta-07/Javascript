function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const flag = true;
            if (flag) {
                resolve("Task 1 done ");
            }
            else {
                reject("Task 1 not done yet");
            }
        }, 1000);
    });
}
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const flag = true;
            if (flag) {
                resolve("Task 2 done ");
            }
            else {
                reject("Task 2 not done yet");
            }
        }, 1000);
    });
}
function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const flag = true;
            if (flag) {
                resolve("Task 3 done ");
            }
            else {
                reject("Task 3 not done yet");
            }
        }, 1000);
    });
}

async function result() {
    try {
        const task1Result = await task1();
        console.log(task1Result);

        const task2Result = await task2();
        console.log(task2Result);

        const task3Result = await task3();
        console.log(task3Result);
    }
    catch (err) {
        console.log(err);
    }
}
result(); 