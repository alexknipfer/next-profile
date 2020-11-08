class AppConfig {
  public readonly prismicRepository: string = '';
  public readonly prismicGraphQLAPIUrl: string = '';
  public readonly spotifyClientId: string = '';
  public readonly spotifyClientSecret: string = '';
  public readonly spotifyRefreshToken: string = '';
  public readonly isOnServer = typeof window === 'undefined';

  constructor() {
    this.prismicRepository = this.loadEnvironmentVariable('PRISMIC_REPOSITORY');
    this.prismicGraphQLAPIUrl = `https://${this.prismicRepository}.prismic.io/graphql`;
    this.spotifyClientId = this.loadEnvironmentVariable('SPOTIFY_CLIENT_ID');
    this.spotifyClientSecret = this.loadEnvironmentVariable(
      'SPOTIFY_CLIENT_SECRET',
    );
    this.spotifyRefreshToken = this.loadEnvironmentVariable(
      'SPOTIFY_REFRESH_TOKEN',
    );
  }

  private loadEnvironmentVariable(key: string): string {
    const envVariable = process.env[key];

    if (!envVariable && this.isOnServer) {
      throw new Error(`Must configure ${key} environment variable.`);
    }

    return envVariable;
  }
}

export const appConfig = new AppConfig();
