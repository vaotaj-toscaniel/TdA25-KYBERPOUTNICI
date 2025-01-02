<template>
    <div>
        <BaseNavigation />
        <main>
            <slot />
        </main>
        <BaseFooter />
    </div>
</template>

<style>
@font-face {
    font-family: 'Dosis';
    src: url('Dosis-VariableFont_wght.ttf') format('woff2-variations');
}
main{
    position: absolute;
    top: calc(15vh + 2 * 40px);
    padding: 20px 40px;
    font-family: 'Dosis';
}
</style>
<script setup>

</script>
