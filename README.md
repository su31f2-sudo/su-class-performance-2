# PhoneStore - Mobile Phone Catalog

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

PhoneStore is a modern, responsive web application that allows users to browse and search mobile phones. Built with vanilla HTML, CSS, and JavaScript, this project demonstrates core front-end development concepts including API integration, responsive design, and DOM manipulation.

## ✨ Features

- 🔍 **Real-time Search** - Find phones by name or brand
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI** - Clean, professional interface with smooth animations
- ⚡ **Fast Performance** - Optimized loading and rendering
- 🔄 **Live Data** - Fetches updated phone information from API
- 📦 **No Dependencies** - Pure vanilla JavaScript implementation

## 🚀 Demo

[Live Demo Link] (Add your deployment link here)

![PhoneStore Screenshot](./screenshot.png)

## 📥 Installation

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls and CDN resources)

### Steps
1. Clone the repository:
```bash
git clone https://github.com/yourusername/phone-store.git
```

2. Navigate to project directory:
```bash
cd phone-store
```

3. Open `index.html` in your browser:
```bash
# For Windows
start index.html

# For Mac
open index.html

# For Linux
xdg-open index.html
```

### Font Awesome Setup
1. Visit [Font Awesome](https://fontawesome.com)
2. Sign up for a free account
3. Get your kit code
4. Replace in `index.html`:
```html
<script src="https://kit.fontawesome.com/YOUR-KIT-CODE.js"></script>
```

## 🎮 Usage

### Basic Navigation
1. **Browse Phones**: View default Samsung phones on page load
2. **Search**: Use the search bar to find specific models
3. **View Details**: Click "Show Details" for phone information
4. **Responsive**: Resize browser to see mobile-friendly layout

### Search Functionality
- Enter phone name or brand in search bar
- Press Enter or click search icon
- View filtered results instantly

## 🛠 Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Animations
- **JavaScript ES6+** - Async/Await, DOM Manipulation

### APIs
- **Programming Hero API** - Phone data
- **Google Fonts** - Typography
- **Font Awesome** - Icons

### Development Concepts
- Responsive Web Design
- Asynchronous Programming
- CSS Grid & Flexbox
- API Integration
- DOM Manipulation

## 📁 Project Structure

```
phone-store/
│
├── index.html              # Main application file
├── README.md               # Project documentation
├── assets/                 # Static resources
│   ├── images/            # Screenshots and icons
│   └── css/               # Additional stylesheets (if any)
│
└── documentation/          # Additional docs
    ├── api-reference.md
    └── deployment-guide.md
```

## 🔌 API Reference

### Base URL
```
https://openapi.programming-hero.com/api
```

### Endpoints

#### Get Phones by Search
```http
GET /api/phones?search={query}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search`  | `string` | **Required**. Search query |

#### Response Example
```json
{
  "status": true,
  "data": [
    {
      "slug": "apple_iphone_13_pro_max",
      "phone_name": "Apple iPhone 13 Pro Max",
      "brand": "Apple",
      "image": "https://example.com/image.png"
    }
  ]
}
```

#### Get Phone Details
```http
GET /api/phone/{slug}
```

## 🎨 Customization

### Adding New Features
1. **New Phone Brands**: Modify search functionality
2. **Additional Filters**: Implement price range, brand filters
3. **Enhanced Details**: Expand showDetails() function

### Styling Changes
- Modify CSS variables in `<style>` section
- Update color scheme in root variables
- Adjust grid layout in `.phones-grid`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Use semantic HTML5 elements
- Follow responsive design principles
- Maintain clean, commented code
- Test across multiple browsers

## 🐛 Troubleshooting

### Common Issues

**Icons not displaying?**
- Check Font Awesome kit code
- Ensure internet connection
- Verify class names include 'fa'

**API not responding?**
- Check internet connection
- Verify API endpoint is accessible
- Check browser console for errors

**Layout broken on mobile?**
- Ensure viewport meta tag is present
- Check CSS media queries
- Test responsive breakpoints

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Programming Hero](https://www.programming-hero.com/) for the API
- [Google Fonts](https://fonts.google.com/) for typography
- [Font Awesome](https://fontawesome.com/) for icons
- Inspiration from modern e-commerce designs

---

<div align="center">

### ⭐️ Don't forget to star this repository if you found it helpful!

**Built with ❤️ using HTML, CSS, and JavaScript**

</div>