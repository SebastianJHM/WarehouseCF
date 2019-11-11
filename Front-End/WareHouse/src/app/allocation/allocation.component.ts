import { Component, OnInit } from '@angular/core';
import { FilesServiceService } from '../Service/files-service.service';
import { FileSystemFileEntry, NgxFileDropEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {

  constructor(  private http: FilesServiceService ) { }

  FileNameAlloc: string;
  public ExcelFileAlloc: File;
  public filesArrayAlloc: File[] = [];

  public inputFileAlloc(file: File) {
    this.ExcelFileAlloc = file[0];
    this.FileNameAlloc = file[0].name;
    console.log(this.ExcelFileAlloc);
    this.filesArrayAlloc[0] = this.ExcelFileAlloc;
    this.sendFilesAlloc();
  }

  public droppedFileAlloc(files: NgxFileDropEntry[]) {
    console.log('dropped');
    console.log(files);
    for (const droppedFile of files) {
      // Si es un archivo
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          // console.log(droppedFile.relativePath, file);
          this.ExcelFileAlloc = file;
          this.FileNameAlloc = this.ExcelFileAlloc.name;
          this.filesArrayAlloc[0] = this.ExcelFileAlloc;
          this.sendFilesAlloc();
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  sendFilesAlloc() {
    console.log('Lo recibí');
    // if (this.filesArrayAlloc[0]) {
    //   this.http.postFilesAllocation(this.filesArrayAlloc).subscribe(

    //   );
    // }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

  ngOnInit() {
  }

}
