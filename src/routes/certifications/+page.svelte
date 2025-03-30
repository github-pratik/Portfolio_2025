<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';

	import { title, items } from '@data/certifications';
	import type { Certification } from '$lib/types';

	let search = '';

	let result: Array<Certification> = items;

	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search.toLowerCase();

		result = items.filter((it) => {
			return (
				it.name.toLowerCase().includes(s) ||
				it.description.toLowerCase().includes(s) ||
				it.issuer.toLowerCase().includes(s) ||
				it.shortDescription.toLowerCase().includes(s) ||
				it.skills?.some((skill) => skill.toLowerCase().includes(s))
			);
		});
	};
</script>

<SearchPage {title} {search} on:search={onSearch}>
	<div class="col items-center mt-10 flex-1">
		{#if result.length === 0}
			<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
				<UIcon icon="i-carbon-certificate" classes="text-3.5em" />
				<p class="font-300">Could not find anything...</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
				{#each result as certification (certification.slug)}
					<Card
						classes={['p-4 col gap-3']}
						tiltDegree={1}
						bgImg={getAssetURL(certification.logo)}
						color={certification.skills?.[0]}
					>
						<div class="row gap-2 items-center mb-1">
							<p class="text-[var(--tertiary-text)] font-500 text-base">{certification.name}</p>
						</div>
						<p class="text-[var(--secondary-text)] text-xs leading-relaxed">{certification.shortDescription}</p>
						<div class="row gap-2 items-center mt-1">
							<p class="text-[var(--accent-text)] text-xs">{certification.issuer}</p>
							<div class="w-[3px] h-[3px] rounded-full bg-[var(--accent-text)]" />
							<p class="text-[var(--accent-text)] text-xs">{certification.date}</p>
						</div>
						<div class="row flex-wrap gap-2 mt-2">
							{#each certification.skills ?? [] as skill}
								<div class="px-2 py-1 rounded-full bg-[var(--main-hover)] text-[var(--secondary-text)] text-xs">
									{skill}
								</div>
							{/each}
						</div>
						<a 
							href={certification.credentialURL} 
							target="_blank" 
							rel="noopener noreferrer"
							class="mt-3 text-[var(--accent-text)] text-xs hover:underline inline-block"
						>
							View Credential
						</a>
					</Card>
				{/each}
			</div>
		{/if}
	</div>
</SearchPage>