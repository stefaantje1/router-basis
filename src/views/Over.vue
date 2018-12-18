<template>
    <div class="over">
        <h1>Over ons</h1>
        <article>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga necessitatibus dignissimos ab itaque sunt provident? Et odit reprehenderit veritatis rem, quidem veniam vitae, ut magnam modi, nostrum eum laborum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis voluptatum culpa consectetur! In placeat similique iste pariatur nostrum quia culpa nobis architecto tenetur commodi minus at eos et fugit illum, deserunt cum iure possimus consectetur assumenda. Vitae excepturi facilis earum, molestias ex quas? Animi perspiciatis quae voluptatem nesciunt enim tempore perferendis ex distinctio maxime incidunt esse dolore minima, veniam omnis! Voluptate possimus animi ipsa corporis ipsam aut sint iusto ratione fugiat, debitis omnis eius optio accusamus rem. Culpa provident quaerat saepe nihil consectetur voluptatem suscipit assumenda veniam animi. Ea pariatur velit perspiciatis voluptate quia enim voluptatem quis ut facere error.
            </p>
            <hr>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga necessitatibus dignissimos ab itaque sunt provident? Et odit reprehenderit veritatis rem, quidem veniam vitae, ut magnam modi, nostrum eum laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque reiciendis blanditiis aperiam beatae. Nam non dolor commodi laudantium eum, eveniet magni soluta a velit laboriosam, vitae ducimus ullam, sit accusamus eius sunt dolores? Unde dolores ex sint deleniti nobis debitis ipsam culpa, aspernatur numquam quis nemo illum rem quam architecto doloribus similique aliquam consequuntur iusto maxime? Officia, autem aperiam.

            </p>
        </article>

    </div>
</template>

<script>
export default {


}
</script>

<style scoped>
    .over {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5rem;
    }
    h1 {
        font-size: 7rem;
        color: #40b782;
    }
    article{
        padding: 3rem;
        /*text uitvullen*/
        text-align: justify;
        /* */
        max-width: 1152px;
        /* 1.6 huidige lineheight (multiplayer)*/
        line-height: 1.6;
    }
    hr{
        /*boven en onder 2 rem links en rechts 0*/
        margin: 2rem 0;
    }


</style>
