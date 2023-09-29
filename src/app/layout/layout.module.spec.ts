import { LayoutModule } from './layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        NgbModule.forRoot()
    ]
})

describe('LayoutModule', () => {
    let layoutModule: LayoutModule;

    beforeEach(() => {
        layoutModule = new LayoutModule();
    });

    it('should create an instance', () => {
        expect(layoutModule).toBeTruthy();
    });
});
