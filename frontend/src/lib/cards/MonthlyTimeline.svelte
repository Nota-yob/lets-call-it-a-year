<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	const { story } = $props();

	/**
	 * Expecting:
	 * story.data.months: Array<{
	 *   month: string;
	 *   label: string;
	 *   color?: string;
	 *   icon?: string;
	 * }>
	 */
</script>

<div class="flex h-screen w-screen items-center justify-center bg-black text-white">
	<div in:fade={{ duration: 400 }} class="flex items-center justify-center">
		<div
			in:fly={{ y: 40, duration: 500, easing: cubicOut }}
			class="flex w-full flex-col items-center px-6 text-center"
		>
			<!-- Source -->
			<div class="mb-6 text-2xl opacity-80">
				{story.source.name}
			</div>

			<!-- Title before -->
			{#if story.title.before}
				<h1 class="mb-10 text-3xl font-semibold opacity-80 md:text-4xl">
					{story.title.before}
				</h1>
			{/if}

			<!-- Monthly grid -->
			<div
				class="
          grid
          w-full
          max-w-4xl
          grid-cols-3
          gap-4
          md:grid-cols-4
        "
			>
				{#each ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'] as month, index}
					<div
						in:fly={{
							y: 20,
							duration: 400,
							delay: index * 60,
							easing: cubicOut
						}}
						class="
              flex
              aspect-square
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              p-4
              text-center
            "
					>
						<!-- Month -->
            <div class="text-xs tracking-widest uppercase opacity-50 mb-2">
              {month}
            </div>

            <!-- Top line: main label -->
            <div class="text-lg font-semibold leading-tight">
              {story.data.items[month].value}
            </div>

            <!-- Bottom line: amount + units -->
            <div class="text-sm font-medium text-white/70 mt-1">
              {#if story.data.amount[month].type == 'duration'}for {/if}
              {story.data.amount[month].value}
              {#if story.data.amount[month].unit} {story.data.amount[month].unit}{/if}
            </div>
					</div>
				{/each}
			</div>

			<!-- Title after -->
			{#if story.title.after}
				<h1 class="mt-10 text-3xl font-semibold opacity-80 md:text-4xl">
					{story.title.after}
				</h1>
			{/if}
		</div>
	</div>
</div>
