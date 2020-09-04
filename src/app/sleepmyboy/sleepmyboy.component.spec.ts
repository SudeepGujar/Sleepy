import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepmyboyComponent } from './sleepmyboy.component';

describe('SleepmyboyComponent', () => {
  let component: SleepmyboyComponent;
  let fixture: ComponentFixture<SleepmyboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepmyboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepmyboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
