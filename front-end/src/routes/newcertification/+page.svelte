<script>
    import UploadFile from "$lib/NewCertification/UploadFile";
</script>

<div class="min-h-[70vh] container">
    <h3 class="text-center text-white">CERTIFICAR DOCUMENTO DIGITAL</h3>
    <p class="mt-[45px] text-white">
        Estás a punto de inmutar documentos digitales usando tecnología
        Blockchain o de Registro Distribuido. Ten en cuenta que los documentos
        no serán almacenados en nuestros sistemas, solo calculamos el hash o
        huella digital del documento y los guardamos en las Blockchains
        disponibles por nuestra solución.
    </p>
    <p class="mt-[45px] text-white">
        Por favor, sube el documento que quieres certificar (SOLO ARCHIVOS QUE
        PESEN HASTA 10 MB):
    </p>
    <div class="mt-10">
        <UploadFile />
        <div class=" h-[10px]" />
    </div>
</div>
