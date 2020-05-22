<template>
  <div>
    Title: <input v-model="title" /> <br />
    Placeholder: <input v-model="placeholder" /> <br />
    <button @click="addComponent()">Add Form Component</button>
  </div>
</template>

<script>
import FormComponentData from '../models/FormComponentData.js'

export default {
    name: "FormBuilder",
    data() {
        return {
          title: "",
          placeholder: "",
        };
    },
    methods: {
      addComponent() {
        this.$emit('componentAdded', [new FormComponentData(this.title, this.placeholder)]);
        this.title = '';
        this.placeholder = '';
      }
    }
}
</script>

<style>

</style>