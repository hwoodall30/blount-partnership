<script lang="ts">
</script>

<div class="YearBar">
	<div class="innerContent">
		<div class="LeftColumn">2022</div>
		<div class="RightColumn">Blount County Elections Voter Resources</div>
	</div>
</div>

<style>
	.YearBar {
		width: 100%;
		height: 180px;
		display: grid;
		place-items: center;
	}

	.innerContent {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: var(--desktop-width);
		height: 100%;
		border-bottom: 2px solid var(--primary-orange);
		gap: 10px;
	}

	.LeftColumn {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: clamp(50px, 10vw, 100px);
		font-weight: bold;
		color: var(--text-grey);
	}

	.RightColumn {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: clamp(18px, 4.3vw, 40px);
		max-width: 550px;
		color: rgb(0, 0, 0);
		letter-spacing: 0.04em;
		font-weight: 100;
		line-height: clamp(20px, 4.5vh, 40px);
	}
</style>
