import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamestajPoMeriComponent } from './namestaj-po-meri.component';

describe('NamestajPoMeriComponent', () => {
  let component: NamestajPoMeriComponent;
  let fixture: ComponentFixture<NamestajPoMeriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamestajPoMeriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamestajPoMeriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
