<script>
    import { goto } from "$app/navigation";

    import DefaultButton from "$lib/UI/Buttons/DefaultButton";
    import BeneficiosCard from "../Cards/BeneficiosCard";
</script>

<div>
    <!--options-->
    <section class="border-b-2 border-black pb-[70px]">
        <!--text  -->
        <p>
            Estás a un paso de certificar la autenticidad del contenido original
            y fecha cierta de existencia de cualquier tipo de documento digital
            o información, a través del uso de las tecnologías Blockchain o de
            Registro Distribuido (DLT).
        </p>
        <p class="mt-[20px]">
            No necesitas saber programar ni mucho menos, con nosotros lo podrás
            hacer a solo unos clics de distancia
        </p>
        <h4 class="text-center">¿QUÉ QUIERES HACER HOY?</h4>
        <div class="row">
            <div class="col-md-6 col-lg-6 col-xl-6">
                <img
                    class="object-center mx-auto"
                    src="https://magictrust.magia.digital/static/media/icono_subir.f3455752.svg"
                    alt="0"
                />
                <DefaultButton
                    text="SUBIR DOCUMENTOS"
                    handleClick={() => {
                        goto("/newcertification");
                    }}
                />
            </div>

            <div class="col-md-6 col-lg-6 col-xl-6 items-center ">
                <img
                    class="object-center mx-auto"
                    src="https://magictrust.magia.digital/static/media/icono_lupa.f1326bc5.svg"
                    alt="0"
                />
                <DefaultButton text="VERIFICAR DOCUMENTOS" />
            </div>
        </div>
    </section>

    <!--  more info -->
    <section class="mt-[100px] pb-[100px]">
        <h4 class="">TRAZABILIDAD BLOCKCHAIN</h4>
        <p class="mt-[30px]">El siguiente paso</p>
        <p class="mt-[30px]">
            A través de Magic Trust has podido anclar en un Blockchain
            documentos digitales y así conservarlo íntegro e inmutable... pero
            esto no queda aquí. Gracias a la tecnología Blockchain podremos
            también registrar datos de cada proceso es una cadena de valor. Esto
            es conocido como TRAZABILIDAD.
        </p>

        <h4 class="text-center mt-[35px]">REGISTRA TODA LA CADENA DE VALOR</h4>
        <img
            class="mt-[10px]"
            src="https://magictrust.magia.digital/static/media/diagramaH.1a74b3e5.png"
            alt="0"
        />
        <h4 class="text-center mt-[70px]">BENEFICIOS</h4>

        <div class="row mx-auto pt-[25px]">
            <BeneficiosCard />
            <BeneficiosCard />
            <BeneficiosCard />
            <BeneficiosCard />
            <BeneficiosCard />
        </div>
    </section>
</div>
