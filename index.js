module.exports = function ExitInstantly(mod) {
    mod.hook('S_PREPARE_EXIT', 1, event => {
        mod.send('S_EXIT', 3, {
            category: 0,
            code: 0
        });
    });

    mod.hook('S_PREPARE_RETURN_TO_LOBBY', 1, event => {
        mod.send('S_RETURN_TO_LOBBY', 1, {});
    });
}
