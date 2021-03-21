<template>
    <div>
        <h1>Explore Friends</h1>
        <div class="explore">
            <div class="cards">
            <div class="card" v-for="friend in friends" v-bind:key="friend.id">
                <div class="name">{{friend.first_name}}</div>
                <div class="name">{{friend.last_name}}</div>
                <div>{{friend.email}}</div>
                <div>{{friend.phone_number}}</div>
                <button @click="addFriend(friend)">Add</button>
            </div>
            </div>
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
    .explore {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .cards {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .card {
        margin: 10px;
        border-radius: 12px;
        background-color: rgba(53, 53, 53, 0.055);
        box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.219);
        width: 500px;
        border: none;
        padding: 20px 20px;
    }

    button {
        margin-top: 12px;
        padding: 5px 12px;
        border-radius: 12px;
        background-color: rgb(91, 91, 216);
        font-size: large;
        color: white;
        border: none;
    }

    button:hover {
        background-color: rgb(73, 73, 167);
    }

    .name {
        font-size: large;
        font-weight: bold;
    }

    h1 {
        text-align: center;
    }

    /* Mobile Styles */
    @media only screen and (max-width: 767px) {
        .card {
            width: 90%;
        }
    }

    /* Tablet Styles */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .card {
            width: 40%;
        }
    }

    /* Desktop Styles */
    @media only screen and (min-width: 1024px) {
        
    }
</style>