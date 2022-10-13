<script lang="ts">
    import { getHeader } from "./utils";

    let header = getHeader();
</script>

{#await header}
    <p>...Poner una imagen predeterminada</p>
{:then header}
    <header class="masthead" style="background-image: url('{header.banner}')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>{header.name}</h1>
                        <span class="subheading">{header.slogan}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
{/await}
