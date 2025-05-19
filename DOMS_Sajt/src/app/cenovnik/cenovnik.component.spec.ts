import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenovnikComponent } from './cenovnik.component';

describe('CenovnikComponent', () => {
  let component: CenovnikComponent;
  let fixture: ComponentFixture<CenovnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenovnikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenovnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
