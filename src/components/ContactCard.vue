<template>
    <div>
        <h1>Explore Friends</h1>
        <div v-for="friend in friends" v-bind:key="friend.id">
            <div>{{friend.first_name + " " + friend.last_name}}</div>
            <div>{{friend.email}}</div>
            <div>{{friend.phone_number}}</div>
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

<style scoped>

</style>