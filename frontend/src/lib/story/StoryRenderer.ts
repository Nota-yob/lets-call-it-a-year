import HeroStat from '$lib/cards/HeroStat.svelte';
import TopItem from '$lib/cards/TopItem.svelte';
import TopNItems from '$lib/cards/TopNItems.svelte';
import TimeRange from '$lib/cards/TimeRange.svelte';
import MonthlyTimeline from '$lib/cards/MonthlyTimeline.svelte';

// later: TopItem, HighestLowest, etc.

export const StoryRenderer: Record<string, any> = {
	HERO_STAT: HeroStat,
	TOP_ITEM: TopItem,
	TOP_N_ITEMS: TopNItems,
	TIME_RANGE: TimeRange,
	MONTHLY_TIMELINE: MonthlyTimeline
};
