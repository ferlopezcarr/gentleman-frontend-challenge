import { defineConfig } from "cypress";
import * as VIEWPORTS from './cypress/config/viewports.json';

// Importar el preprocessor de angular (webpack) para compilar los
// scss y convertirlos a css
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const webpackOptions = require('webpack.config.js');

// Importar cofiguracion del build de angular para que pueda importar
// las librerías y estilos
import * as angularProperties from 'angular.json';
const angularBuildProperties =
	angularProperties.projects['gentleman-programming-product-app'].architect.build.options;

export default defineConfig({
  viewportWidth: VIEWPORTS.default.width,
	viewportHeight: VIEWPORTS.default.height,
  component: {
    specPattern: "src/**/*.spec.ts",
    experimentalInteractiveRunEvents: true,
    devServer: {
      framework: "angular",
      bundler: "webpack",
      options: {
				projectConfig: {
					root: '',
					sourceRoot: 'src',
					buildOptions: angularBuildProperties,
				}
      }
    },
    setupNodeEvents: (on, config) => {
			// Include other plugins
			on(
				'file:preprocessor',
				webpackPreprocessor({
					webpackOptions,
					watchOptions: {},
				})
			);
			// It's IMPORTANT to return the config object
			// with any changed environment variables
			return config;
		},
  },

  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: "cypress/e2e/**/*.spec.ts",
		experimentalInteractiveRunEvents: true,
		experimentalRunAllSpecs: true,
		experimentalStudio: true,
		setupNodeEvents: (on, config) => {
			//codeCoverageTask(on, config);
			// Include other plugins

			// It's IMPORTANT to return the config object
			// with any changed environment variables
			return config;
		},
  },
});
