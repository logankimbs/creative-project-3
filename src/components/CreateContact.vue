
<template>
    <form v-on:submit.prevent>
            <input type="text" placeholder="First Name">
            <input type="text" placeholder="Last Name">
            <button>Add</button>
        </form>
</template>

<script>
    export default {
        name: "CreateContact",
    }
</script>
