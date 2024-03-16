const withMDX = require('@next/mdx')()

const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                // This is the asset module.
                type: 'asset/source',
            }
        )
        return config
    },
};

module.exports = withMDX(nextConfig)
