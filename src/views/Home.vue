<template>
<div class="main">
    <CreateContact />
    <ContactCard />
</div>
</template>

<script>
import CreateContact from '../components/CreateContact.vue'
import ContactCard from '../components/ContactCard.vue'

export default {
    name: 'Home',
    components: {
        CreateContact,
        ContactCard
    },
}
</script>

<style>

</style>