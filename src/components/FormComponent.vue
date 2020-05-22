<template>
    <div id="component">
        <label>{{ title }}</label><input type="text" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    name: "FormComponent",
    props: {
        title: String,
        placeholder: String
    }
}
</script>

<style scoped>
#component {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>