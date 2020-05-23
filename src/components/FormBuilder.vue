<template>
  <div>
    <b-form @submit.prevent="addComponent" novalidate>
      <b-form-group label="Component Title:">
          <b-form-input
            type="text"
            v-model="formdata.title"
            placeholder="Enter component title">
          </b-form-input>
      </b-form-group>
      <b-form-group label="Component Type">
        <b-form-select
          :options="component_types"
          v-model="formdata.type"
          placeholder="Select your input type">
          </b-form-select>
      </b-form-group>
      <div v-if="propertyComponent">
        <component :is="propertyComponent" v-model="formdata.props"></component>
      </div>
      <b-button variant="primary" type="submit">Add Form Component</b-button>
    </b-form>
  </div>
</template>

<script>
import FormComponentData from '../models/FormComponentData.js'
import PropertiesOfInputBuilder from './properties/PropertiesOfInputBuilder'

export default {
    name: "FormBuilder",
    data() {
        return {
          formdata: {
            title: "",
            type: { component: null, hasProps: false },
            props: {},
          },
          component_types: [
            { value: { component: null, hasProps: false }, text: 'Select your component type' },
            { value: { component: "b-form-input", hasProps: true }, text: "Generic Input" },
            { value: { component: "b-form-select", hasProps: false }, text: "Dropdown" },
            { value: { component: "b-form-datepicker", hasProps: false }, text: "Datepicker" },
            { value: { component: "b-form-file", hasProps: false }, text: "File Input" },
            { value: { component: "b-form-radio", hasProps: false }, text: "Radio buttons" },
            { value: { component: "b-form-textarea", hasProps: false }, text: "Text Area" },
          ]
        };
    },
    components: {
      PropertiesOfInputBuilder,
    },
    methods: {
      addComponent() {
        let data = this.formdata;
        if(!data.type)
          return;

        if(!this.propertyComponent)
          data.props = {}

        this.$emit('componentAdded', [new FormComponentData(data.title, data.type.component, data.props)]);

        this.formdata.title = '';
        this.formdata.type = { component: null, hasProps: false };
        this.formdata.props = {};
        return false;
      }
    },
    computed: {
      propertyComponent() {
        if(!this.formdata.type)
          return null
        
        if(!this.formdata.type.hasProps)
          return null

        return `properties-of-${this.formdata.type.component.substr("b-form-".length)}-builder`
      }
    }
}
</script>

<style>

</style>