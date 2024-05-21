<template>

    <section class="about-us">
            <h2>About Us</h2>
            <img src="../assets/img/squad.jpeg" alt="squad" img id="squad"> 
            
            <div class="squads">
            <p>Welcome to Harry Potter Guinea Pig School! We are a magical institution dedicated to providing the finest education for guinea pigs.</p>
          </div>
        </section>

        <section class="teacher-section">
            <h2>Meet Our Teachers</h2>
            <div class="teacher">
                <img src="../assets/img/hagrid.jpeg" alt="Hagrid" class="teacher-image">
                <div class="teacher-description">
                <h3>Hagrid</h3>
                <p>Hagrid is our Care of Magical Creatures professor. He has a deep love for all creatures magical and he's excited to share his knowledge and passion with our guinea pig students.</p>
            </div></div>
            <div class="teacher">
                <img src="../assets/img/dumbledor.jpeg" alt="Dumbledore" class="teacher-image">
                <div class="teacher-description">
                <h3>Dumbledore</h3>
                <p>Professor Dumbledore is our Headmaster and Transfiguration teacher. Wise and kind.</p>
            </div></div>
            <div class="teacher">
                <img src="../assets/img/snape.jpeg" alt="Snape" class="teacher-image">
                <div class="teacher-description">
                <h3>Snape</h3>
                <p>Professor Snape teaches Potions at our school. He pushes his students to excel in the art of brewing magic.</p>
            </div></div>
        </section>
        <section class="sport">
            <h2><u><a  data-bs-toggle="modal" data-bs-target="#exampleModal2" >See Our Sport</a></u></h2>
            
            

            <!-- Modal (paslēpts) -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Our Sport</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="../assets/img/game.jpeg" alt="game" class="game-image">
        <div class="sport-description">
                <h3>Quidditch</h3>
                <p>Join us for a thrilling game of Quidditch! This magical sport involves flying on broomsticks, scoring points, and chasing the elusive Golden Snitch.</p>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
</section>

</template>