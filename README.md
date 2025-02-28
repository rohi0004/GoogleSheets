# GoogleSheets :  https://google-sheets-five.vercel.app/
 
# Spreadsheet Interface

This project implements a web-based spreadsheet interface that mimics the functionality and visual design of **Google Sheets**. Built with **React.js**, it supports various mathematical functions, data quality operations, and interactive features like drag functionality for cells, basic formatting, and dynamic updates based on cell dependencies.

## Features

### 1. **Spreadsheet Interface**
- **Mimic Google Sheets UI**: The layout and visual design resemble Google Sheets, including the toolbar, formula bar, and cell structure.
- **Drag Functions**: Allows users to drag cell content, formulas, and selections, replicating Google Sheets' behavior.
- **Cell Dependencies**: Formulas and functions update dynamically when related cells are changed, reflecting accurate dependencies.
- **Basic Cell Formatting**: Support for formatting options like bold, italics, font size, and color.
- **Row/Column Operations**: Ability to add, delete, and resize rows and columns.

### 2. **Mathematical Functions**
- **SUM**: Calculates the sum of a range of cells.
- **AVERAGE**: Calculates the average of a range of cells.
- **MAX**: Returns the maximum value from a range of cells.
- **MIN**: Returns the minimum value from a range of cells.
- **COUNT**: Counts the number of cells containing numerical values in a range.

### 3. **Data Quality Functions**
- **TRIM**: Removes leading and trailing whitespace from a cell.
- **UPPER**: Converts the text in a cell to uppercase.
- **LOWER**: Converts the text in a cell to lowercase.
- **REMOVE_DUPLICATES**: Removes duplicate rows from a selected range.
- **FIND_AND_REPLACE**: Allows users to find and replace specific text within a range of cells.

## Prerequisites

Before running the project locally, make sure you have the following installed:

- **Node.js**: You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: npm comes with Node.js, so installing Node.js will install npm automatically.

## Installation & Running Locally

Follow these steps to set up and run the project locally:

### 1. **Clone the Repository**

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/rohi0004/GoogleSheets.git
```
Navigate to the Project Directory
```bash
cd GoogleSheets
```
Install Dependencies
```bash
npm install
```
 Run the Development Server
 This command will launch the React development server, and your application will be available in your browser at http://localhost:3000.
 ```bash
npm run start
```



