<template>
    <div>
        <b-form-group>
            <b-button variant="primary" @click="newValue">Add Option</b-button>
        </b-form-group>
        <div v-for="(textvalue, _i) in properties.options" :key="`kvp-${_i}`">
            <b-form-group>
                <b-input-group>
                    <b-input-group-prepend is-text>
                        <input type="radio" v-model="properties.value" :value="textvalue.value" />
                    </b-input-group-prepend>
                    <b-form-input type="text" placeholder="text" v-model="textvalue.text" @input="update" />
                    <b-form-input type="text" placeholder="value" v-model="textvalue.value" @input="update" />
                    <b-button variant="danger" @click="properties.options.splice(_i, 1)"><em>X</em></b-button>
                </b-input-group>
            </b-form-group>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: "PropertiesOfTextValueBuilder",
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
        },
        newValue() {
            this.properties.options.push({ text: "", value: ""})
        }
    },
    mounted() {
        if(!this.properties || !this.properties.options) {
            Vue.set(this.properties, "options", [])
            this.newValue()
        }
    }
}
</script>

<style scoped>

</style>