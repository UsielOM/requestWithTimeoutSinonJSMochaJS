export function fakeAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello world");
        }, 2000);
    });
}

export function timeoutAfter(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("request timed-out"));
        }, seconds * 4000);
    });
}

export async function requestWithTimeout() {
    try {
        const response = await Promise.race(
            [timeoutAfter(2), fakeAPI()]
        );

        console.log(response);

    } catch (error) {
        console.log(error.message);
    }
}

requestWithTimeout();