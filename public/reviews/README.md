# Student Reviews Setup Guide

## Adding Student Review Images

To add actual student review images from WhatsApp and social media platforms, follow these steps:

### 1. Prepare Your Images

1. **Screenshot Format**: Take screenshots of student reviews from WhatsApp, Instagram, or other platforms
2. **Image Size**: Recommended dimensions are 400x600 pixels (3:4 aspect ratio)
3. **File Format**: Use .jpg or .png format
4. **File Names**: Use descriptive names like:
   - `whatsapp-review-1.jpg`
   - `instagram-review-1.jpg`
   - `whatsapp-video-review-1.jpg` (for video thumbnails)

### 2. Upload Images

1. Place all review images in the `/public/reviews/` folder
2. Update the file names in the component if needed

### 3. Update Review Data

Edit the `studentReviews` array in `/src/components/sections/StudentReviews.tsx`:

```javascript
const studentReviews = [
    {
        id: 1,
        studentName: "Actual Student Name",
        course: "UPSC CSE", // or "MPSC", "History Optional", etc.
        platform: "WhatsApp", // or "Instagram"
        imageUrl: "/reviews/your-actual-image.jpg",
        rating: 5,
        preview: "First few words of the review...", // Short preview text
        isVideo: false, // Set to true if it's a video review thumbnail
    },
    // Add more reviews...
];
```

### 4. Supported Platforms

- **WhatsApp**: Green message icon
- **Instagram**: Pink Instagram icon

You can add more platforms by updating the `platformIcons` object in the component.

### 5. Features

- **Carousel Navigation**: Users can navigate through reviews
- **Modal View**: Click on any review to see it in full size
- **Responsive Design**: Works on all device sizes
- **Video Support**: Mark reviews as videos with play button overlay
- **Rating Display**: Shows star ratings for each review
- **Platform Badges**: Shows which platform the review came from

### 6. Privacy Considerations

- **Student Consent**: Ensure you have permission to display student reviews
- **Personal Info**: Consider blurring phone numbers or personal details
- **Anonymization**: You can use initials or first names only if needed

### 7. Customization

You can customize:
- Number of reviews shown per slide (currently 3)
- Colors and styling in the component
- Add more platform icons
- Modify the modal functionality

### Example File Structure

```
public/
├── reviews/
│   ├── whatsapp-review-1.jpg
│   ├── whatsapp-review-2.jpg
│   ├── instagram-review-1.jpg
│   ├── whatsapp-video-review-1.jpg
│   └── ...more review images
```

Once you add your actual review images, the component will automatically display them on the homepage!