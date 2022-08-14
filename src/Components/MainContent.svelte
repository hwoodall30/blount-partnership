<script lang="ts">
	import { browser } from '$app/env';

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	function scrollToElement(id) {
		if (browser) {
			const scrollToElement = document.getElementById(id);
			scrollToElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
</script>

<div class="MainContent">
	<div class="innerContent">
		<div in:fly={{ y: 100 }} class="TopLeftContainer">
			<div style="display: flex; flex-direction: column; align-items: flex-start">
				<div>
					The Blount Chamber, a nonpartisan organization, welcomes you to the voters' resource page for Blount County
					elections. Here, you can view profiles on the candidates running for office during the Federal & State
					Primary, Blount County General, Friendsville and Townsend City elections. <br /> In addition, you'll find
					information on registering to vote, important dates, finding your precinct and district and other information
					relating to Blount County elections in 2022. <br /> There is one more election this year on Nov. 8 for the
					Federal and State General, Alcoa, Louisville and Maryville City elections.<br /> Take time to learn about the
					candidates and remember to exercise your right to vote. Be sure to follow our
					<a
						target="_blank"
						style="color: var(--text-grey); font-size: 16px;"
						href="https://www.facebook.com/groups/votefactsblount">Vote Facts Blount Facebook group &#10148;</a
					>
				</div>
				<a href="https://youtu.be/J3fPQM3W7sk" style="color: var(--text-grey); font-size: 16px;" target="_blank"
					>Vote Facts Youtube &#10148;</a
				>
			</div>
		</div>
		<div in:fly={{ y: 100, delay: 100 }} class="RightContainer">
			<div>
				<div>
					<h3>Important Dates</h3>
					<div>
						<div>
							<b>August 10 - November 1, 2022</b>
							<p>Request an Absentee By-Mail Ballot</p>
						</div>
						<div>
							<b>October 11, 2022</b>
							<p>Last Day to Register to Vote</p>
						</div>
						<div>
							<b>October 19 - November 3</b>
							<p>
								<a target="_blank" href="http://https://www.blounttn.org/477/Early-Voting"
									>Early Voting Period &#10148;</a
								>
							</p>
						</div>
						<div>
							<b>November 8, 2022</b>
							<p>Federal & State General, Alcoa, Louisville, and Maryville City Election</p>
						</div>
					</div>
				</div>
				<div>
					<h3>More Dates</h3>
					<div>
						<a target="_blank" href="https://www.blounttn.org/479/Election-Calendar"
							><p>Click for more info &#10148;</p></a
						>
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
		height: clamp(900px, 93vh, 950px);
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

	.TopLeftContainer a {
		color: rgb(97, 97, 97);
		text-decoration: none;
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
		justify-content: space-between;
		align-items: flex-start;
		gap: 10px;
	}

	.RightContainer > div > div > div > div {
		display: flex;
		flex-direction: column;
		gap: 3px;
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
</style>
