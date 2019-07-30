import { get } from 'lodash/fp';
import { getShutdownTime } from '../kernels/transformer';

export const transform = cronjob => ({
  name: get('metadata.name')(cronjob),
  profileId: get('metadata.labels.profileId')(cronjob),
  suspend: get('spec.suspend')(cronjob) || false,
  schedule: get('spec.schedule')(cronjob),
  notebook: get('metadata.labels.notebook')(cronjob),
  shutdownTime: getShutdownTime(cronjob),
});