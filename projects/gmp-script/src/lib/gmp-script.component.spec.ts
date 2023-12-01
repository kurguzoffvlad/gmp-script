import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpScriptComponent } from './gmp-script.component';

describe('GmpScriptComponent', () => {
  let component: GmpScriptComponent;
  let fixture: ComponentFixture<GmpScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
