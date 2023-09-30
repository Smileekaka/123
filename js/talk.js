new TypeIt("#AndyPatty", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("Andy <um style='color: #F44336;'>❤️</um> Patty")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走過第四個生日...")
    .pause(3000)
    .go();

new TypeIt('#talkToPatty', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();
