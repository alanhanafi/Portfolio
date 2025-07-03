<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
        <div>
            I'm <strong>Alan Hanafi</strong>, a game developer with 3 years of experience in the industry, 
            <br />and former <router-link to="/other-projects">professional Esports player</router-link>
        </div>
        <div style="margin-top: 20px;">I have mainly worked on  <router-link to="/game-projects">Skygard Arena</router-link> and I am currently developing my own <router-link to="/game-projects">game</router-link> in Unity.</div>

        <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game developer. You can reach me at <a href="mailto:alanhanafidev@gmail.com">alanhanafidev@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Alan" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>