module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: { }
    },
    {
      name: '1.13.13',
      dependencies: {
        'ember': '1.13.13'
      }
    },
    {
      name: '2.0.3',
      dependencies: {
        'ember': '2.0.3'
      }
    },
    {
      name: '2.4.5',
      dependencies: {
        'ember': '2.4.5'
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    },
    {
      name: 'ember-alpha',
      dependencies: {
        'ember': 'alpha'
      },
      resolutions: {
        'ember': 'alpha'
      }
    }
  ]
};
