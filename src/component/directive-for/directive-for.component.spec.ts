import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveForComponent } from './directive-for.component';

describe('DirectiveForComponent', () => {
  let component: DirectiveForComponent;
  let fixture: ComponentFixture<DirectiveForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
