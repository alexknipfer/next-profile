import { Factory } from 'rosie';
import faker from 'faker';
import { NowPlayingResponse } from 'pages/api/now-playing';

export const NowPlayingResponseFactory = Factory.define<NowPlayingResponse>(
  'now-playing-response-factory',
)
  .attr('isPlaying', () => faker.datatype.boolean())
  .attr('songName', () => faker.name.title())
  .attr('artists', () => faker.name.firstName())
  .attr('album', () => faker.lorem.word())
  .attr('albumImage', () => faker.image.imageUrl())
  .attr('songUrl', () => faker.internet.url());
