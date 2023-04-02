<template lang="html">

    <v-btn
        class="button-componenent"
        :disabled="disabled"
        :color="color"
        :loading="loading"
        :size="size"
    >
        {{texte}}
    </v-btn>

</template>

<script lang="js">

    export default  {
        name: 'widget-button',
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
            rounded: {
                type: Boolean,
                default: false,
            },
            // sizes: x-small, small, default, large, and x-large.
            size: {
                type: String,
                default: 'default'
            },
            texte: {
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
    @import "../PokemonButton/PokemonButton.scss";

</style>
