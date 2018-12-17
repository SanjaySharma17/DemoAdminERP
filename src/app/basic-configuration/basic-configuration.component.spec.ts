import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicConfigurationComponent } from './basic-configuration.component';

describe('BasicConfigurationComponent', () => {
  let component: BasicConfigurationComponent;
  let fixture: ComponentFixture<BasicConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
