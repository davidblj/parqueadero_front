import { AddInModule } from './add-in.module';

describe('AddInModule', () => {
  let addInModule: AddInModule;

  beforeEach(() => {
    addInModule = new AddInModule();
  });

  it('should create an instance', () => {
    expect(addInModule).toBeTruthy();
  });
});
