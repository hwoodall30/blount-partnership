<script lang="ts">
	import { onMount } from 'svelte';
	import { supabase } from '../Utils/supabaseClient';
	import { page } from '$app/stores';

	let Candidate = [];
	onMount(async () => {
		let { data, error } = await supabase
			.from('Blount-Candidates')
			.select('*')
			.ilike('FullName', $page.params.candidate);
		Candidate = data;
	});
</script>

<div class="CandidateDetails">
	<div class="innerContainer">
		<div class="Title">MEET THE CANDIDATE</div>
		<div class="UpperContainer">
			<img id="CandidatePhoto" src={Candidate[0]?.Photo} alt="" />
			<div class="PictureDetails">
				<div>
					<b>Candidate</b>
					<p>{Candidate[0]?.FullName}</p>
				</div>
				<div>
					<b>Office Sought</b>
					<p>{Candidate[0]?.PositionRunning}</p>
				</div>
				<div>
					<b>Campaign Website</b>
					{#if Candidate[0]?.Website}
						<p>{Candidate[0]?.CampaignWebsite}</p>
					{:else}
						<p>None</p>
					{/if}
				</div>
				<div>
					<b>Social Media</b>
					<div id="Socials">
						{#if Candidate[0]?.CampaignFacebook}
							<a target="_blank" href={Candidate[0]?.CampaignFacebook}>
								<img width="30" height="30" src="/Images/VS__FaceBook_Logo.svg" alt="Facebook" />
							</a>
						{/if}
						{#if Candidate[0]?.CampaignInstagram}
							<a target="_blank" href="/">
								<img width="30" height="30" src="/Images/VS__Insta_Logo.svg" alt="Instagram" />
							</a>
						{/if}
						{#if Candidate[0]?.CampaignTwitter}
							<a target="_blank" href={Candidate[0]?.CampaignTwitter}>
								<img width="30" height="30" src="/Images/VS__Twitter_Logo.svg" alt="Twitter" />
							</a>
						{/if}

						{#if Candidate[0]?.CampaignLinkedIn}
							<a target="_blank" href="/">
								<img width="30" height="30" src="/Images/VS__LinkedIn_Logo.svg" alt="LinkedIn" />
							</a>
						{/if}
					</div>
				</div>
				<div>
					<b>Other Campaign Links</b>
					{#if Candidate[0]?.OtherCampaignLinks}
						<a href={Candidate[0]?.OtherCampaignLinks}>
							<p>{Candidate[0]?.OtherCampaignLinks}</p>
						</a>
					{:else}
						<p>None</p>
					{/if}
				</div>
			</div>
		</div>
		<div class="OtherDetails">
			<div>
				<h4>Where are you from?</h4>
				<p>
					{Candidate[0]?.['answer-one'] !== null ? Candidate[0]?.['answer-one'] : ''}
				</p>
			</div>
			<div>
				<h4>How Long have you lived in Blount County?</h4>
				<p>
					{Candidate[0]?.['answer-two'] !== null ? Candidate[0]?.['answer-two'] : ''}
				</p>
			</div>
			<div>
				<h4>What is your profession?</h4>
				<p>
					{Candidate[0]?.['answer-three'] !== null ? Candidate[0]?.['answer-three'] : ''}
				</p>
			</div>
			<div>
				<h4>
					In your opinion, what are the two most important challanges facing our country and how do you propose to
					address them?
				</h4>
				<p>
					{Candidate[0]?.['answer-four'] !== null ? Candidate[0]?.['answer-four'] : ''}
				</p>
			</div>
			<div>
				<h4>What are your top three priorities for small business if you are elected?</h4>
				<p>
					{Candidate[0]?.['answer-five'] !== null ? Candidate[0]?.['answer-five'] : ''}
				</p>
			</div>
			<div>
				<h4>What kind of policies, if any, will you pursue to promote social and racial justice in our community?</h4>
				<p>
					{Candidate[0]?.['answer-six'] !== null ? Candidate[0]?.['answer-six'] : ''}
				</p>
			</div>
			<div>
				<h4>What do you hope to accomplish as an elected official?</h4>
				<p>
					{Candidate[0]?.['answer-seven'] !== null ? Candidate[0]?.['answer-seven'] : ''}
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.CandidateDetails {
		min-height: 85vh;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.innerContainer {
		width: var(--desktop-width);
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding-top: 50px;
	}

	.Title {
		font-size: 1.5em;
		margin-bottom: 20px;
		width: 100%;
	}

	.UpperContainer {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 70px;
		min-height: 51vh;
		width: 100%;
	}

	#CandidatePhoto {
		border-radius: 5px;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
		object-fit: cover;
		width: 320px;
		min-width: 320px;
		height: 450px;
	}

	.PictureDetails {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 20px;
		justify-self: start;
		width: 95%;
		max-width: 350px;
	}

	.OtherDetails {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 10px;
		padding-top: 100px;
		padding-bottom: 50px;
	}

	.OtherDetails > div {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	#Socials {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 5px;
		margin-top: 4px;
	}

	#Socials img {
		cursor: pointer;
	}

	@media only screen and (max-width: 1100px) {
		.Title {
			display: flex;
			justify-content: center;
		}
		.UpperContainer {
			justify-content: center;
			align-items: center;
		}

		#CandidatePhoto {
			width: clamp(240px, 20vw, 400px);
			border-radius: 5px;
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
			object-fit: cover;
		}
	}
</style>
