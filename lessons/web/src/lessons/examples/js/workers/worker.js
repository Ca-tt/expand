let workerMessage = 'I am a worker thread';
console.log(workerMessage);

console.log(self);

let tasks;

onmessage = async (event) => {
    tasks = await event.data;
    console.log('Мы получили данные', tasks);

    tasks = handleData(tasks);

    postMessage(tasks)
}


function handleData(data) {
    for (const task of data) {
        task.done = true;
    }
    return data;
}
