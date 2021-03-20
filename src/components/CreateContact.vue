
<template>
    <form v-on:submit.prevent>
            <input type="text" id="name" placeholder="Name"><br>
            <input type="text" id="number" placeholder="Number"><br>
            <button>Add</button>
        </form>
</template>

<script>
    export default {
        name: "CreateContact",
    }
</script>
