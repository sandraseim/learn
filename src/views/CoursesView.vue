<template>
<!-- Modal (paslēpts) -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Details about selected item (loaded from separate API)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {{ selectedCatItem.text }}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-sm-3" v-for="item in catList">
   
      <div class="card" style="width: 18rem;" >
      <div class="card-body">
        <h5 class="card-title">{{ item.createdAt }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ item.source }}</h6>
        <p class="card-text">{{ item.text }}</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" v-on:click="loadSpecificRecord(item)">
      Read more...
    </button>
      
      </div>
  </div>    
</div>   
</div>

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
       },
       catList:[],
       selectedCatItem: {}
       
     }
   },
   mounted(){
    this.axios.get('https://cat-fact.herokuapp.com/facts/')
      .then(response => {
        console.log(response.data);
        this.catList = response.data;
      })
   },
   methods: {
     loadSpecificRecord(record) {

         
     this.axios.get('https://cat-fact.herokuapp.com/facts/' + record._id)
     .then(response => {
       this.selectedCatItem = response.data
       console.log(response.data)
     })
       
     },
   }
 }
 </script>