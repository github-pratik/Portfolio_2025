<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { title } from '@data/experience';
	import { getTimeDiff } from '$lib/utils';

	import type { Experience } from '$lib/types';

	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';

	export let data: { experience?: Experience };

	$: computedTitle = data.experience ? `${data.experience.name} - ${title}` : title;
</script>

<TabTitle title={computedTitle} />

<div class="pb-10 overflow-x-hidden col flex-1">
	{#if data.experience === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load experience data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.experience.logo)}>
				<div class="col-center p-y-10">
					<!-- ✅ FONT SIZE REDUCED: Changed from 0.9em to 0.85em for MainTitle container -->
					<div class="text-0.85em">
						<MainTitle>{data.experience.name}</MainTitle>
					</div>
					<!-- ✅ FONT SIZE REDUCED: Added smaller text size for company info -->
					<p class="font-300 text-[var(--tertiary-text)] m-y-2 text-center text-[0.85em]">
						{data.experience.company} · {data.experience.location} · {data.experience.type}
					</p>
					<!-- ✅ FONT SIZE REDUCED: Changed from 0.9em to 0.8em -->
					<p class="font-300 text-0.8em text-[var(--tertiary-text)] m-y-2 text-center">
						{data.experience.formattedPeriod}
					</p>
					<div class="w-75%">
						<CardDivider />
					</div>
					<!-- ✅ FONT SIZE REDUCED: Changed from 0.9em to 0.85em -->
					<div class="row-center flex-wrap text-[0.85em] text-[var(--tertiary-text)] m-b-2">
						{#each data.experience.links as item}
							<Chip href={item.to}>
								<div class="row-center gap-2">
									<UIcon icon="i-carbon-link" />
									<span>{item.label}</span>
								</div>
							</Chip>
						{/each}
					</div>
					<div class="row-center flex-wrap m-b-2">
						{#each data.experience.skills as item}
							<Chip
								classes="inline-flex flex-row items-center justify-center"
								href={`${base}/skills/${item.slug}`}
							>
								<CardLogo
									src={getAssetURL(item.logo)}
									alt={item.name}
									radius={'0px'}
									size={15}
									classes="mr-2"
								/>
								<!-- ✅ FONT SIZE REDUCED: Changed from 0.9em to 0.85em -->
								<span class="text-[0.85em]">{item.name}</span>
							</Chip>
						{/each}
					</div>
				</div>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<!-- ✅ FONT SIZE REDUCED: Added smaller text size for description content -->
				<div class="px-10px m-y-5 text-[0.9em]">
					{#if data.experience.description}
						<Markdown
							content={data.experience.description ?? 'This place is yet to be filled...'}
						/>
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description...</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>
