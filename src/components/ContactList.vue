<template>
<div>
        <div v-for="contact in this.$root.$data.contacts" v-bind:key="contact.id">
            <div>{{contact.first_name + " " + contact.last_name}}</div>
            <div>{{contact.phone_number}}</div>
            <td class="left">
                <button @click="editContact(contact)">Edit</button>
                <button @click="removeContact(contact)">Remove</button>
            </td>
        </div>
</div>
</template>

<script>
    export default {
        name: "ContactList",
        methods: {
            editContact(contact) {
                
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