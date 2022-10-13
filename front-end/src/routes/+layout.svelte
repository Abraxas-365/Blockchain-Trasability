<script>
	import Footer from "$lib/UI/Footer";
	import Navigationbar from "$lib/UI/Navigationbar";
	import { validateUser } from "$lib/Shared/functions/validateUser";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	import "../app.css";
	import "../tailwind.css";
	let isSiteReadyToLoad = false;
	onMount(async () => {
		await validateUser();
		// Load the site
		isSiteReadyToLoad = true;
	});
</script>

{#if isSiteReadyToLoad}
	<Navigationbar />
	<div class="bg-[#3B4252] h-full">
		<div class="pt-8">
			<slot />
		</div>
	</div>
	<Footer />
{/if}
