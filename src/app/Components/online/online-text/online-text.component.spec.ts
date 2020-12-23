import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTextComponent } from './online-text.component';

describe('OnlineTextComponent', () => {
  let component: OnlineTextComponent;
  let fixture: ComponentFixture<OnlineTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
