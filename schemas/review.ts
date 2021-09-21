export const review = {
  name: 'review',
  title: 'Review',
  type: 'object',
  fields: [
    {
      name: 'reviewDescription',
      title: 'Review Description',
      type: 'string',
      description: 'A short description of the review.',
    },
    {
      name: 'traveller',
      title: 'Traveller',
      type: 'traveller',
      description: 'The traveller who is the subject of the review.',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      description: 'A rating of the review.',
      options: {
        list: [
          {
            title: '5 stars',
            value: '5-stars',
          },
          {
            title: '4 stars',
            value: '4-stars',
          },
          {
            title: '3 stars',
            value: '3-stars',
          },
          {
            title: '2 stars',
            value: '2-stars',
          },
          {
            title: '1 stars',
            value: '1-stars',
          },
        ],
        layout: 'radio',
      },
    },
  ],
};
