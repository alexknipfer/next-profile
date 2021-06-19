import { Factory } from 'rosie';
import faker from 'faker';
import { Context, SpotifyNowPlayingResponse } from '@/interfaces/Spotify';

export const SpotifyNowPlayingFactory =
  Factory.define<SpotifyNowPlayingResponse>(
    'spotify-now-playing-response-factory',
  )
    .attr('timestamp', () => faker.date.past().getTime())
    .attr('context', () => SpotifyContextFactory.build())
    .attr('progress_ms', () => faker.date.past().getUTCMilliseconds())
    .attr('album', () => faker.lorem.word())
    .attr('albumImage', () => faker.image.imageUrl())
    .attr('songUrl', () => faker.internet.url());

const SpotifyContextFactory = Factory.define<Context>('spotify-context-factory')
  .attr('href', () => faker.internet.url())
  .attr('type', faker.random.word)
  .attr('uri', () => faker.internet.url())
  .attr('external_urls', () => ({
    spotify: faker.internet.url(),
  }));
