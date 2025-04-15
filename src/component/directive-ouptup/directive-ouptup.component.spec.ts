import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveOuptupComponent } from './directive-ouptup.component';

describe('DirectiveOuptupComponent', () => {
  let component: DirectiveOuptupComponent;
  let fixture: ComponentFixture<DirectiveOuptupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveOuptupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveOuptupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
