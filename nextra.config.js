module.exports = {
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    title: 'Darto Documentation',
    description: 'Documentation for the Darto framework',
    repository: 'https://github.com/evandersondev/darto',
    docsRepository: 'https://github.com/evandersondev/darto-docs',
    branch: 'main',
    path: '/',
    logo: '/assets/logo.png',
    sidebar: {
        '/': [
            {
                title: 'Overview',
                children: [
                    '/overview.md'
                ]
            },
            {
                title: 'Getting Started',
                children: [
                    '/getting-started.md'
                ]
            },
            {
                title: 'Routing',
                children: [
                    '/routing.md'
                ]
            },
            {
                title: 'Middleware',
                children: [
                    '/middleware.md'
                ]
            },
            {
                title: 'Static Files',
                children: [
                    '/static-files.md'
                ]
            },
            {
                title: 'Response Methods',
                children: [
                    '/response-methods.md'
                ]
            },
            {
                title: 'Template Engine',
                children: [
                    '/template-engine.md'
                ]
            },
            {
                title: 'HTTP Methods',
                children: [
                    '/http-methods.md'
                ]
            },
            {
                title: 'Advanced Features',
                children: [
                    '/advanced-features.md'
                ]
            },
            {
                title: 'Databases',
                children: [
                    '/databases.md'
                ]
            },
            {
                title: 'Validations',
                children: [
                    '/validations.md'
                ]
            },
            {
                title: 'Support',
                children: [
                    '/support.md'
                ]
            }
        ]
    }
}