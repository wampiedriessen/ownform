<template>
  <div>
    <h1>{{ formdata.title }}</h1>
    <div v-for="(comp, _i) in formdata.components" :key="`component-${_i}`" >
      <component :is="comp.type"></component>
    </div>
  </div>
</template>

<script>
import CompleteFormData from '../models/CompleteFormData.js'

export default {
  name: 'FormPreview',
  props: {
    formdata: CompleteFormData,
  },
}
</script>

<style scoped>
</style>
