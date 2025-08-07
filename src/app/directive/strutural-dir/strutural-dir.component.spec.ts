import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StruturalDirComponent } from './strutural-dir.component';

describe('StruturalDirComponent', () => {
  let component: StruturalDirComponent;
  let fixture: ComponentFixture<StruturalDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StruturalDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StruturalDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
