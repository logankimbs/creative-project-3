<template>
<div>
  <comments />
</div>
</template>

<script>
import Comments from '../components/Comments.vue'
export default {
  name: 'Home',
  components: {
    Comments
  },
  computed: {
    products() {
      return this.$root.$data.products;
    }
  },
}
</script>