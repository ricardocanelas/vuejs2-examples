<template>
    <div class="container">
        <h2 class="title is-2">Contact Page</h2>

        <p>Optime, inquam. Nullus est igitur cuiusquam dies natalis. Collatio igitur ista te nihil iuvat. Quid enim
            tanto opus est instrumento in optimis artibus comparandis? Quae cum dixisset, finem ille. Istam voluptatem
            perpetuam quis potest praestare sapienti? Esse enim quam vellet iniquus iustus poterat inpune. Non est
            igitur voluptas bonum.</p>

        <ul id="contacts-ul">
            <li v-for="contact in contacts">
                <b>{{contact.local}}</b>
                <small>{{contact.phone}}
            </li>
        </ul>
    </div>
</template>

<style lang="scss">

    .container #contacts-ul{
        margin:20px 0
    }

</style>

<script>
    import Contact from './../models/Contact.js';

    export default {
        data(){
            return{
                contacts: []
            }
        },
        created() {
            Contact.all()
                .then( ({data}) => this.contacts = data);
        }
    }

</script>