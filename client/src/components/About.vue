<template>
    <div class="about">
        <Navbar />
        <div class="text-center">
            <h1>About</h1>
            <div style="padding:20px">
                <h4>Written by Todd Clark</h4>
                <h5>Email: phred754@msn.com</h5>
                <h5>Phone: (208)351-0093</h5>
            </div>
            <div style="padding:20px">
                <p>For more info regarding the movie "Hawmps!" contact Sam at FusionWare.  I think he's the only one in Idaho that's seen it!</p>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Navbar from './Navbar.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'About',
        components: {
            Navbar,
            Footer
        }
     }
</script>