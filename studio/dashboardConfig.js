export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: '0Research-sanity-nuxt-events-studio',
                  apiId: 'a2c1977c-38cd-4681-8f62-06581e08937a'
                },
                {
                  buildHookId: '5ded0f1d819d26e704499534',
                  title: 'Events Website',
                  name: '0Research-sanity-nuxt-events',
                  apiId: '054ec219-b148-4f7e-ae83-a827e2b58d3f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wizlearner/0Research-sanity-nuxt-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://0Research-sanity-nuxt-events.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
