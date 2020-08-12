window.onload = (() => {
    console.log('something happened');
    const baseGameButton = document.getElementById('base-game-loader');
    const bonusGameButton = document.getElementById('bonus-game-loader');
    baseGameButton.onclick = e => import('./baseGame').then(module => {
        const print = module.default;
        console.log(print);
    })
    ;
});