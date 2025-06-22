import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatGallery } from './cat-gallery';

describe('CatGallery', () => {
  let component: CatGallery;
  let fixture: ComponentFixture<CatGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
