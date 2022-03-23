<script lang="ts">
</script>

<footer>
	<div class="innerContainer">
		<div id="FooterText">&copy; 2022, Blount Partnership</div>
		<a target="_blank" href="http://www.visualvoice.design"><div class="VisualVoice">Powered By: Visual Voice</div></a>
		<div id="FooterIcons">
			<a target="_blank" href="https://www.facebook.com/blountchamber">
				<img src="/Images/VS__FaceBook_Logo.svg" alt="Facebook" />
			</a>
			<a target="_blank" href="https://www.instagram.com/blountchamber/">
				<img src="/Images/VS__Insta_Logo.svg" alt="Instagram" />
			</a>
			<a target="_blank" href="https://linkedin.com/company/blountpartnership">
				<img src="/Images/VS__LinkedIn_Logo.svg" alt="LinkedIn" />
			</a>
		</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #456163;
		width: 100%;
		height: 130px;
		color: white;
	}

	.innerContainer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		height: 100%;
		position: relative;
		width: var(--desktop-width);
	}

	#FooterText {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: max-content;
	}

	.VisualVoice {
		position: absolute;
		top: 70%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: max-content;
		color: white;
	}

	img {
		width: 40px;
		height: 40px;
		margin: 0 7px;
	}

	@media only screen and (max-width: 1100px) {
		#FooterIcons {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		#FooterText {
			top: 25%;
		}

		.VisualVoice {
			top: 75%;
		}

		img {
			width: 30px;
			height: 30px;
			margin: 0 4px;
		}
	}
</style>
