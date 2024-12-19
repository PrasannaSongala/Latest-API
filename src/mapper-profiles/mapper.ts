import { createMapper } from '@automapper/core';
import { classes } from '@automapper/classes';

export class AutoMapperManager {
  public setUpAutoMapper() {
    const mapper = createMapper({
      strategyInitializer: classes(),
    });
    console.log('AutoMapper initialized.');
  }
}
