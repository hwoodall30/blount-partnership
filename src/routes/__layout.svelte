<script lang="ts">
	import styles from '../styles/global.css';
	import Header from '../Components/Header.svelte';
	import YearBar from '../Components/YearBar.svelte';
	import { onMount } from 'svelte';
	import Footer from '../Components/Footer.svelte';

	let MeetYourCandidateElement;
	onMount(() => {
		MeetYourCandidateElement = document.getElementById('MeetYourCandidate');
	});
</script>

<div class="App">
	<Header />
	<YearBar />
	<slot />
	<Footer />
</div>

<style>
	.App {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		min-height: 100vh;
	}

	@media only screen and (max-width: 980px) {
		.App {
			grid-template-rows: 80px 170px 1fr 0.8fr;
		}
	}
</style>
