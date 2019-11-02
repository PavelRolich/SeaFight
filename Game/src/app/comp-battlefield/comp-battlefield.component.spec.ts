import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBattlefieldComponent } from './comp-battlefield.component';

describe('CompBattlefieldComponent', () => {
  let component: CompBattlefieldComponent;
  let fixture: ComponentFixture<CompBattlefieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompBattlefieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBattlefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
