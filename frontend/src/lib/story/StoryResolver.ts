export interface ResolvedStory {
    id: string;
    type: string;
    title: string;
    source: {
        id: string;
        name: string;
        theme: any;
    };
    data: any;
}


function resolveRefs(refs: Record<string, string>, metrics: any) {
    const resolved: Record<string, any> = {};
    for (const key in refs) {
        const metricId = refs[key];
        const metric = metrics[metricId];

        if (!metric) {
            throw new Error(`Missing metric: ${metricId}`);
        }

        resolved[key] = {
            value: metric.value,
            unit: metric.unit,
            type: metric.type
        };
    }

    return resolved;

}

export function resolveStory(ref: string, doc: any): ResolvedStory {
    const [sourceId, storyId] = ref.split('.');

    const source = doc.sources[sourceId];
    if (!source) {
        throw new Error(`Unknown source: ${sourceId}`);
    }

    const story = source.stories[storyId];
    if (!story) {
        throw new Error(`Unknown story: ${storyId} in ${sourceId}`);
    }

    let resolvedData = story.data;

    // Resolve metric reference if present
    if (story.data?.refs) {
        
        resolvedData = resolveRefs(story.data.refs, source.metrics);
    }

    return {
        id: `${sourceId}.${story.id}`,
        type: story.type,
        title: story.title,
        source: {
            id: sourceId,
            name: source.meta.name,
            theme: source.meta.theme
        },
        data: resolvedData
    };
}
