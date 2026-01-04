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

function resolveRefs(obj: any, metrics: any): any {
    if (Array.isArray(obj)) {
        return obj.map((sub: any) => resolveRefs(sub, metrics));
    } else if (obj && typeof obj === "object") {
        var resolved: Record<string, any> = {};
        for (var key in obj) {
            resolved[key] = resolveRefs(obj[key], metrics);
        }
        return resolved;
    } else if (typeof obj === "string") {
        const metric = metrics[obj];
        if (!metric) throw new Error(`Missing metric: ${obj}`);
        return metric;
    } else {
        return {};
    }
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
