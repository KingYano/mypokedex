<template lang="html">

    <div class="widget-pagination">
        <v-pagination
              class="pagination-component"
              v-model="page"
              :color="color"
              :rounded="rounded"
              :length="length"
        ></v-pagination>
    </div>

</template>

<script lang="js">

    export default  {
        name: 'widget-pagination',
        components: {

        },
        props: {
            rounded: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            },
            length: {
                type: String,
                default: ''
            }
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
