<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	type Content = {
		main_content: string;
		important_dates: { date: string; description: string; link_title: string; link: string }[];
		election_day: string;
	};

	let content: Content | undefined;
	let loading = true;
	let error = false;

	onMount(async () => {
		try {
			loading = true;

			const res = await fetch('https://hwoodall30.github.io/blount-partnership/src/lib/data/content.json');
			if (!res.ok) throw new Error('Network response was not ok');
			const json = await res.json();

			content = json;
		} catch (e) {
			error = true;
			console.error(e);
		} finally {
			loading = false;
		}
	});

	function scrollToElement(id: string) {
		if (browser) {
			document.getElementById(id)?.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
</script>

<div class="MainContent">
	{#if loading}
		<div class="Spinner" />
	{:else if error}
		<div class="Error">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40"
				height="40"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<circle cx="12" cy="12" r="10" />
				<line x1="12" y1="8" x2="12" y2="12" />
				<line x1="12" y1="16" x2="12.01" y2="16" />
			</svg>
			<p>Unable to load content</p>
			<span>Please check your connection and try again.</span>
			<button on:click={() => window.location.reload()}>Retry</button>
		</div>
	{:else}
		<div class="innerContent">
			<div in:fly={{ y: 100 }} class="TopLeftContainer">
				<div style="display: flex; flex-direction: column; align-items: flex-start">
					<div>
						{@html (content?.main_content || '')?.replace(/\n\n/g, '<br><br>')}
					</div>
				</div>
			</div>
			<div in:fly={{ y: 100, delay: 100 }} class="RightContainer">
				<div>
					<div>
						<h3>Important Dates</h3>
						<div>
							{#each content?.important_dates || [] as d}
								<div>
									{#if d.date}
										<b>{d.date}</b>
									{/if}
									{#if d.description}
										<p>{d.description}</p>
									{/if}
									{#if d.link}
										<a target="_blank" href={d.link}>{d?.link_title || ''}</a>
									{/if}
								</div>
							{/each}
						</div>
					</div>
					<div>
						<h3>Election Day</h3>
						<div>
							<div>
								<b>{content?.election_day || ''}</b>
								<a target="_blank" href="https://tnmap.tn.gov/voterlookup/"><p>Vote at your precinct &#10148;</p></a>
								<a target="_blank" href="http://sos.tn.gov/products/elections/what-id-required-when-voting"
									><p>You must present a valid ID to vote. For more information, click here &#10148;</p></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="CardContainer">
				<a href="/">
					<img
						on:click={() => scrollToElement('MeetYourCandidate')}
						src={'Images/VS__MeetYourCand_Btn.svg'}
						alt=""
						width="170"
						in:fly={{ y: 100 }}
					/>
				</a>
				<a target="_blank" href="https://www.blounttn.org/777/Register-to-Vote-Update-Information">
					<img in:fly={{ y: 100, delay: 100 }} src={'Images/VS__RegToVote_Btn.svg'} alt="" width="170" />
				</a>
				<a target="_blank" href="https://www.blounttn.org/792/Maps">
					<img in:fly={{ y: 100, delay: 200 }} src={'Images/VS__FindYourPrec_Btn.svg'} alt="" width="170" />
				</a>
			</div>
		</div>
	{/if}
</div>

<style>
	.MainContent {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 75px;
		height: clamp(970px, 105vh, 1100px);
	}

	.innerContent {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr 1.5fr;
		grid-template-areas:
			'TopLeftContainer RightContainer'
			'CardContainer RightContainer';
		width: var(--desktop-width);
		min-height: 70vh;
		justify-items: space-between;
		align-items: space-between;
		justify-content: space-between;
		align-content: space-between;
		gap: 70px;
		padding: 50px 0;
	}

	.TopLeftContainer {
		grid-area: TopLeftContainer;
		width: 100%;
		height: 100%;
		line-height: 30px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.TopLeftContainer > div {
		width: 100%;
		min-width: 300px;
		height: 80%;
		letter-spacing: 0.05em;
		font-size: 17px;
		color: rgb(97, 97, 97);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		align-items: center;
	}

	.RightContainer {
		grid-area: RightContainer;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.RightContainer > div {
		width: 100%;
		min-width: 280px;
		height: 100%;
		background: rgb(179, 116, 61, 0.3);
		border-radius: 5px;
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 60px;
		padding: 20px;
	}

	.RightContainer > div > div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 24px;
	}

	.RightContainer > div h3 {
		color: var(--primary-orange);
		align-self: center;
	}

	.RightContainer > div > div > div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: flex-start;
		gap: 20px;
	}

	.RightContainer > div > div > div > div {
		display: flex;
		flex-direction: column;
		gap: 15px;
		margin-bottom: 20px;
	}

	.RightContainer > div > div > div a {
		text-decoration: none;
		color: grey;
	}

	b {
		color: rgb(90, 90, 90);
	}

	p {
		color: rgb(119, 117, 117);
	}

	.CardContainer {
		grid-area: CardContainer;
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		gap: 50px;
	}

	.CardContainer img {
		cursor: pointer;
	}

	@media only screen and (max-width: 1200px) {
		.MainContent {
			max-height: none;
			height: auto;
		}
		.innerContent {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 30px;
		}

		.RightContainer > div {
			display: flex;
			width: 95%;
			margin-bottom: 20px;
			gap: 20px;
		}

		.RightContainer > div > div {
			display: flex;
			gap: 25px;
		}

		.RightContainer > div > div > div {
			display: flex;
			gap: 15px;
		}

		.CardContainer {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: center;
			width: 80%;
		}

		.CardContainer img {
			width: clamp(70px, 20vw, 280px);
		}
	}

	.Error {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		color: var(--primary-orange);
	}

	.Error p {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
		color: rgb(90, 90, 90);
	}

	.Error span {
		font-size: 14px;
		color: rgb(150, 150, 150);
	}

	.Error button {
		margin-top: 8px;
		padding: 8px 24px;
		border: 1.5px solid var(--primary-orange);
		border-radius: 4px;
		background: transparent;
		color: var(--primary-orange);
		font-size: 14px;
		cursor: pointer;
		transition: background 0.2s, color 0.2s;
	}

	.Error button:hover {
		background: var(--primary-orange);
		color: white;
	}

	.Spinner {
		width: 48px;
		height: 48px;
		border: 4px solid rgba(179, 116, 61, 0.2);
		border-top-color: var(--primary-orange);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
