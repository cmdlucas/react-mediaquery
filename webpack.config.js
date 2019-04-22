const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: "./src/index.tsx",
    mode: 'production',
    target: 'node',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'bin'),
      libraryTarget: 'commonjs2'
    },

    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader",
                exclude: /node_modules/ 
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: [nodeExternals()],
    externals: {
        "react": "React",
        "prop-types": "PropTypes",
        "react-dom": "ReactDom",
        "semantic-ui-react": "SemanticUI"
    }
};