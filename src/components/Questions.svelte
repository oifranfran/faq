<script>

import Question from './Question.svelte';
import { questions } from '../questions.yaml';

</script>

<article class="questions">
  {#each questions as question}
    <Question question={question} />
  {/each}
</article>

<style>
.questions {
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
}

@media only screen and (min-width: 968px) {
  .questions {
    max-width: 968px;
  }
}
</style>