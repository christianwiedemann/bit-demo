import {WebpackConfigTransformer, WebpackConfigMutator, WebpackConfigTransformContext} from '@teambit/webpack';
import { getAppPack, resolveConfig} from '@wingsuit-designsystem/core';
/**
 * Transformation to apply for both preview and dev server
 * @param config
 * @param _context
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function commonTransformation(config: WebpackConfigMutator, _context: WebpackConfigTransformContext) {
  // Merge config with the webpack.config.js file if you choose to import a module export format config.
    // config.merge([webpackConfig]);
  console.log('TEST');
  const wingsuitConfig = resolveConfig('storybook', 'development', {}, {
    presets: [],
    apps: {
      bit: {
        presets: []
      }
    }
  });
  console.log('TEST');


  const webpackConfig = getAppPack(wingsuitConfig);
  config.merge([webpackConfig]);
  // config.addAliases({});
  // config.addModuleRule(youRuleHere);
  console.log(config.raw.module.rules)
  console.log('TEST')
  return config;
}

/**
 * Transformation for the preview only
 * @param config
 * @param context
 * @returns
 */
export const previewConfigTransformer: WebpackConfigTransformer = (
  config: WebpackConfigMutator,
  context: WebpackConfigTransformContext
) => {
  const newConfig = commonTransformation(config, context);
  return newConfig;
};

/**
 * Transformation for the dev server only
 * @param config
 * @param context
 * @returns
 */
export const devServerConfigTransformer: WebpackConfigTransformer = (
  config: WebpackConfigMutator,
  context: WebpackConfigTransformContext
) => {
  const newConfig = commonTransformation(config, context);
  return newConfig;
};

