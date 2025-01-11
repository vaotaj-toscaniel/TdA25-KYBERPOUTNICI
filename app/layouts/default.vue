<template>
    <div>
        <BaseNavigation />
        <main>
            <slot />
        </main>
        <!-- <BaseFooter /> -->
    </div>
</template>

<style>
@font-face {
    font-family: 'Dosis';
    src: url('Dosis-VariableFont_wght.ttf') format('woff2-variations');
}
main{
    top: calc(15vh + 50px);
    position: absolute;
    font-family: 'Dosis';
}
</style>
<script setup>

</script>
