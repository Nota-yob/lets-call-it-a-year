<script lang="ts">
  import { resolveStory } from './StoryResolver';
  import { StoryRenderer } from './StoryRenderer';

  export let doc: any;

  let index = 0;

  // Resolve all stories once
  const stories = doc.timeline.map((ref: string) =>
    resolveStory(ref, doc)
  );

  function next() {
    if (index < stories.length - 1) index += 1;
  }

  function prev() {
    if (index > 0) index -= 1;
  }
</script>

<div
  class="h-screen w-screen overflow-hidden"
  tabindex="0"
  on:keydown={(e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  }}
>
  {#if stories[index]}
    {#key stories[index].id}
      <svelte:component
        this={StoryRenderer[stories[index].type]}
        story={stories[index]}
      />
    {/key}
  {/if}
</div>
