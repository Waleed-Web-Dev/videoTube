import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null

    //upload the file on clodudinary 
   const response = await cloudinary.uploader.upload(localFilePath, {resource_type: 'auto'})
   // file has been uploaded successfully
   console.log("File is Uploaded on cloudinary", response.url);
   fs.unlinkSync(localFilePath)
   
   return response
  } catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed 
    return null
  }

}


// Function to delete an image from Cloudinary
const deleteImage = async (publicId) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
};

// Helper function to extract the public ID from a Cloudinary URL
const getCloudinaryPublicId = (cloudinaryUrl) => {
  // Example URL: 'https://res.cloudinary.com/<cloud_name>/image/upload/v<version>/<public_id>.<format>'
  const parts = cloudinaryUrl.split('/');
  const lastPart = parts[parts.length - 1]; // Extracts the last part of the URL
  const publicIdWithFormat = lastPart.split('.')[0]; // Removes the format extension
  return publicIdWithFormat;
};


export {uploadOnCloudinary, deleteImage, getCloudinaryPublicId}