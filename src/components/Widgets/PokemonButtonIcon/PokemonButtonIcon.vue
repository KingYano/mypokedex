<template lang="html">

    <v-btn
        class="button-componenent-icon"
        :disabled="disabled"
        :color="color"
        :loading="loading"
        :size="size"
        :icon="icon"
        :variant="variant"
    >
    </v-btn>

</template>

<script lang="js">

    export default  {
        name: 'widget-button-icon',
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
            icon: {
                type: String,
                default: 'mdi-plus',
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
    @import "../PokemonButtonIcon/PokemonButtonIcon.scss";
</style>
