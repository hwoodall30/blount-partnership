<script lang="ts">
	import { browser } from '$app/env';

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
					elections. Here, you can view the candidates running for office during November 5 general election for
					President of the United State, U.S. Senator, U.S. House of Representatives (District 2), TN Senate (District
					2), TN House of Representatives (District 8), TN House of Representatives (District 20). Municipal elections
					are set for Alcoa City Council, Alcoa City School Board, Louisville City Alderman, Maryville City Council,
					Maryville City School Board.
					<br /> <br />
					In addition, you'll find information on registering to vote, important dates, finding your precinct and district
					and other information relating to Blount County elections in {new Date().getFullYear()}.
					<br /> <br />
					Take time to learn about the candidates and remember to exercise your right to vote.
				</div>
			</div>
		</div>
		<div in:fly={{ y: 100, delay: 100 }} class="RightContainer">
			<div>
				<div>
					<h3>Important Dates</h3>
					<div>
						<div>
							<b>October 7, 2024</b>
							<p>The last day to register to vote for the November 5 election.</p>
							<a target="_blank" href="https://www.blounttn.gov/777/Register-to-Vote-Update-Information"
								>Register here &#10148;</a
							>
						</div>
						<div>
							<b>October 16 - October 31, 2024</b>
							<a target="_blank" href="https://www.blounttn.org/477/Early-Voting">Early Voting Locations &#10148;</a>
						</div>
					</div>
				</div>
				<div>
					<h3>Election Day</h3>
					<div>
						<div>
							<b>November 5, 2024</b>
							<p>Polls open at 8:00 a.m. - 8:00 p.m.</p>
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
</style>
