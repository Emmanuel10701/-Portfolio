import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Disable body parsing for the API route
export const dynamic = 'force-dynamic'; // Or use 'force-static' depending on your use case

const uploadImage = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, _, files) => {
    if (err) return res.status(500).json({ error: 'Image upload failed' });

    const file = files.file[0];
    try {
      const result = await cloudinary.uploader.upload(file.filepath);
      return res.status(200).json({ url: result.secure_url });
    } catch (uploadError) {
      return res.status(500).json({ error: uploadError.message });
    }
  });
};

// Export the uploadImage function as default
export default uploadImage;
