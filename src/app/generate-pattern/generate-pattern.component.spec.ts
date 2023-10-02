import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePatternComponent } from './generate-pattern.component';

describe('GeneratePatternComponent', () => {
  let component: GeneratePatternComponent;
  let fixture: ComponentFixture<GeneratePatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratePatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
