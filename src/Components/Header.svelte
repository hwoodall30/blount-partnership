<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { browser } from '$app/env';

	let windowSize;
	onMount(() => {
		windowSize = window.innerWidth;
		window.onresize = () => {
			windowSize = window.innerWidth;
		};
	});

	function scrollToElement(id) {
		if (browser) {
			const scrollToElement = document.getElementById(id);
			scrollToElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}

	let menuOpen = false;

	let menuItems = [
		{ id: 1, name: 'Home', url: '/', scrollTo: null },
		{ id: 2, name: 'Meet Your Candidates', url: null, scrollTo: 'MeetYourCandidates' },
		{
			id: 3,
			name: 'Register To Vote',
			url: 'https://www.blounttn.org/777/Register-to-Vote-Update-Information',
			scrollTo: null
		},
		{ id: 4, name: 'Find Your Precinct', url: 'https://www.blounttn.org/792/Maps', scrollTo: null }
	];
</script>

<header class="Header">
	<div class="innerContainer">
		<div class="LeftContainer">
			<a href="/">
				<img src="Images/VS__ChamberLogo_Wht.svg" alt="" id="BlountPartnershipLogo" />
			</a>
		</div>
		<div class="MiddleContainer">{' '}</div>
		<div class="RightContainer">
			{#if windowSize > 1100}
				<ul>
					<li on:click={() => scrollToElement('MeetYourCandidate')}>
						<a href="/">Meet Your Candidates</a>
					</li>
					<li>
						<a target="_blank" href="https://www.blounttn.org/777/Register-to-Vote-Update-Information"
							>Register To Vote</a
						>
					</li>
					<li>
						<a target="_blank" href="https://www.blounttn.org/792/Maps">Find Your Precinct</a>
					</li>
				</ul>
			{/if}
		</div>
	</div>

	{#if windowSize <= 1100}
		<button class={menuOpen ? 'menuOpen' : ''} on:click={() => (menuOpen = !menuOpen)}>
			<svg width="32" height="24">
				<line id="top" x1="0" y1="2" x2="32" y2="2" />
				<line id="middle" x1="0" y1="12" x2="24" y2="12" />
				<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
			</svg>
		</button>
	{/if}

	{#if menuOpen}
		<nav
			in:fly={{ x: 100, duration: 800 }}
			out:fly={{ x: 100, duration: 800 }}
			class={menuOpen ? 'menumenuOpen' : 'menuClosed'}
		>
			<ul>
				<li transition:fly|local={{ x: 100 }} on:click={() => (menuOpen = false)}>
					<a href="/">Home</a>
				</li>
				<li
					transition:fly|local={{ x: 100, delay: 100 }}
					on:click={() => {
						menuOpen = false;
						scrollToElement('MeetYourCandidate');
					}}
				>
					Meet Your Candidates
				</li>
				<li transition:fly|local={{ x: 100, delay: 200 }} on:click={() => (menuOpen = false)}>
					<a target="_blank" href="https://www.blounttn.org/777/Register-to-Vote-Update-Information">Register To Vote</a
					>
				</li>
				<li transition:fly|local={{ x: 100, delay: 300 }} on:click={() => (menuOpen = false)}>
					<a target="_blank" href="https://www.blounttn.org/792/Maps">Find Your Precinct</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>

<style>
	.Header {
		background: var(--primary-orange);
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 18px 36px;
	}

	.innerContainer {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr;
		grid-template-rows: 1fr;
		padding-left: clamp(12px, 1%, 15px);
		padding-right: 1%;
		background: var(--primary-orange);
		width: 100%;
		height: 100px;
		width: clamp(calc(500px), 90%, calc(1280px));
	}

	.LeftContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#BlountPartnershipLogo {
		width: 20vw;
		min-width: 190px;
		max-width: 290px;
	}

	.RightContainer {
		justify-self: end;
		align-self: center;
		display: flex;
	}

	ul {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	ul li {
		position: relative;
		width: 200px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 23px;
		font-weight: 500;
		color: var(--light-text);
	}
	ul li:not(:last-child)::after {
		content: '';
		border: 1px solid var(--light-text);
		border-width: 1px 1px 0 0;
		position: absolute;
		right: -3px;
		top: 0;
		height: 100%;
	}

	a {
		color: whitesmoke;
		text-decoration: none;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		height: 100%;
		padding: 18px 36px;
	}

	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
		color: white;
		cursor: pointer;
		z-index: 100;
	}
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}
	button {
		z-index: 20;
		background: transparent;
		outline: none;
		border: none;
		justify-self: flex-end;
	}
	.menuOpen svg {
		transform: scale(0.7);
	}
	.menuOpen #top {
		transform: translate(6px, 0px) rotate(45deg);
	}
	.menuOpen #middle {
		opacity: 0;
	}
	.menuOpen #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}

	nav {
		position: fixed;
		right: 0;
		top: 0;
		height: 100vh;
		width: 300px;
		background: var(--primary-orange);
		backdrop-filter: blur(10px);
		transition: all 0.4s ease;
		transform-origin: 100% 0;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		z-index: 1;
	}
	.menuClosed {
		transition: all 0.4s ease;
		width: 0;
		opacity: 0;
	}
	nav ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		list-style: none;
		margin-top: 70px;
		width: 100%;
	}
	nav ul li {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		width: 100%;
		color: white;
		transition: 0.4s ease;
		cursor: pointer;
		font-size: 18px;
	}
	nav ul li:hover {
		background: rgba(80, 80, 80, 0.5);
	}
	nav ul li a {
		text-decoration: none;
		color: white;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media only screen and (max-width: 1100px) {
	}
</style>
