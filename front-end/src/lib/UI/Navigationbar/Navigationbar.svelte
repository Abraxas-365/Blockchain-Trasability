<script lang="ts">
	import user from "$lib/Shared/stores/auth";
	import DefaultButton from "../Buttons/DefaultButton";
	import { getNavbar } from "./utils";

	let navInfo = getNavbar();
</script>

<nav class="navbar navbar-expand-lg bg-[#3B4252] ">
	<div class="container-fluid">
		{#await navInfo}
			<slot />
		{:then navInfo}
			<a
				class="text-white no-underline text-3xl font-bold ml-[8%]"
				href="/">{navInfo.name}</a
			>
		{/await}
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarText"
			aria-controls="navbarText"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		{#if $user.token}
			<div class="collapse navbar-collapse" id="navbarText">
				<ul
					class="navbar-nav lg:ml-[60%] space-y-5 lg:space-y-0 lg:space-x-10"
				>
					<li class="nav-item">
						<div class="w-[150px]">
							<DefaultButton
								text="Logout"
								textStyle="p-[8px] px-[15px]"
							/>
						</div>
					</li>
					<li class="nav-item">
						<div class="w-[150px]">
							<DefaultButton
								text="Dashboard"
								textStyle="p-[8px] px-[15px]"
							/>
						</div>
					</li>
				</ul>
			</div>
		{:else}
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a
							class="nav-link active"
							aria-current="page"
							href="/login">Home</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Features</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Pricing</a>
					</li>
				</ul>
				<span class="navbar-text">
					Navbar text with an inline element
				</span>
			</div>
		{/if}
	</div>
</nav>
