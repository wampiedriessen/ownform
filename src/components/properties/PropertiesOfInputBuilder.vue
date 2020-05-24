<template>
  <div>
      <b-form-group
        label="Generic input type:"
        description="Type of expected answer, this helps in some (mobile) web browsers">
        <b-form-select v-model="properties.type" :options="inputTypes" @input="update"></b-form-select>
      </b-form-group>
      <b-form-group label="Placeholder:">
        <b-form-input type="text" v-model="properties.placeholder" @input="update"></b-form-input>
      </b-form-group>
      <b-form-group label="Default value:">
        <b-form-input type="text" v-model="properties.value" @input="update"></b-form-input>
      </b-form-group>
      <div v-if="isNumeric">
        <b-form-group label="Min:">
            <b-form-input type="numeric" v-model="properties.min" @input="update"></b-form-input>
        </b-form-group>
        <b-form-group label="Max:">
            <b-form-input type="numeric" v-model="properties.max" @input="update"></b-form-input>
        </b-form-group>
        <b-form-group label="Step:">
            <b-form-input type="numeric" v-model="properties.step" @input="update"></b-form-input>
        </b-form-group>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: "PropertiesOfInputBuilder",
    props: {
        value: Object
    },
    data() {
        return {
            properties: this.value,
            inputTypes: [
                { value: "text", text: "Regular text" },
                // { value: "password", text: "Secret text" },
                { value: "email", text: "Email Adress" },
                { value: "number", text: "Numeric" },
                // { value: "range", text: "Numeric range slider" },
                { value: "tel", text: "Telephone number" },
                { value: "url", text: "URL" },
                // { value: "color", text: "Color" },
                // { value: "date", text: "Date" },
                // { value: "datetime", text: "Date & Time" },
                // { value: "datetime-local", text: "Local Date & Time" },
                // { value: "month", text: "Month" },
                // { value: "week", text: "Week" },
                // { value: "time", text: "Time" },
            ],
        }
    },
    mounted() {
        if(! ("type" in this.properties))
            Vue.set(this.properties, "type", "text")
    },
    computed: {
        isNumeric() {
            return  this.properties.type == "range" ||
                    this.properties.type == "number"
        },
    },
    methods: {
        update() {
            this.$emit('input', this.properties)
        }
    }
}
</script>

<style scoped>

</style>