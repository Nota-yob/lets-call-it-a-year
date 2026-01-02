import HeroStat from '$lib/cards/HeroStat.svelte';
import TopItem from '$lib/cards/TopItem.svelte';

// later: TopItem, HighestLowest, etc.

export const StoryRenderer: Record<string, any> = {
  HERO_STAT: HeroStat,
  TOP_ITEM: TopItem
};
