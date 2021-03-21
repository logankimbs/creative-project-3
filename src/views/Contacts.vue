<template>
<div class="contacts">
    <h1>Contacts</h1>
    <div v-if="this.$root.$data.contacts.length === 0">
        <h2>Go explore or add some people to your contacts</h2>
    </div>
    <div v-else>
        <div class="protipCard">
            <h3>Pro Tip: Click directly on contact info to edit than hit enter</h3>
        </div>
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

<style>
    .contacts {
        margin-bottom: 80px;
    }

    h1, h2 {
        text-align: center;
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

    .protipCard {
        text-align: center;
        color: rgb(91, 91, 216);
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