<template>
    <div class="container" id="container">
        <h1>Create your ownForm</h1>
        <div id="app">
            <FormPreview id="preview" :title="title" :components="components"/>

            <div id="sidebar">
                <b-form-group label="The title of your ownForm">
                    <b-form-input v-model="title" placeholder="The title of your Form"></b-form-input>
                </b-form-group>
                <b-button v-b-modal="`formbuilder-modal`" variant="primary">Add Form Elements</b-button>
            </div>
            <b-modal id="formbuilder-modal" title="Add Form Element">
                <FormBuilder id="builder" @componentAdded="updatePreview($event)" hide-submit-button hide-preview />
            </b-modal>
        </div>
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
            title: "",
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
#container{
    margin-top: 50px;
}
#app {
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
#sidebar {
    width: 250px;
}
</style>
