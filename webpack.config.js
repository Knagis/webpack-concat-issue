module.exports = {
    mode: "production",
    devtool: false,
    entry: {
        "main": "./src/index.js",
        "main2": "./src/index2.js",
    },
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    test(
                        module,
                        { chunkGraph },
                    ) {
                        const chunks = chunkGraph.getModuleChunks(module);

                        if (chunks.length > 1) {
                            // this only includes dep1.js
                            // an alternate more deterministic condition for testing:
                            // if (module.identifier().includes("dep1"))
                            //
                            return true;
                        }

                        return false;
                    },
                    chunks: "initial",
                    enforce: true,
                    priority: 2,
                }
            }
        }
    },
};
