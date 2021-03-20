<template>
<div class="section">
    <h1>Add Friend</h1>
    <form v-on:submit.prevent>
        <input type="text" id="name" placeholder="Name"><br>
        <input type="text" id="number" placeholder="Number"><br>
        <button>Add</button>
    </form>
    <hr>
</div>
</template>

<script>
export default {
    name: "CreateContact",
}
</script>

<style>

</style>