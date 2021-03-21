<template>
    <div class="main">
        <div class="addFriend">
            <h1>Add Friend</h1>
            <form v-on:submit.prevent>
                <input type="text" placeholder="First Name" id="fName" v-model="fName"><br>
                <input type="text" placeholder="Last Name" id="lName" v-model="lName"><br>
                <input type="text" placeholder="Phone Number" id="pNumber" v-model="pNumber"><br>
                <input type="text" placeholder="Email" id="eMail" v-model="eMail"><br>
                <button class="add" @click="addFriend">Add</button>
            </form>
        </div>

        <hr>

        <ContactCard :friends="friends" />

        <footer>
            <h3 style="text-align: center; margin-top: 100px; color:rgb(91, 91, 216); padding: 60px;">
                <h2>Contacts © 2021</h2> 
                <a href="https://github.com/logankimbs/creative-project-3" target="blank">Github</a>
            </h3>
        </footer>
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

<style>
    .addFriend {
        text-align: center;
        margin-bottom: 80px;
    }

    h1 {
        margin-top: 36px;
        margin-bottom: 26px;
    }

    input,
    .add {
        width: 60%;
        padding: 12px 18px;
        border-radius: 12px;
        border: solid black 1.8px;
        margin-bottom: 6px;
        font-size: large;
    }

    .add {
        margin-top: 8px;
        background-color: rgb(91, 91, 216);
        font-size: large;
        color: white;
        border: none;
    }

    .add:hover {
        background-color: rgb(73, 73, 167);
    }

    /* Mobile Styles */
    @media only screen and (max-width: 767px) {
        input, .add {
            width: 80%;
        }
    }
  
    /* Tablet Styles */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {

    }

    /* Desktop Styles */
    @media only screen and (min-width: 1024px) {
        
    }
</style>