const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const {
    NODE_ENV = 'devel',
} = process.env;

const config = (env, argv) => {
    return {
        entry: "./index.ts",
        mode: NODE_ENV,
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: 'dist/',
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }, ],
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
        target: "node",
        plugins: [new CleanWebpackPlugin()],
    };
};

module.exports = config;