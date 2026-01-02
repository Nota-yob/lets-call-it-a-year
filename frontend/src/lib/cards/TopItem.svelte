<script lang="ts">

    export let story;

</script>

<div class="h-screen w-screen bg-black text-white flex items-center justify-center">
    <div class="flex flex-col items-center text-center">
        {#if story.source.theme?.emoji}
        <div class="text-2xl mb-6">
            {story.source.theme.emoji}
        </div>
        {/if}
        <div  class="text-2xl mb-6">
            {story.source.name}
        </div>

        <h1 class="text-3xl md:text-4xl font-semibold opacity-80">
            {story.title}
        </h1>

        <div class="mt-6 text-7xl md:text-9xl font-extrabold tracking-tight"
            style="color: {story.source.theme?.primaryColor ?? 'white'}">
            {story.data.item.value}
            {#if story.data.amount.value.unit}
            <span class="text-3xl md:text-4xl font-medium opacity-70 ml-2">
                {story.data.amount.value.unit}
            </span>
            {/if}
        </div>
        <div class="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight"
            style="color: {story.source.theme?.primaryColor ?? 'white'}">
            {#if story.data.amount.type == "duration"}
            <span class="text-3xl md:text-4xl font-medium opacity-70 ml-2">
                for
            </span>
            {/if}
            {story.data.amount.value}
            {#if story.data.amount.unit}
            <span class="text-3xl md:text-4xl font-medium opacity-70 ml-2">
                {story.data.amount.unit}
            </span>
            {/if}
        </div>
    </div>
</div>