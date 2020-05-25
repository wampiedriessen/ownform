<template>
    <b-form-group
        :label="watchedValue.toString()">
        <b-form-input type="range" v-bind="$props" @input="update"></b-form-input>
    </b-form-group>
</template>

<script>
export default {
    name: "ownform-slider",
    props: ['value', 'min', 'max', 'step'],
    data() {
        return {
            watchedValue: this.value ? this.value : (this.min ? this.min : 0)
        }
    },
    methods: {
        update(v) {
            this.watchedValue = v
        }
    }
}
</script>

<style scoped>

</style>