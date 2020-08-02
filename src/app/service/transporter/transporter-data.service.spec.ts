import { TestBed } from '@angular/core/testing';

import { TransporterDataService } from './transporter-data.service';

describe('TransporterDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransporterDataService = TestBed.get(TransporterDataService);
    expect(service).toBeTruthy();
  });
});
