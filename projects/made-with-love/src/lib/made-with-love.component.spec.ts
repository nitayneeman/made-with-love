import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadeWithLoveComponent } from './made-with-love.component';

describe('MadeWithLoveComponent', () => {
  let component: MadeWithLoveComponent;
  let fixture: ComponentFixture<MadeWithLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadeWithLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadeWithLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
