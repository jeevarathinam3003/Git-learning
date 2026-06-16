import { TestBed } from '@angular/core/testing';

import { AWSUploadService } from './awsupload.service';

describe('AWSUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AWSUploadService = TestBed.get(AWSUploadService);
    expect(service).toBeTruthy();
  });
});
