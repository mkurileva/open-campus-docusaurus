module.exports = {
  docs: [
    'intro',

    {
      type: 'category',
      label: 'Требования',
      items: [
        'requirements/functional',
        'requirements/non-functional',
      ],
    },

    {
      type: 'category',
      label: 'Архитектура',
      items: [
        'architecture/constraints',
        'architecture/roles',
      ],
    },

    {
      type: 'category',
      label: 'Безопасность',
      items: [
        'security/privacy',
      ],
    },

    {
      type: 'category',
      label: 'Вопросы и проблемы',
      items: [
        'faq/issues',
      ],
    },
  ],
};