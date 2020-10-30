import App from '../pages/_app';

class AppConfig {
  public readonly prismicRepository: string = '';
  public readonly prismicGraphQLAPIUrl: string = '';
  public readonly isOnServer = typeof window === 'undefined';

  constructor() {
    this.prismicRepository = this.loadEnvironmentVariable('PRISMIC_REPOSITORY');
    this.prismicGraphQLAPIUrl = `https://${this.prismicRepository}.prismic.io/graphql`;
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
