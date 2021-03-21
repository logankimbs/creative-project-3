<template>
    <div>
        <div v-for="contact in this.$root.$data.contacts" v-bind:key="contact.id">
            <h2>{{contact.first_name + " " + contact.last_name}}</h2>
            <h2>{{contact.email}}</h2>
            <h2>{{contact.phone_number}}</h2>
            <button>Edit</button>
            <button @click="removeContact(contact)">Remove</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactList",
        methods: {
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