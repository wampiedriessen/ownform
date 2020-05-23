<template>
  <div>
      <b-form-group label="Generic input type:">
        <b-form-select v-model="properties.type" :options="inputTypes" @input="update"></b-form-select>
      </b-form-group>
      <b-form-group label="Placeholder:">
        <b-form-input type="text" v-model="properties.placeholder" @input="update"></b-form-input>
      </b-form-group>
      <b-form-group label="Default value:">
        <b-form-input type="text" v-model="properties.value" @input="update"></b-form-input>
      </b-form-group>
  </div>
</template>

<script>
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
                { value: "url", text: "url" },
                { value: "tel", text: "Telephone number" },
                { value: "date", text: "Date" },
                { value: "datetime", text: "Date & Time" },
                { value: "datetime-local", text: "Local Date & Time" },
                { value: "month", text: "Month" },
                { value: "week", text: "Week" },
                { value: "time", text: "Time" },
                { value: "range", text: "Range" },
                { value: "color", text: "Color" },
            ],
        }
    },
    beforeMount() {
        if(! ("type" in this.properties))
            this.properties.type = "text"
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