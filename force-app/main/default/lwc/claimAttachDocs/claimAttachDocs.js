import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ClaimAttachDocs extends LightningElement {
    recordId;
    acceptedFormats = ['.jpg', '.jpeg', '.png'];

    connectedCallback() {
        const url = new URL(window.location.href);        
        this.recordId = url.searchParams.get('recordId');        
        if (!this.recordId) {
            console.warn('No recordId found in URL');
        }
    }

    handleUploadFinished(event) {
        const uploadedFiles = event.detail.files;       
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message:
                uploadedFiles.length +
                ' file(s) uploaded successfully.',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
        window.close(); 
    }
}