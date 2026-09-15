<div align="center">

# Age Calculator

### Know your age down to the second

A lightweight web app that turns a birthdate into a full breakdown of elapsed time. Enter a date and instantly see how many years, months, weeks, days, hours, minutes, and seconds you have lived. Built with vanilla HTML, CSS, and JavaScript, with no dependencies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Input Format](#input-format)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

Age Calculator is a front-end only application that runs entirely in the browser. The user enters a birthdate, and the app calculates the difference from the current moment and presents it across seven units of time. The interface is clean, centered, and responsive, and the whole tool loads instantly with no build step.

## Features

- Calculates elapsed time in years, months, weeks, days, hours, minutes, and seconds
- Instant results rendered on submit without a page reload
- Date validation with a clear message for incorrectly formatted input
- Simple, responsive card layout with a warm gradient theme
- Zero dependencies and no build tooling

## Tech Stack

| Technology | Role |
| --- | --- |
| HTML5 | Page structure and input form |
| CSS3 | Styling, layout, and responsive design |
| JavaScript | Date parsing, calculation, and rendering |

## How It Works

When the form is submitted, the script reads the birthdate, splits it into day, month, and year, and builds a date object. If the date is invalid, the user is alerted. Otherwise the app subtracts the birthdate from the current time and converts the resulting duration into each unit before rendering the breakdown into the results panel.

## Project Structure

```
project28/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

No installation or server is required.

Clone the repository:

```bash
git clone https://github.com/Kumar44developer/AgeCalculator.git
```

Open `index.html` in any modern browser. For live reloading during development, the VS Code Live Server extension works well.

## Usage

1. Enter your birthdate in the input field.
2. Click Calculate Age.
3. View your age broken down into years, months, weeks, days, hours, minutes, and seconds.

## Input Format

Dates must be entered as `DD-MM-YYYY`, for example `15-08-1990`. Invalid or incomplete entries trigger a validation message.

## Roadmap

- Native date picker input
- Next birthday countdown
- Day-of-the-week and zodiac details
- Shareable results and copy to clipboard
- Light and dark theme options

## Contributing

Contributions are welcome. Fork the repository, create a feature branch, commit your changes, and open a pull request with a clear description.

## License

This project is released under the MIT License.

## Author

Created by [Kumar44developer](https://github.com/Kumar44developer).
