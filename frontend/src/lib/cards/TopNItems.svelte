<script lang="ts">

    const { story } = $props();

</script>

<div class="h-screen w-screen bg-black text-white flex items-center justify-center p-4">
  <div class="flex flex-col items-center text-center space-y-8 w-full max-w-2xl">
    <!-- Optional emoji -->
    {#if story.source.theme?.emoji}
      <div class="text-2xl">{story.source.theme.emoji}</div>
    {/if}

    <!-- Source name -->
    <div class="text-2xl">{story.source.name}</div>

    <!-- Story title -->
    <h1 class="text-3xl md:text-4xl font-semibold opacity-80">{story.title}</h1>

    <!-- Top N items list -->
    <div class="mt-6 w-full">
      {#each story.data.items as item, index}
        <div class="flex items-center py-4 border-b border-white/20 last:border-b-0">
          <!-- Rank + Label -->
          <div class="flex items-center space-x-4">
            <span class="text-xl md:text-2xl font-bold opacity-80">{index + 1}.</span>
            <span class="text-2xl md:text-3xl font-semibold">{item.label}</span>
          </div>

          <!-- Spacer pushes value to the right -->
          <div class="flex-1"></div>

          <!-- Value -->
          <div class="text-3xl md:text-5xl font-extrabold tracking-tight text-right"
               style="color: {story.source.theme?.primaryColor ?? 'white'}">
            {item.value}
            {#if item.unit}
              <span class="text-xl md:text-2xl font-medium opacity-70 ml-2">{item.unit}</span>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
