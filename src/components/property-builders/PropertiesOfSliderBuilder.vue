<template>
    <div>
        <b-form-group label="Min:">
            <b-form-input type="number" v-model="properties.min" @input="update"></b-form-input>
        </b-form-group>
        <b-form-group label="Max:">
            <b-form-input type="number" v-model="properties.max" @input="update"></b-form-input>
        </b-form-group>
        <b-form-group label="Step:">
            <b-form-input type="text" placeholder="0.5" v-model="properties.step" @input="update"></b-form-input>
        </b-form-group>
    </div>
</template>

<script>
export default {
    name: "PropertiesOfSliderBuilder",
        props: {
            value: Object
        },
        data() {
            return {
                properties: this.value,
            }
        },
        methods: {
            update() {
                this.$emit('input', this.properties)
            }
        },
}
</script>

<style>

</style>