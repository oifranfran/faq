<script>

import Image from './Image.svelte';

export let question;

</script>

<div class="images-row images-row-{question.images.length}">
    {#each question.images as image}
        <Image image={image} />
    {/each}
</div>

<style lang="stylus">
.images-row {
    display: flex;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
}

.images-row :global(img):nth-child(2) {
    margin: 0 20px;
}

calc-col(n)
    (100% / n ) - 1%

.images-row-1 :global(img) { width: 100%; }
.images-row-2 :global(img) { width: calc-col(2); }
.images-row-3 :global(img) { width: calc-col(3); }
.images-row-4 :global(img) { width: calc-col(4); }

@media only screen and (max-width: 800px) {
    .images-row {
        display: block;
    }

    .images-row :global(img) {
        width: 100%;
        max-width: 400px;
        margin: 0 0 20px 0;
    }

    .images-row :global(img):nth-child(2) {
        margin: 0 0 20px 0;
    }
}
</style>