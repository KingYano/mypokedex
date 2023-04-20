<template lang="html">

    <v-btn
        class="button-componenent-icon"
        :disabled="disabled"
        :color="color"
        :loading="loading"
        :size="size"
        :icon="icon"
    >
    </v-btn>

</template>

<script lang="js">

    export default  {
        name: 'widget-button-icon',
        components: {

        },
        props: {
            disabled: {
                type: Boolean,
                default: true,
            },
            color: {
                type: String,
                default: 'info',
            },
            loading: {
                type: Boolean,
                default: false,
            },
            // sizes: x-small, small, default, large, and x-large.
            size: {
                type: String,
                default: 'default'
            },
            icon: {
                type: String,
                default: 'mdi-plus',
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
    @import "../PokemonButtonIcon/PokemonButtonIcon.scss";
</style>
