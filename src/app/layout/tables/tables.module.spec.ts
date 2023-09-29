import { TablesModule } from './tables.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


describe('TablesModule', () => {
  let tablesModule: TablesModule;

  beforeEach(() => {
    tablesModule = new TablesModule();
  });

  it('should create an instance', () => {
    expect(tablesModule).toBeTruthy();
  });
});
