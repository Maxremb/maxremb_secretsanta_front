import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueNameComponent } from './vue-name.component';

describe('VueNameComponent', () => {
  let component: VueNameComponent;
  let fixture: ComponentFixture<VueNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VueNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
