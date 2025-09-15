# BLUESTOCK Certificate Verification System

A modern, responsive web application for verifying and sharing internship certificates from BLUESTOCK. This system allows users to verify certificate authenticity and share certificates via QR codes.

## Features

- 🔍 **Certificate Verification**: Enter certificate ID to verify authenticity
- 📱 **QR Code Generation**: Generate QR codes for easy certificate sharing
- 📤 **Share Functionality**: Share certificates via native sharing or copy link
- 💾 **Download Certificates**: Download certificate images
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, professional interface with smooth animations

## Setup Instructions

### Prerequisites
- A web server (local or remote)
- Modern web browser with JavaScript enabled

### Installation

1. **Download the files**:
   - `index.html` - Main HTML file
   - `styles.css` - CSS styling
   - `script.js` - JavaScript functionality
   - `kaushal.png` - Certificate image (add your certificate image here)

2. **Place your certificate image**:
   - Add your certificate image as `kaushal.png` in the same directory
   - Or update the image path in the JavaScript code

3. **Start a local server** (choose one method):

   **Method 1: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Method 2: Using Node.js**
   ```bash
   npx http-server -p 8000
   ```

   **Method 3: Using PHP**
   ```bash
   php -S localhost:8000
   ```

4. **Access the application**:
   - Open your browser and go to `http://localhost:8000`
   - The certificate verification system will be ready to use

## Usage

### Verifying a Certificate

1. Enter a certificate ID in the format: `BLUESTOCK-2024-001`
2. Click "Verify Certificate" button
3. If valid, the certificate will be displayed with all details
4. A QR code will be generated for easy sharing

### Sharing a Certificate

1. After verifying a certificate, click "Share Certificate"
2. Choose to use native sharing (if available) or copy the link
3. The shared link will allow others to directly view the certificate

### Downloading a Certificate

1. After verifying a certificate, click "Download" button
2. The certificate image will be downloaded to your device

## Certificate Database

The system includes a sample certificate database in `script.js`. To add new certificates:

```javascript
const certificateDatabase = {
    'BLUESTOCK-2024-001': {
        id: 'BLUESTOCK-2024-001',
        internName: 'Kaushal',
        company: 'BLUESTOCK',
        issueDate: '2024-01-15',
        status: 'verified',
        imagePath: 'kaushal.png'
    }
    // Add more certificates here
};
```

## Customization

### Adding New Certificates

1. Add your certificate image to the project directory
2. Update the `certificateDatabase` object in `script.js`
3. Include the certificate details and image path

### Styling Changes

- Modify `styles.css` to change colors, fonts, or layout
- The design uses CSS Grid and Flexbox for responsive layout
- Color scheme can be easily customized using CSS variables

### Certificate ID Format

The system expects certificate IDs in the format: `BLUESTOCK-YYYY-XXX`
- `BLUESTOCK` - Company prefix
- `YYYY` - Year (4 digits)
- `XXX` - Sequential number (3 digits)

## Technical Details

### Dependencies

- **QRCode.js**: For QR code generation (loaded via CDN)
- **Font Awesome**: For icons (loaded via CDN)
- No additional dependencies required

### Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### File Structure

```
crertifate/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── kaushal.png         # Certificate image (add your image here)
└── README.md           # This file
```

## Security Considerations

- This is a client-side application for demonstration purposes
- In a production environment, implement server-side validation
- Use HTTPS for secure certificate sharing
- Implement proper authentication and authorization

## Troubleshooting

### Common Issues

1. **Certificate not found**: Ensure the certificate ID is correct and exists in the database
2. **QR code not generating**: Check browser console for JavaScript errors
3. **Image not loading**: Verify the image file exists and path is correct
4. **Sharing not working**: Ensure you're using HTTPS or localhost

### Browser Console

Check the browser console (F12) for any JavaScript errors or warnings.

## License

This project is created for BLUESTOCK certificate verification system.

## Support

For technical support or questions, please contact: support@bluestock.com

---

**Note**: This is a demonstration system. For production use, implement proper server-side validation and security measures.
# kaushal-fake-certificate
