<template>
    <div class="main">
        <div class="section">
            <h1>Add Friend</h1>
            <CreatContact />
        </div>

        <div class="section">
            <h1>Explore Friends</h1>
            <ContactCard :friends="friends" />
        </div>

        {{this.first_name}}
    </div>
</template>

<script>
    import CreatContact from '../components/CreateContact.vue'
    import ContactCard from '../components/ContactCard.vue'

    export default {
        name: 'Home',
        components: {
            CreatContact,
            ContactCard
        },
        data() {
            return {
                first_name: '',
                last_name: '',
            }
        },
        computed: {
            friends() {
                return this.$root.$data.friends;
            }
        }
    }
</script>