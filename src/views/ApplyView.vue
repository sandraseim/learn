<template>
   <section class="apply-form">
            <h2>Apply Now</h2>
            <img src="../assets/img/apply.jpeg" alt="apply" style="width: 200px;">
            <form id="applyForm">
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required v-model="formData.email" ><br><br>

                <label for="text">Text:</label><br>
                <textarea id="text" name="text" required v-model="formData.message"> </textarea>
                <label for="phone">Phone:</label><br>
                <input type="tel" id="phone" name="phone" v-model="formData.phone" required><br><br>

                <fieldset>
                    <legend>Select Study Level:</legend>
                    <input type="radio" id="highest" name="studyType" value="2000"  v-model="formData.studyType">
                    <label for="highest"> High - €2000</label><br>
                    <input type="radio" id="normal" name="studyType" value="1000"  v-model="formData.studyType">
                    <label for="normal"> Elementary - €1000</label><br>
                    <input type="radio" id="lowest" name="studyType" value="500"  v-model="formData.studyType">
                    <label for="lowest"> Basic - €500</label><br>
                </fieldset><br>

                
                <p id="price" v-if="formData.studyType">Your price is: {{formData.studyType}} €</p>
                <label for="reasons">Reasons to Apply:</label><br>
                <table id="reasonsTable" style="width:100%">
                    <tr>
                        <th>Reason</th>
                    </tr>
                    <tr>
                        <td>Become smart</td>
                    </tr>
                    <tr>
                        <td>New Friends</td>
                    </tr>
                    <tr>
                        <td>Magical Environment</td>
                    </tr>
                    <tr>
                        <td>Learn Spells</td>
                    </tr>
                    <tr>
                        <td>Transform into Wizards</td>
                    </tr>
                    <tr>
                        <td>Explore Hogwarts</td> 
                    </tr>
                </table><br>

                <button type="button" @click="submitMyForm  " class="submit-button">Submit</button>
            </form>
        </section>
  </template>
  
  <script>
export default {
  data() {
    return {
      formData: {
        email: '',
        message: '',
        phone: '',
        studyType: ''	
      }
      
    }
  },
  methods: {
    submitMyForm() {
      if (this.validateForm()) {
        alert('Form submitted')
      }
      console.log(this.formData)
      
    },
    validateForm() {

      if (!this.formData.email) {
        alert('Please enter your email')
        return false
      }
      if (!this.formData.message) {
        alert('Please enter a message')
        return false
      }
      if (!this.formData.phone) {
        alert('Please enter your phone number')
        return false
      }
      if (!this.formData.studyType) {
        alert('Please select your study type')
        return false
      }

      return true;
    }
  }
}
</script>