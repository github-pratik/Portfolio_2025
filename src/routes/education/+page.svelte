<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';

	import { title, items } from '@data/education';
	import type { Education } from '$lib/types';
	import { computeExactDuration, getTimeDiff } from '$lib/utils';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';

	let search = '';

	let result: Array<Education> = items;

	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search;

		result = items.filter((it) => {
			return (
				it.degree.toLowerCase().includes(s) ||
				it.description.toLowerCase().includes(s) ||
				it.location.toLowerCase().includes(s) ||
				it.name.toLowerCase().includes(s) ||
				it.organization.toLowerCase().includes(s) ||
				it.subjects.some((it) => it.toLowerCase().includes(s))
			);
		});
	};
</script>

<SearchPage {title} {search} on:search={onSearch}>
	<div class="col items-center relative mt-10 flex-1">

		{#if result.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-development" classes="text-3.5em" />
				<p class="font-300">Could not find anything...</p>
			</div>
		{:else}
		<div class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded" />

			{#each result as education, index (education.slug)}
			<!-- ✅ MARGINS REDUCED: Changed from ml-[80px]/mr-[10rem] to ml-[50px]/mr-[6rem] and reduced vertical margin -->
<div class={`flex ${ index % 2 !== 0 ? 'flex-row ml-[50px]' : 'flex-row-reverse mr-[-60px]'} relative items-center w-full my-[15px]`} >		
					<div class="flex-1 hidden lg:flex" />
					
					<div class="col flex-1 items-stretch">
						<!-- ✅ CARD SIZE REDUCED: Reduced max width and padding to match experience page -->
<Card classes={["w-full", "max-w-[500px]", "p-2"]}>
							<!-- ✅ FONT SIZE REDUCED: Changed from text-lg to text-base to match experience page -->
<div class="flex-1 col gap-2 items-stretch text-base">
						
								<img
									src={getAssetURL(education.logo)}
									alt={education.organization}
									height="45"
									width="45"
									class="mb-4"
								/>
								<div class="text-[1em] font-semibold">{education.degree}</div>
								<div class="text-[0.85em]">{education.organization}</div>
								<div class="col text-[0.8em]">
									<CardDivider />
									<div class="row items-center gap-2">
										<UIcon icon="i-carbon-location" />
										{education.location}
									</div>
									<CardDivider />
									<div class="row items-center gap-2">
										<UIcon icon="i-carbon-time" />
										{education.formattedPeriod}
									</div>
									<CardDivider />
								</div>
								<div class="row flex-wrap gap-1 mt-2">
									{#each education.subjects as subject}
										<Chip classes={'text-0.8em'}>{subject}</Chip>
									{/each}
								</div>
							</div>
						</Card>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</SearchPage>
