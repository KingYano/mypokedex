<template lang="html">

    <div class="widget-progress-loading">
        <v-progress-circular
            indeterminate
            :size="size"
            :width="width"
            :color="color"
            :bg-color="bgColor"
        >
        {{ textLoader }}
        </v-progress-circular>
    </div>

</template>

<script lang="js">

    export default  {
        name: 'widget-progress-loading',
        components: {

        },
        props: {
            size: {
                type: String,
                default: '30',
            },
            width: {
                type: String,
                default: '0',
            },
            color: {
                type: String,
                default: 'default',
            },
            bgColor: {
                type: String,
                default: 'default',
            },
            textLoader: {
                type: String,
                default: 'Loading...',
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
