<script>

import Image from './Image.svelte';

export let question;

</script>

<div class="image-section">
    <h4>{@html question.subtitle}</h4>
    <Image image={question.img} />
</div>

<style>
.image-section {
    display: flex;
    padding: 20px 0;
    align-items: center;
}

.image-section h4 {
    font-size: 2rem;
    color: black;
    font-weight: 800;
    font-family: 'Open Sans', sans-serif;
    padding: 20px;
    text-align: center;
}

.image-section > * {
    width: 50%;
}

.image-section :global(img) {
    max-width: 400px;
}

@media only screen and (max-width: 600px) {
    .image-section {
        display: block;
    }

    .image-section > * {
        width: 100%;
        text-align: center;
    }
}
</style>