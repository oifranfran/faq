<script>

import ImageSection from './ImageSection.svelte';
import ImagesRow from './ImagesRow.svelte';

export let question;

</script>

<div class="question">
    <h4 class="question-text">{@html question.question}</h4>
    <p class="answer">{@html question.answer}</p>
    {#if question.type === 'qa-big-text'}
        <ImageSection question={question} />
    {:else if question.type === 'qa-images-row'}
        <ImagesRow question={question} />
    {/if}
</div>

<style>
.question {
    width: 100%;
    border-bottom: 1px solid #d96262;
    padding-bottom: 20px;
    color: black;
}

.question:last-child {
    border-bottom: 0;
    padding-bottom: 0;
}

.question-text {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    margin: 30px 0 10px;
}

.answer {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin: 0;
}
</style>