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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface RegisterUser{
  email: string;
  password: string;
  username: string
}