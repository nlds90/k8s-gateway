import { get } from 'lodash/fp';
import { client } from '../k8s-client';

export const getEvents = ({ fields, labels }) => client.events.get({
  qs: {
    fieldSelector: fields,
    labelSelector: labels,
    limit: 100,
  },
})
  .then((rs) => {
    const events = get('body.items')(rs) || [];
    return events;
  })
  .catch((err) => {
    console.log('getEvents', err);
    return [];
  });