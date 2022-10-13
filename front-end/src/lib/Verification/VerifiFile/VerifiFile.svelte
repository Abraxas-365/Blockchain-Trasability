<script lang="ts">
    import FilePond, { registerPlugin, supported } from "svelte-filepond";

    // Import the Image EXIF Orientation and Image Preview plugins
    // Note: These need to be installed separately
    // `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
    import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
    import FilePondPluginImagePreview from "filepond-plugin-image-preview";
    import { browser } from "$app/environment";

    // Register the plugins
    registerPlugin(
        FilePondPluginImageExifOrientation,
        FilePondPluginImagePreview
    );

    // a reference to the component, used to call FilePond methods
    let pond;
    // pond.getFiles() will return the active files

    // the name to use for the internal file input
    let name = "file";

    // handle filepond events
    function handleInit() {}

    function handleAddFile(err, fileItem) {
        console.log("A file has been added", fileItem);
    }

    const defaultName: string = JSON.stringify({});

    const user = JSON.parse(
        browser
            ? window.localStorage.getItem("user") ?? defaultName
            : defaultName
    );
</script>

<div class="app min-h-screen">
    <div class="py-auto">
        <FilePond
            server={{
                url: "http://localhost:8000/api/catcher/create",
                process: {
                    method: "POST",
                    headers: { Authorization: "Bearer " + user.token },
                    timeout: 7000,
                    onload: null,
                    onerror: (response) => {
                        console.log(response);
                    },
                    ondata: null,
                },
            }}
            labelIdle="
                   <div class='mt-[70%] '>
                   <img src='https://magictrust.magia.digital/static/media/upload.b3126b17.svg' alt='0'

                   class='mx-auto'
        />
                   Drag & Drop your files or <span class='filepond--label-action'> Browse </span>
                   </div>
                   "
            bind:this={pond}
            {name}
            oninit={handleInit}
            onaddfile={handleAddFile}
            class="filepond--item filepond--root"
        />
    </div>
</div>

<style global>
    @import "filepond/dist/filepond.css";
    @import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

    .filepond--item {
        width: calc(100% - 0.5em);
    }
    .filepond--root {
        height: 20em;
    }
</style>
