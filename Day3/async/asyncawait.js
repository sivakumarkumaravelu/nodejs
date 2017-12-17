async function unexpected() {
    const randomDelay1 = Math.floor(Math.random() * 1000 * 2);
    const randomDelay2 = Math.floor(Math.random() * 1000 * 2);

    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello, World!'), randomDelay1);
            setTimeout(() => reject(new Error('Something went wrong')), randomDelay2);
        });

        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
unexpected();
console.log("Do some other task")