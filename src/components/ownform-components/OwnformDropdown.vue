<template>
  <b-form-select v-bind="$props"></b-form-select>
</template>

<script>
export default {
    name: "ownform-dropdown",
    props: ['options', 'value', 'placeholder'],
}
</script>

<style scoped>

</style>