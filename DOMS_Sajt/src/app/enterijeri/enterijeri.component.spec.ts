import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterijeriComponent } from './enterijeri.component';

describe('EnterijeriComponent', () => {
  let component: EnterijeriComponent;
  let fixture: ComponentFixture<EnterijeriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterijeriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterijeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
