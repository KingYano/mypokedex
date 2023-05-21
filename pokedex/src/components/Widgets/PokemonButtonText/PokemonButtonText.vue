<template lang="html">

    <v-btn
        class="button-componenent-text"
        :disabled="disabled"
        :color="color"
        :loading="loading"
        :size="size"
        :variant="variant"
    >
        {{texte}}
    </v-btn>

</template>

<script lang="js">

    export default  {
        name: 'widget-button-text',
        components: {

        },
        props: {
            // disabled: false or true.
            disabled: {
                type: Boolean,
                default: true,
            },
            color: {
                type: String,
                default: '',
            },
            // loading: false or true.
            loading: {
                type: Boolean,
                default: false,
            },
            // sizes: x-small, small, default, large and x-large.
            size: {
                type: String,
                default: 'default'
            },
            texte: {
                type: String,
                default: '',
            },
            // variant: text, flat, elevated, tonal, outlined and plain.
            variant: {
                type: String,
                default: '',
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
    @import "../PokemonButtonText/PokemonButtonText.scss";
</style>
