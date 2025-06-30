<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
        I'm <strong>Alan Hanafi</strong>, a game developer currently based in Lille, France.
        <br />After graduating as a computer science engineer in 2022, I've been working as a Unity developer for 3 years, but I'm open to any other engine.
        <br />I joined Gemelli Games because I knew my future was in game development and I quickly adapted to the work environment to become a key element of the team for the past 3 years.
        <br />I love teamwork, and I love working in small companies where everyone knows each other, and everyone's work matters.
        <br />
        <br />Right now I'm working as a solo gamedev on a <router-link to="/game-projects">New game</router-link>.
        <br />
        <br />Besides development, I'm passionate about video games, esports, and I love fantasy books, bouldering and traveling.

        <div style="margin-top:20px; margin-bottom:20px;">
            <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
            <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>
            <div style="clear:both"></div>
        </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Alan" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
        <h2>Work experience</h2>

        <h3>Solo game developer</h3>
        <h4>December 2024-Present</h4>

        <div>Working on a 2D platformer autobattler with asynchronous Pvp.</div>

        <div class="tech-stack">Unity 6, C#, Aseprite, Playfab</div>

        <h3>Gameplay, Multiplayer and Tools developer- Gemelli Games</h3>
        <h4>March 2022-December 2024/May 2025-June 2025</h4>

        <div>It's classified so I can't speak about it.</div>

        <div class="tech-stack">Unity 2022, C#, Playfab, Fishnet</div>



        <h3>Professional esports player-Lille Esport</h3>
        <h4>January 2022-October 2022 / April 2025-May 2025</h4>

        <div>It's classified so I can't speak about it.</div>

        <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

        <h2>Skills</h2>

        <div class="skill-set">
            <h3>Languages</h3>
            <SkillRate name="C#" :rate="4" />
            <SkillRate name="C++" :rate="3" />
            <SkillRate name="Python" :rate="3" />
            <SkillRate name="SQL" :rate="3" />
            <SkillRate name="HTML" :rate="2" />
            <SkillRate name="Caml" :rate="2" />
        </div>

        <div class="skill-set">
            <h3>Game development</h3>
            <SkillRate name="Unity" :rate="4" />
            <SkillRate name="Fishnet" :rate="4" />
            <SkillRate name="Unreal" :rate="3" />
            <SkillRate name="Playfab" :rate="3" />
        </div>

        <div class="skill-set">
            <h3>Tools</h3>
            <SkillRate name="Rider" :rate="4" />
            <SkillRate name="Visual Studio" :rate="4" />
            <SkillRate name="Git/Gitkraken" :rate="4" />
            <SkillRate name="Jira" :rate="4" />
            <SkillRate name="Azure" :rate="3" />
        </div>
        <div style="clear:both" />

        <h2>Education</h2>

        <h3>ENSIIE - 2022</h3>
        <h4>Computer science engineer</h4>
        <div>Specialty in video games and numerical interactions</div>

        <h3>Lycée Henri Wallon-2018</h3>
        <h4>two-year higher education to prepare for engineering school entrance exams</h4>
        <div>Specialty in math and physics</div>

        <h3>Lycée Thérèse D'Avila-2016</h3>
        <h4>Baccalaureate S</h4>
        <div>Specialty in math</div>

        <h2>Languages</h2>

        <h3>English</h3>
        <div>Fluent, practiced daily to speak with my canadian wife</div>

        <h3>French</h3>
        <div>No merit there, it's my mother tongue</div>

        <h3>Spanish</h3>
        <div>Some scholar knowledge from 6 years long classes</div>

        <h3>Japanese</h3>
        <div>Knows how to read Hiragana and Katakanas</div>



        <h2>Besides...</h2>
        <div>
            <h3>I ❤️ Video Games</h3>
            <div>Avid gamer since the gameboy color and Pokemon Red, I have evolved into a competitive games tryhard with thousand of hours in games like LOL (Challenger), TFT (Master), Hearthstone (Legend), Rocket League (Grand Champion).
            <br>Also a big fan of indie games, JRPG and ARPG.
            </div>
            
            <h3>I 🧡 Sports</h3>
            <div>I love playing any sport with my friends but my favourite are bouldering, voleyball and kayaking.</div>

            <h3>I 💛 Reading</h3>
            <div>I mainly read fantasy books and mangas to make my commutes enjoyable.</div>

            <h3>I 💚 Trips</h3>
            <div>Poland, Canada, Japan, Morocco, Italy, Finland, USA,... and more to come !</div>

        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>