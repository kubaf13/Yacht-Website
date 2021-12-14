const path = require('path');
const webpack = require('webpack');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    '@': path.resolve(__dirname, '../src/'),
    // '@config': path.resolve(__dirname, '../config/'),
    '@atoms': path.resolve(__dirname, '../src/components/atoms/'),
    '@molecules': path.resolve(__dirname, '../src/components/molecules/'),
    '@organisms': path.resolve(__dirname, '../src/components/organisms/'),
    '@templates': path.resolve(__dirname, '../src/components/templates/'),
    '@helpers': path.resolve(__dirname, '../src/helpers/'),
    '@hooks': path.resolve(__dirname, '../src/hooks/'),
    '@adapters': path.resolve(__dirname, '../src/adapters/'),
    '@images': path.resolve(__dirname, '../public/static/images/'),
  };

  config.module.rules.push({
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.xml$/,
    use: [{ loader: 'ignore-loader' }],
  });

  config.plugins.push(new webpack.ProvidePlugin({
    Buffer: ['buffer', 'Buffer'],
  }));

  return config;
};
