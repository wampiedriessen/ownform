<template>
    <div>
        <b-form-radio-group v-bind="$props"></b-form-radio-group>
    </div>
</template>

<script>
export default {
    name: "ownform-radio",
    props: ['value', 'options'],
}
</script>

<style scoped>

</style>