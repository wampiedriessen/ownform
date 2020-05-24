<template>
  <b-form-input v-bind="$props"></b-form-input>
</template>

<script>
export default {
    name: "ownform-input",
    props: ['value', 'placeholder', 'type', 'min', 'max', 'step']
}
</script>

<style scoped>

</style>