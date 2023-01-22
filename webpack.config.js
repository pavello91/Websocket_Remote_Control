const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = (env, argv) => {
    const mode = argv.mode || "development";
    return {
        entry: "./index.ts",
        output: {
            filename: "index.js",
            path: path.resolve(__dirname, "dist/"),
        },
        mode,
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