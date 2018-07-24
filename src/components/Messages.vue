<template>
  <div class="container">
    <section class="is-hero is-primary">
      <div class="hero-body">
        <h1 class="title">Contact Details</h1>
        <h2 class="subtitle">Leave your contact information below and we'll get back with you shortly</h2>
      </div>
    </section>

    <form class="section">
      <div class="columns">
        <div class="column is-one-third">
          <div class="columns">
            <div class="column is-half">
              <div class="control">
                <label class="label" for="first_name">First Name</label>
                <input class="input" type="text" name="first_name" v-model="request.first_name" placeholder="First or given name">
              </div>
            </div>
            <div class="column is-half field">
              <label class="label" for="last_name">Last Name</label>
              <div class="control">
                <input class="input" type="text" name="last_name" v-model="request.last_name" placeholder="Enter sur or last name">
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="control">
            <label class="label" for="email">Email Address</label>
            <div class="control has-icons-left">
              <input class="input" type="email" name="email_address" id="email_address" v-model="request.email_address" placeholder="Email Address">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="control">
            <label for="phone_number" class="label">Best Phone Number</label>
            <div class="control has-icons-left">
              <input class="input" type="tel" name="phone_number" id="phone_number" v-model="request.phone_number" placeholder="Phone Number">
              <span class="icon is-small is-left">
                <i class="fas fa-mobile"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <label for="message_for_recruiter" class="label">Message</label>
          <textarea name="message" id="message_for_recruiter" class="textarea" v-model="request.message" placeholder="Anything you specifically want to follow up on?"></textarea>
        </div>
      </div>
      <input class="button" type="button is-primary" value="Submit!" @click="do_it">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Message',

  data() {
    return {
      request: {}
    }
  },

  methods: {
    do_it() {
      alert('Do it!')
      // axios.post('url', this.request).then().catch();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

