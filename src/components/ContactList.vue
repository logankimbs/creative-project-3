<template>
    <div class="contacts">
        <div class="cards">
        <div class="card" v-for="contact in this.$root.$data.contacts" v-bind:key="contact.id">
            <div class="firstname" contenteditable="true" v-on:keydown.enter="updateContact($event, contact, 'first_name')">{{contact.first_name}}</div>
            <div class="lastname" contenteditable="true" v-on:keydown.enter="updateContact($event, contact, 'last_name')">{{contact.last_name}}</div>
            <div contenteditable="true" v-on:keydown.enter="updateContact($event, contact, 'email')">{{contact.email}}</div>
            <div contenteditable="true" v-on:keydown.enter="updateContact($event, contact, 'phone_number')">{{contact.phone_number}}</div>
            <button @click="removeContact(contact)">Remove</button>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactList",
        methods: {
            updateContact(e, contact, type) {
                e.preventDefault();

                if (type === 'email') {
                    contact.email = e.target.innerText;
                } else if (type === 'first_name') {
                    contact.first_name = e.target.innerText;
                } else if (type === 'last_name') {
                    contact.last_name = e.target.innerText;
                } else {
                    contact.phone_number = e.target.innerText;
                }

                e.target.blur();
            },

            removeContact(contact) {
                let list = this.$root.$data.contacts;
                for (var i = 0; i < list.length; i++){
                    if (list[i].id === contact.id) {
                        list.splice(i, 1); 
                        break;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .contacts {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .firstname,
    .lastname {
        font-weight: bold;
        font-size: large;
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
        background-color: rgb(216, 91, 91);
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
        
    }

    /* Desktop Styles */
    @media only screen and (min-width: 1024px) {
        
    }
</style>