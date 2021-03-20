<template>
<div class="main">
    <div class="section">
        <h1>Add Friend</h1>
        <form v-on:submit.prevent>
            <input type="text" id="name" placeholder="Name"><br>
            <input type="text" id="number" placeholder="Number"><br>
            <button>Add</button>
        </form>
        <hr>
    </div>

    <div class="section">
        <h1>Explore Friends</h1>
        <ContactCard :friends="friends" />
    </div>

</div>
</template>

<script>
import ContactCard from '../components/ContactCard.vue'

export default {
    name: 'Home',
    components: {
        ContactCard
    },
    data() {
        return {}
    },
    computed: {
        friends() {
            return this.$root.$data.friends;
        }
    }
}
</script>

<style>

</style>