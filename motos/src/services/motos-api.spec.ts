import { TestBed } from '@angular/core/testing';

import { MotosApi } from './motos-api';

describe('MotosApi', () => {
  let service: MotosApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotosApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
