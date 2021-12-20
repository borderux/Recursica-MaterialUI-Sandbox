const path = require('path');

const toPath = _path => path.join(process.cwd(), _path);
 
 module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config, { configType }) => {
    // https://stackoverflow.com/questions/54292667/react-storybook-svg-failed-to-execute-createelement-on-document
    config.resolve.alias['@emotion/core'] = toPath(
      'node_modules/@emotion/react'
    );
    config.resolve.alias['emotion-theming'] = toPath(
      'node_modules/@emotion/react'
    );
    // Return the altered config
    return config;
    
  },
}