module.exports = {
    presets: [
        [
            '@babel/env',
            {
                targets: {
                    ie: '11'
                },
                useBuiltIns: 'entry',
                corejs: { "version": 3 }
            }
        ]
    ]
};