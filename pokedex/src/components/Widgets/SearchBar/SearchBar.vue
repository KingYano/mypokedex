<template lang="html">

    <div class="search-bar">
        <v-text-field
        class="search-bar-component"
            :loading="loading"
            :bg-color="bgColor"
            :append-inner-icon="appendIcon"
            :placeholder="placeholder"
            counter="true"
            density="compact"
            variant="solo"
            clearable
            hide-details
        ></v-text-field>
    </div>

</template>

<script lang="js">

    export default  {
        name: 'search-bar',
        components: {

        },
        props: {
            loading: {
                type: Boolean,
                default: false,
            },
            bgColor : {
                type: String,
                default: '',
            },
            appendIcon : {
                type: String,
                default: '',
            },
            placeholder : {
                type: String,
                default: '',
            },
        },
        data () {
            return {

            }
        },
        methods: {
        },
        computed: {

        }
    }
</script>

<style lang="scss">

</style>
