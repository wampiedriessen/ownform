<template>
  <div id="app">
      <FormPreview :title="title" :components="components"/>

      <FormBuilder @componentAdded="updatePreview($event)" />
  </div>
</template>

<script>
import FormBuilder from './components/FormBuilder.vue'
import FormPreview from './components/FormPreview.vue'

let preFilledComponents = [{
        type: "b-form-datepicker",
        title: "My first component",
        props: {
          placeholder: "Choose a date",
        }
      }];

export default {
  name: 'App',
  components: {
    FormBuilder,
    FormPreview,
  },
  data() {
    return {
      title: "This is OwnForm",
      components: preFilledComponents
    }
  },
  methods: {
    updatePreview(componentData) {
      console.log(componentData)
      this.components.push(componentData[0])
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
