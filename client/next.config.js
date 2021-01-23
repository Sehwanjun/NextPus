module.exports = {
  webpack: (config, options) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config

    config.module.rules.push({
      test: /\.(svg|ico)$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|mp4)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // name: "[name].[ext]?[hash]",
              // publicPath: "/",
            },
          },
        ],
      }
    )
    config.module.rules.push(
      {
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[path][name].[ext]",
              emitFile: false,
              publicPath: "/",
            }
          },
        ],
      }
    )


    return config
  },
}
