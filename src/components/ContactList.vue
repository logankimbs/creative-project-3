<template>
    <div>
        <div v-for="contact in this.$root.$data.contacts" v-bind:key="contact.id">
            <div class="firstname" contenteditable="true" v-on:keydown.enter="updateContact($event, contact, 'first_name')">{{contact.first_name}}</div>
            <div class="lastname" contenteditable="true" v-on:keydown.enter="updateContact($event, contact, 'last_name')">{{contact.last_name}}</div>
            <div contenteditable="true" v-on:keydown.enter="updateContact($event, contact, 'email')">{{contact.email}}</div>
            <div contenteditable="true" v-on:keydown.enter="updateContact($event, contact, 'phone_number')">{{contact.phone_number}}</div>
            <button @click="removeContact(contact)">Remove</button>
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

<style>

</style>