/* eslint-disable @typescript-eslint/no-explicit-any */
interface UploadData {
  image_id: string;
  waste_type: string;
  recyclable: string;
  confidence: any;
}

export default interface APIresponse {
  message: string;
  data: UploadData;
}
