import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTripResultPage } from './new-trip-result.page';

describe('NewTripResultPage', () => {
  let component: NewTripResultPage;
  let fixture: ComponentFixture<NewTripResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTripResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTripResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
