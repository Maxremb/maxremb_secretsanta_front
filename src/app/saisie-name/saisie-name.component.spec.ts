import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieNameComponent } from './saisie-name.component';

describe('SaisieNameComponent', () => {
  let component: SaisieNameComponent;
  let fixture: ComponentFixture<SaisieNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaisieNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
