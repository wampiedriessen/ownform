<template>
  <div id="app">
      <FormPreview :formdata="formdata"/>

      <FormBuilder @componentAdded="updatePreview($event)" />
  </div>
</template>

<script>
import FormBuilder from './components/FormBuilder.vue'
import FormPreview from './components/FormPreview.vue'
import CompleteFormData from './models/CompleteFormData.js'

export default {
  name: 'App',
  components: {
    FormBuilder,
    FormPreview,
  },
  data() {
    return {
      formdata: new CompleteFormData("This is my form", [])
    }
  },
  methods: {
    updatePreview(componentData) {
      this.formdata.components.push(componentData)
    }
  }
}
</script>

<style scoped>
#app {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
