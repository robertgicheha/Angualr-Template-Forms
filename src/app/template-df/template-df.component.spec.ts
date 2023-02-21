import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDFComponent } from './template-df.component';

describe('TemplateDfComponent', () => {
  let component: TemplateDFComponent;
  let fixture: ComponentFixture<TemplateDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
