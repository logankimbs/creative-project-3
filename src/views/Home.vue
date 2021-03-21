<template>
    <div class="main">
        <div class="container">
            <h1>Add Friend</h1>
            <form v-on:submit.prevent>
                <input type="text" placeholder="First Name" id="fName" v-model="fName"><br>
                <input type="text" placeholder="Last Name" id="lName" v-model="lName"><br>
                <input type="text" placeholder="Phone Number" id="pNumber" v-model="pNumber"><br>
                <input type="text" placeholder="Email" id="eMail" v-model="eMail"><br>
                <button @click="addFriend">Add</button>
            </form>
            <hr>
        </div>

        <div class="container">
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
                pNumber: '',
                eMail: ''
            }
        },
        methods: {
            addFriend() {
                this.$root.$data.contacts.push({
                    first_name: this.fName,
                    last_name: this.lName,
                    phone_number: this.pNumber,
                    email: this.eMail
                });

                this.fName = '';
                this.lName = '';
                this.pNumber = '';
                this.eMail = '';
            }
        },
        computed: {
            friends() {
                return this.$root.$data.friends;
            }
        }
    }
</script>