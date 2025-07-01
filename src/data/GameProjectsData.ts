import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Skygard Arena", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
    Currently in early access, <strong>Skygard Arena</strong> is chess meets league of legends.
    It's a turn-based strategy, tactical skirmish game where you can climb the ladder in Pvp or complete missions in the campaign.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/0Su2mpl5Ffo?si=wXxxQioD20iuYpLx" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://store.steampowered.com/app/2148970/Skygard_Arena/" target="_blank"><img src="img/projects/wishlist-steam.png" alt="Steam wishlist badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Online Pvp using Fishnet and Playfab</li>
        <li>Players and AI use a detached game engine to preview their next moves</li>
        <li>Diverse campaign where no two missions are alike with fresh musics, new goals and challenging quests</li>
        <li>Competitive stockfish-like Ai with different levels to satisfy every player</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/SkygardArenaGif2.gif" alt="Gif 1" />
        <img class="pc-screenshot" src="img/projects/SkygardArena1.jpg" alt="Image 1" />
        <img class="pc-screenshot" src="img/projects/SkygardArenaGif3.gif" alt="Gif 2" />
        <img class="pc-screenshot" src="img/projects/SkygardArena2.jpg" alt="Image 2" />
        <img class="pc-screenshot" src="img/projects/SkygardArena3.jpg" alt="Image 3" />
        <img class="pc-screenshot" src="img/projects/SkygardArena4.jpg" alt="Image 4" />
    </div>
    `, "#23bd69", true),
    new ProjectData("project-1", "Game tools", "img/projects/project-1-icon.png",
        `
    <div class="paragraph">
        Tools I have designed and implemented on Skygard Arena:
        <ul>
        <li>A detached game engine to preview actions without having to run them in Unity.
        <br>Used mainly for the AI search tree and the preview feature allowing to display all the effects of any action.
        <img class="pc-screenshot" src="img/projects/SkygardArena2.jpg" alt="Image 2" />
        </li>
        <li>A sandbox mode to help the team testing new features, animations, VFX and QA.
        <br>This mode contains features such as : killing units, refresh actions and movements, spawn new units, enable/disable UI elements.
        Insert a Sandbox Gif.
        <img class="pc-screenshot" src="img/projects/SkygardArenaGif2.gif" alt="Gif 1" />
        </li>
        <li>A visual finite state machine for Pve missions and tutorials, allowing flexibility and fast prototyping for each mission.
        Insert a FSM Gif.
        </li>
        </ul>
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "2D Platformer Autobattler", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        This is my current solo game project, A 2D platformer autobattler.
        <br>The goal is to collect items around the map in a limited amount of time to create your build in order to face your opponent at the end of the timer
        <br>and see which build is the best one !
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Procedural level generation for each run</li>
        <li>Multiple items to collect to create the best builds</li>
        <li>Mecanical and strategic, compete to be fastest AND the smartest</li>
        </ul>
    </div>
    `, "#5a78af", true),
    /*new ProjectData("project-3", "Drawing Overload", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        <strong>Drawing Overload</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@miphotography">Miesha Maiden</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "Eugeneable", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Cloud Drew Land", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>`, "#e48246")*/
];