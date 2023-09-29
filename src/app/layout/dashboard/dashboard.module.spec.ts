import { DashboardModule } from './dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        NgbModule.forRoot()
    ]
})

describe('DashboardModule', () => {
  let dashboardModule: DashboardModule;

  beforeEach(() => {
    dashboardModule = new DashboardModule();
  });

  it('should create an instance', () => {
    expect(dashboardModule).toBeTruthy();
  });
});
