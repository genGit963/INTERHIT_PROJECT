interface CreatedBy {
  id: number;
  name: string;
  phone: string;
}

interface ImageInterface {
  public_id: string;
  secure_url: string;
  _id: string;
}

// /user/album
export interface GalleryAPIInterface {
  createdBy: CreatedBy;
  _id: string;
  images: ImageInterface[];
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
