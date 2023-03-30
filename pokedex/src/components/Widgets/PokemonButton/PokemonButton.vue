<template lang="html">

    <div class="widget-button">
        <v-btn
            class="button-componenent"
            :active="active"
            :color="color"
            :loading="loading"
            :size="size"
            block
        >
            {{texte}}
        </v-btn>
    </div>

</template>

<script lang="js">

    export default  {
        name: 'widget-button',
        components: {

        },
        props: {
            active: {
                type: Boolean,
                default: false,
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
