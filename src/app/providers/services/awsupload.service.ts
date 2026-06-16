import { Injectable } from '@angular/core';
// import * as S3 from 'aws-sdk/clients/s3';

import { HttpClient } from '@angular/common/http';
// import * as VimeoUpload from '../../../assets/js/vimeo-upload';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { CommonSandbox } from '../../common/common.sandbox';
import { Subscription } from 'rxjs';

import moment from 'moment';

@Injectable()

export class AWSUploadService {

  constructor(public http: HttpClient,
    private toastr: ToastrService,
    public commonsanbox: CommonSandbox,
  ) {
  }


  private subscriptions: Array<Subscription> = [];
  postUrl: any;
  mimeTypeMapping:any = {
    png: 'image',
    jpg: 'image',
    jpeg: 'image',
    gif: 'image',
    wav: 'audio',
    mp3: 'audio',
    pdf: 'application',
    txt: 'text',
  };


  // async mediaUploadToS3(presignedUrl,url_params,file, fileUrl) {
  //   return new Promise(async (resolve, reject) => {
  //     try {

  //       // const data2 = file.replace(/^data:image\/\w+;base64,/, '');

  //       const fileExt = url_params.fileName.split('.').pop()// Get the extension
  //       const typeCategory = this.mimeTypeMapping[fileExt];

  //       // const fileTypeGen = `${typeCategory}/${fileExt}`;


  //       const mimeTypeRegex = new RegExp(`^data:${typeCategory}/\\w+;base64,`);
  //       const data2 = file.replace(mimeTypeRegex, '');


  //       const buff = Buffer.from(data2, 'base64');

  //       const uploadResponse = await fetch(presignedUrl, {
  //         method: 'PUT',
  //         body: buff,
  //         headers: {
  //           'Content-Type': url_params.fileType,
  //           // 'x-amz-acl': 'public-read', // Optional: Adjust permissions if needed
  //         },
  //       });
  
  //       console.log("uploadResponse",uploadResponse)

  //       if (!uploadResponse.ok) {
  //         throw new Error(`Upload failed with status ${uploadResponse.status}`);
  //       }

  
  //       resolve(fileUrl); // Upload succeeded
  //     } catch (uploadError) {

  //       console.log("uploadError",uploadError)
  //       reject(false); // Upload failed
  //     }
  //   });

  // }


  async fetchPreSignedUrl(url_params: any): Promise<any> {
    return new Promise((resolve, reject) => {


      console.log("Input params for fetch url",url_params)
      // Make the request for the pre-signed URL
      const fileExt = url_params.fileName.split('.').pop()// Get the extension
      const typeCategory = this.mimeTypeMapping[fileExt];

      const fileTypeGen = `${typeCategory}/${fileExt}`;

      url_params.fileType = fileTypeGen;
      
      console.log("Input params for fetch url Step 2 ",url_params)

      this.commonsanbox.getS3PreSignedUrl(url_params);

      this.subscriptions.push(
        this.commonsanbox.getS3PreSignedUrl$.subscribe(
          (data:any) => {
            if (Object.keys(data).length !== 0) {
              if (data.status == 1) {
                debugger
                console.log('Pre-signed URL data:', data); // Log for debugging
                resolve(data.data); // Resolve the promise with the pre-signed URL
                this.postUrl = data.data
              } else {
                debugger
                reject('Failed to fetch pre-signed URL');
              }
            }
          },
          (error:any) => {
            console.error('Error in getS3PreSignedUrl API call:', error); // Log the error
            reject('Failed to fetch pre-signed URL due to API error');
          }
        )
      );
    });
  }
  

  

}



