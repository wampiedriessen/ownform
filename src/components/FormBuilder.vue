<template>
    <div>
        <h2>Form builder</h2>
        <b-form @submit.prevent="addComponent">
            <b-form-group label="Component Title:">
                <b-form-input
                    type="text"
                    v-model="formdata.title"
                    ref="title"
                    required
                    placeholder="Enter component title">
                    </b-form-input>
            </b-form-group>
            <b-form-group label="Component Type">
                <b-form-select
                    :options="component_types"
                    v-model="formdata.type"
                    required
                    placeholder="Select your input type">
                    </b-form-select>
            </b-form-group>
            <b-card v-if="formdata.type.additionalPropsComponent">
                <component :is="formdata.type.additionalPropsComponent" v-model="formdata.props"></component>
            </b-card>
            <b-form-group class="submitbutton" v-if="!HideSubmitButton">
                <b-button variant="primary" type="submit">Add Form Component</b-button>
            </b-form-group>
        </b-form>
        <b-card v-if="showPreview">
            <h3>Component preview</h3>
            <component :is="formdata.type.component" v-bind="formdata.props"></component>
        </b-card>
    </div>
</template>

<script>
import FormComponentData from '../models/FormComponentData.js'

export default {
    name: "FormBuilder",
    props: {
        'HideSubmitButton': Boolean,
        'HidePreview': Boolean,
    },
    data() {
        return {
            formdata: {
                title: "",
                type: { component: null, additionalPropsComponent: null },
                props: {},
            },
            component_types: [
                {text: 'Select a component type', value: { component: null, additionalPropsComponent: null } },

                {text: "Generic Input",   value: { component: "ownform-input",       additionalPropsComponent: "properties-of-input-builder" } },
                {text: "Dropdown",        value: { component: "ownform-dropdown",    additionalPropsComponent: "properties-of-text-value-builder" } },
                {text: "Radio buttons",   value: { component: "ownform-radio",       additionalPropsComponent: "properties-of-text-value-builder" } },
                {text: "Range Slider",    value: { component: "ownform-slider",      additionalPropsComponent: "properties-of-slider-builder" } },
                // {text: "Text Area",       value: { component: "ownform-textarea",    additionalPropsComponent: null } },
                // {text: "Datepicker",      value: { component: "ownform-datepicker",  additionalPropsComponent: null } },
                // {text: "Timepicker",      value: { component: "ownform-timepicker",  additionalPropsComponent: null } },
                // {text: "File Input",      value: { component: "ownform-file",        additionalPropsComponent: null } },
            ]
        };
    },
    computed: {
        showPreview() {
            return !this.HidePreview && this.formdata.type.component
        }
    },
    methods: {
        addComponent() {
            let data = this.formdata;
            if(!data.type.component || !data.title)
                return false;

            if(!data.type.additionalPropsComponent)
                data.props = {}

            this.$emit('componentAdded', [new FormComponentData(data.title, data.type.component, data.props)]);

            this.formdata.title = '';
            this.formdata.type = { component: null, additionalPropsComponent: null };
            this.formdata.props = {};

            this.$refs.title.focus();
            return false;
        }
    },
}
</script>

<style scoped>
.submitbutton {
    margin-top: 20px;
}
</style>