<script lang="ts">
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { fade, fly } from 'svelte/transition';

    export let story;

    const animatedValue = tweened(0, {
        duration: 1200,
        easing: cubicOut
    });

    $: animatedValue.set(story.data.amount.value);
</script>

<div in:fade={{ duration: 400 }} class="h-screen w-screen bg-black text-white flex items-center justify-center">
    <div in:fly={{ y: 40, duration: 500, easing: cubicOut }} class="flex flex-col items-center text-center">

        <div  class="text-2xl mb-6">
            {story.source.name}
        </div>

        <h1 class="text-3xl md:text-4xl font-semibold opacity-80">
            {story.title}
        </h1>

        <div class="mt-6 text-7xl md:text-9xl font-extrabold tracking-tight"
            style="color: {story.source.theme?.primaryColor ?? 'white'}">
            {$animatedValue.toFixed(0)}
            {#if story.data.amount.unit}
            <span class="text-3xl md:text-4xl font-medium opacity-70 ml-2">
                {story.data.amount.unit}
            </span>
            {/if}
        </div>
    </div>
</div>