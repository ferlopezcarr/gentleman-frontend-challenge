module.exports = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  node: { fs: "empty", child_process: "empty", readline: "empty" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
          loader: "ts-loader"
          }
        ]
      },
			{
				test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						 'css-loader',
						 {
							 loader: 'sass-loader'
						 }
					]
			}
    ]
  }
};
