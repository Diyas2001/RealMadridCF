import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersCreatComponent } from './players-creat.component';

describe('PlayersCreatComponent', () => {
  let component: PlayersCreatComponent;
  let fixture: ComponentFixture<PlayersCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersCreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
