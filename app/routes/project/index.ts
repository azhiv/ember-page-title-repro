import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
}
