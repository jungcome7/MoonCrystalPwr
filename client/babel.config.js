module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: '> 0.1%, not dead',
        useBuiltIns: 'entry',
        corejs: 3,
        modules: false,
      },
    ],
  ];

  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./client/src'],
        alias: {
          imgs: './public/images',
          utils: './utils',
          styles: './src/styles',
        },
      },
    ],
  ];
  return {
    presets,
    plugins,
  };
};
