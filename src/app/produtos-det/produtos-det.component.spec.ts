import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDetComponent } from './produtos-det.component';

describe('ProdutosDetComponent', () => {
  let component: ProdutosDetComponent;
  let fixture: ComponentFixture<ProdutosDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
