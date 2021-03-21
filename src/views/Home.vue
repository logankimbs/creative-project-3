<template>
    <div class="main">
        <div class="section">
            <h1>Add Friend</h1>
            <form v-on:submit.prevent>
                <input type="text" placeholder="First Name" id="fName" v-model="fName">
                <input type="text" placeholder="Last Name" id="lName" v-model="lName">
                <button @click="addFriend">Add</button>
            </form>
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
            return {
                fName: '',
                lName: '',
            }
        },
        methods: {
            addFriend() {
                this.$root.$data.contacts.push({
                    first_name: this.fName,
                    last_name: this.lName
                });
            }
        },
        computed: {
            friends() {
                return this.$root.$data.friends;
            }
        }
    }
</script>