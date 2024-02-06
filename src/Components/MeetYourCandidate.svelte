<script lang="ts">
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { onMount } from 'svelte';
	import { supabase } from '../Utils/supabaseClient';

	let Candidates = [];
	// let Photos = [];
	// let districts = [];
	let PositionRunning = [];
	let selectedPosition;
	onMount(async () => {
		let { data, error } = await supabase.from('Blount-Candidates').select('*');
		data.sort((a, b) => {
			return (
				a.PositionRunning.localeCompare(b.PositionRunning) ||
				b.FullName.toLowerCase().includes('incumbent'.toLowerCase()) -
					a.FullName.toLowerCase().includes('incumbent'.toLowerCase()) ||
				a.FullName.localeCompare(b.FullName)
			);
		});
		Candidates = data;

		let { data: positionRunning, error: positionRunningError } = await supabase
			.from('Blount-Candidates')
			.select('PositionRunning');
		PositionRunning = positionRunning
			.filter((v, i, a) => a.findIndex((t) => ['PositionRunning'].every((k) => t[k] === v[k])) === i)
			.sort((a, b) => {
				return a.PositionRunning.localeCompare(b.PositionRunning);
			});
		selectedPosition = sessionStorage.getItem('selectedPosition') || 'All';
	});

	$: filteredCandidates = Candidates.filter((candidate) => {
		if (selectedPosition !== 'All') {
			return candidate.PositionRunning === selectedPosition;
		} else {
			return candidate;
		}
	});

	function saveSelection(e) {
		selectedPosition = e.target.value;
		sessionStorage.setItem('selectedPosition', e.target.value);
	}
</script>

<div class="MeetYourCandidate" id="MeetYourCandidate">
	<p class="Title">Meet Your Candidates</p>
	<div class="CardContainer">
		{#each filteredCandidates as candidate (candidate.id)}
			<div animate:flip={{ duration: 1000 }}>
				<div transition:fly|local={{ y: 200 }} class="Card">
					<!-- <img src={candidate?.Photo} alt="CandidatePhoto" /> -->
					<div id="CardImage" style="background-image: url('{candidate.Photo}'); width: 190px; height: 240px" />
					<div class="CardText">
						<p class="Name"><b>Candidate: </b>{candidate.FullName}</p>
						<p class="Office"><b>Office Sought: </b>{candidate.PositionRunning}</p>
						<!-- <a style="font-size: clamp(14px, 2vw, 18px);" href={`${candidate.FullName}`}>Learn More &#10148;</a> -->
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div id="PrecinctSelect">
		<label for="precinct">Select an office:</label>
		<select name="precinct" on:change={(e) => saveSelection(e)} value={selectedPosition}>
			<option value="All">All</option>
			{#each PositionRunning as position}
				<option value={position.PositionRunning}>{position.PositionRunning}</option>
			{/each}
		</select>
	</div>
</div>

<style>
	.MeetYourCandidate {
		width: 100%;
		min-height: 93vh;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--primary-tan);
	}

	.Title {
		position: absolute;
		top: -60px;
		left: 17%;
		width: clamp(450px, 35vw, 510px);
		height: 60px;
		font-size: clamp(20px, 1.7vw, 33px);
		padding: 10px 20px;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		background: white;
		color: #000000;
		letter-spacing: 0.05em;
		background: var(--primary-tan);
		font-weight: 200;
		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
	}

	.Title::after {
		content: '';
		position: absolute;
		top: 50px;
		left: 0;
		width: 100%;
		height: 10px;
		background: var(--primary-tan);
	}

	.CardContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
		justify-content: space-between;
		align-items: center;
		width: var(--desktop-width);
		height: 100%;
		gap: 80px;
		padding: 150px 100px 115px 100px;
		padding: 150px 50px;
	}

	.Card {
		display: flex;
		gap: 15px;
		transition: all 0.2s ease;
		height: 240px;
	}

	#CardImage {
		background-size: cover;
		background-position: center;
		width: 190px;
		min-width: 190px;
		height: 240px;
		min-height: 240px;
		border-radius: 5px;
		object-fit: cover;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	}

	.Card > div {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 10px;
		width: max-content;
	}

	.Card div p {
		display: flex;
		flex-direction: column;
		font-size: clamp(0.8rem, 0.8vw, 1.1rem);
	}

	.Card div a {
		color: var(--primary-orange);
		text-decoration: none;
	}

	#PrecinctSelect {
		position: absolute;
		top: 50px;
		left: 20%;
	}

	#PrecinctSelect label {
		font-size: 20px;
		font-weight: 300;
	}

	select {
		font-weight: 42px;
		max-width: 250px;
	}

	a {
		text-decoration: none;
		color: black;
	}

	@media only screen and (max-width: 1100px) {
		.Title {
			left: 50%;
			transform: translateX(-50%);
			width: 320px;
		}

		.CardContainer {
			padding: 150px 20px;
			justify-content: center;
		}

		.Card {
			width: 98%;
		}
	}
</style>
