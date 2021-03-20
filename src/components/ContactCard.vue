<template>
<div>
    <div class="card" v-for="friend in friends" v-bind:key="friend.id">
        <div>{{friend.first_name}}</div>
        <button @click="addFriend(friend)">Add</button>
    </div>
</div>
</template>

<script>
export default {
    name: "ContactCard",
    props: {
        friends: Array
    },
    methods: {
        addFriend(data) {
            this.$root.$data.contacts.push(data);
        }
    }
}
</script>

<style>

</style>