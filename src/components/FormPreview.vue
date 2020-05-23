<template>
  <div class="components">
    <h1>{{ title }}</h1>
    <div v-for="(comp, _i) in components" :key="`component-${_i}`">
      <b-form-group
        :id="`input-group-${_i}`"
        :label="`${_i+1}) ${comp.title}`"
        :label-for="`input-${_i}`">
        <component :id="`input-${_i}`" :is="comp.type" v-bind="comp.props"></component>
      </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormPreview',
  props: {
    title: String,
    components: Array,
  },
}
</script>

<style scoped>
</style>
