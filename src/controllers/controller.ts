import { AppService } from '../services/index.js';

export class AppController {
  public AppService: AppService;
  public static async browseAll() {
    const data = await AppService.browseAll();
    return data;
  }
}
