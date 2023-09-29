import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RightsidebarComponent } from './rightsidebar.component';

describe('RightsidebarComponent', () => {
  let component: RightsidebarComponent;
  let fixture: ComponentFixture<RightsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [
        NgbModule.forRoot()
      ],
      declarations: [ RightsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


