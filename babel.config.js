module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/assets': './assets',
            '@/actions': './src/actions',
            '@/api': './src/api',
            '@/components': './src/components',
            '@/constants': './src/constants',
            '@/containers': './src/containers',
            '@/hooks': './src/hooks',
            '@/reducers': './src/reducers',
            '@/router': './src/router',
            '@/sagas': './src/sagas',
            '@/screens': './src/screens',
            '@/store': './src/store',
            '@/utils': './src/utils'
          },
        },
      ],
    ],
  };
};
