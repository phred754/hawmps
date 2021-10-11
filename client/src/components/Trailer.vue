<template>
    <div>
        <Navbar />
        <iframe width="1920" height="1080" class="embed-responsive embed-responsive-16by9 col-xs-12 text-center" src="https://www.youtube.com/embed/p8SX9ORt8kc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Footer />
    </div>
</template>

<script>
    import Navbar from './Navbar.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'Trailer',
        components: {
            Navbar,
            Footer
        },
        created() {
            if(this.$jwt==null){
                this.$router.push('home');
            }
        }
     }
</script>