<script setup lang="ts">
let serverUrl = 'http://localhost:3000';

/* GET request */
async function getServerData(url: string) {
    let response = await fetch(url);
    let serverData = await response.json();
    
    return serverData;
}

/* POST request */
// async function postData(url: string) {
//     let response = await fetch(url, {
//         method: 'POST'
//     });
//     let serverData = await response.json();

//     return serverData;
// }

/* get request */
let serverData = await getServerData(serverUrl);
// console.log(serverData);

/* post request */
// let postResponse = await postData(serverUrl);
// console.log(postResponse);


</script>

<template>
    <h2>Route Express</h2>
    <h3>Запусти <u>pnpm back</u> и тестируй код</h3>

    {{ serverData.data }}
</template>

<style lang="scss" scoped></style>