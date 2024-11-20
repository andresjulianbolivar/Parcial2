/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConferenciaService } from './conferencia.service';

describe('Service: Conferencia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConferenciaService]
    });
  });

  it('should ...', inject([ConferenciaService], (service: ConferenciaService) => {
    expect(service).toBeTruthy();
  }));
});
