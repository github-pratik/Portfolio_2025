<script lang="ts">
    import type { Experience } from '$lib/types';
    import Card from '../Card/Card.svelte';
    import CardLogo from '../Card/CardLogo.svelte';
    import { getAssetURL } from '$lib/data/assets';
    import UIcon from '../Icon/UIcon.svelte';
    import Chip from '../Chip/Chip.svelte';
    import CardDivider from '../Card/CardDivider.svelte';

    export let experience: Experience;
</script>

<!-- ✅ Experience Card -->
<!-- Card size reduced to better match font size -->
<Card classes={["w-full", "max-w-[650px]", "p-2"]}>
    <!-- ✅ FONT SIZE REDUCED: Changed from text-lg to text-base -->
<div class="flex-1 col gap-2 items-stretch text-base">
        <!-- Logo -->
        <img src={getAssetURL(experience.logo)} alt={experience.company} height="45" width="45" class="mb-4" />

        <!-- Job Title & Company -->
        <!-- ✅ FONT SIZE REDUCED: Changed from 1.1em to 1em -->
        <div class="text-[1em] font-semibold">{experience.name}</div>
        <!-- ✅ FONT SIZE REDUCED: Changed from 0.9em to 0.85em -->
        <div class="text-[0.85em] text-gray-400">{experience.company}</div>

        <!-- Location & Time Period -->
        <!-- ✅ FONT SIZE REDUCED: Changed from 0.85em to 0.8em -->
        <div class="col text-[0.8em]">
            <CardDivider />
            <div class="row items-center gap-2">
                <UIcon icon="i-carbon-location" />
                {experience.location}
            </div>
            <CardDivider />
            <div class="row items-center gap-2">
                <UIcon icon="i-carbon-time" />
                {experience.formattedPeriod}
            </div>
            <CardDivider />
        </div>

        <!-- ✅ Dynamic Description with More Space -->
        <!-- ✅ FONT SIZE REDUCED: Changed from 0.85em to 0.8em -->
        <div class="text-[0.8em] text-[var(--text)] mt-2 description-box">
            {experience.description}
        </div>
    </div>
</Card>

<style>
    .description-box {
        line-height: 1.6;
        white-space: pre-line; /* Ensures new lines in long text */
        padding: 10px 0;
    }
</style>
