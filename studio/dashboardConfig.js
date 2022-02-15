export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '620baafae81e1c2124fd6f59',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-32qpsrw3',
                  apiId: '9efc16b1-c538-4992-bc44-106d31027b7d'
                },
                {
                  buildHookId: '620baafa371b451d49316224',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9dcahaub',
                  apiId: 'c074df38-de9a-4497-b8ac-cef9807e6339'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lekan012704/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9dcahaub.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
