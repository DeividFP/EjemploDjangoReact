module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/leadmanager/frontend/static/frontend'
    }
}