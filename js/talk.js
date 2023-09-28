new TypeIt("#AndyPatty", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("Andy && Patty")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走過第三個520...")
    .pause(3000)
    .go();

new TypeIt('#talkToPatty', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();
