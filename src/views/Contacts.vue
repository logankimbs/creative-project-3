<template>
<div>
    <h1>Contacts</h1>
    <hr>
    <div v-if="this.$root.$data.contacts.length === 0">
        <h2>Go explore or add some people to your contacts</h2>
    </div>
    <div v-else>
        <ContactList />
    </div>
</div>
</template>

<script>
import ContactList from '../components/ContactList.vue'

export default {
    name: "Contacts",
    components: {
        ContactList
    }
}
</script>