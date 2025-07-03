import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Skygard Arena", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
    Currently in early access, <strong>Skygard Arena</strong> is chess meets league of legends.
    It's a turn-based strategy, tactical skirmish game where you can climb the ladder in Pvp or complete missions in the campaign.
    Since I joined the team of 2 at the time at the beginning on the project, I had the opportunity to work on almost all aspects of the game.
    </br>From UI to matchmaking, my main focus has been working on gameplay logic, networking and creating tools for the team.
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
    <div>I have covered the technical challenges I faced here : <a href="https://www.notion.so/Technical-challenges-in-Skygard-Arena-2231e979299680c08f65e899726252b7#2231e979299680aa8915f2c240de6d6a" target="_blank">Technical challenges</a>.
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
    new ProjectData("project-1", "Game tools", "img/projects/tools.jpg",
        `
    <div class="paragraph">
        Tools I have designed and implemented on Skygard Arena:
        <ul>
        <li>A detached game engine to run the game logic and preview actions.
        <br>Used mainly for the AI search tree and the preview feature allowing to display all the effects of an action.
        <img class="pc-screenshot" src="img/projects/SkygardArena2.jpg" alt="Image 2" />
        </li>
        <li>A sandbox mode to help the team testing new features, animations, VFX and QA.
        </br>This mode contains features such as : killing units, refresh actions and movements, spawn new units, enable/disable UI elements.
        </br><img class="pc-screenshot" src="img/projects/SandboxTool.gif" alt="Sandbox" />
        </li>
        <li>A visual finite state machine tool for Pve missions and tutorials, allowing flexibility and fast prototyping for each mission.
        </br><img class="pc-screenshot" src="img/projects/PveMissionTool.gif" alt="Pve tool" />
        </li>
        </ul>
    </div>
    <div>I have covered the technical challenges I faced here : <a href="https://www.notion.so/Technical-challenges-in-Skygard-Arena-2231e979299680c08f65e899726252b7#2231e979299680aa8915f2c240de6d6a" target="_blank">Technical challenges</a>.
    </div>
    `, "#808080", true),
    new ProjectData("project-2", "2D Platformer Autobattler", "img/projects/2DPlatformerInGameScreenshot.png", `
    <div class="paragraph">
        This is my current solo game project, A 2D platformer autobattler.
        <br>The goal is to collect items around the map in a limited amount of time to create your build in order to face your opponent at the end of the timer
        and see which build is the best one !
        <br>This project is teaching me a lot on all the aspects of game development, especially game design.
        <br>Source code is available on <a href="https://github.com/alanhanafi/2D_PlatformAutoBattler" target="_blank">Github</a>.
    </div>

    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/EZ2R4-Ssx-4?si=Y98UXv6jn-v0bec9" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Procedural level generation for each run</li>
        <li>Multiple items to collect to create the best builds</li>
        <li>Find your own path, take a unique path to victory and show your speedrun skills</li>
        </ul>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/2DPlatformerInGameScreenshot.png" alt="In Game" />
        <img class="pc-screenshot" src="img/projects/StartGameScreen.png" alt="Start Game Screen" />
        <img class="pc-screenshot" src="img/projects/EndGameScreen.webp" alt="End Game Screen" />
    </div>
    `, "#5a78af", true),
];