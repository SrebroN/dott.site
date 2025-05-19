import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONamaComponent } from './o-nama.component';

describe('ONamaComponent', () => {
  let component: ONamaComponent;
  let fixture: ComponentFixture<ONamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ONamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ONamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
