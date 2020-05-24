<template>
    <div class="container" id="app">
        <FormPreview id="preview" :title="title" :components="components"/>

        <FormBuilder id="builder" @componentAdded="updatePreview($event)" />
    </div>
</template>

<script>
import FormBuilder from './components/FormBuilder.vue'
import FormPreview from './components/FormPreview.vue'

export default {
    name: 'App',
    components: {
        FormBuilder,
        FormPreview,
    },
    data() {
        return {
            title: "This is OwnForm",
            components: []
        }
    },
    methods: {
        updatePreview(componentData) {
            this.components.push(componentData[0])
        }
    }
}
</script>

<style scoped>
#app {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
#app > div {
    margin: 7px;
}
#preview {
    flex-grow: 3;
}
#builder {
    flex-grow: 1;
}
</style>
