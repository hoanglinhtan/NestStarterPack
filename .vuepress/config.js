module.exports = {
    title: 'Nest Starter',
    description: `Nest Starter`,
    base: process.env.DEPLOY_ENV === 'gh-pages' ? '/nest-starter/' : '/',
    themeConfig: {
        sidebar: [
            ['/', 'Introduction'],
            '/docs/development',
            '/docs/architecture',
            // '/docs/tech',
            // '/docs/routing',
            // '/docs/state',
            // '/docs/linting',
            // '/docs/editors',
            // '/docs/production',
            // '/docs/troubleshooting',
        ],
    },
};
