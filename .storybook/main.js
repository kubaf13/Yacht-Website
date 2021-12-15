module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
  ],
};