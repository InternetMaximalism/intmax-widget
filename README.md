# INTMAX Wallet Widget

The INTMAX Wallet Widget Library provides a simple and efficient way to integrate the INTMAX Wallet into your web application. This library allows users to interact with their INTMAX Wallet directly from your site, offering a seamless and secure user experience.

## Installation

To use the INTMAX Wallet Widget in your project, you need to include it in your project dependencies.

```bash
npm install intmaxwidget
# or
yarn add intmaxwidget
```

## Usage

Here's a quick guide on how to use the INTMAX Wallet Widget in your application.

### 1. Import the Widget

First, import the `INTMAXWalletWidget` class from the `intmaxwidget` package.

```ts
import { INTMAXWalletWidget } from "intmaxwidget";
```

### 2. Initialize and Mount the Widget

Create an instance of the widget, passing the container element's ID and options for customization. Then, call the `mount()` method to render the widget.

```ts
const walletWidget = new INTMAXWalletWidget("wallet-container", {
  clientId: "your-client-id",
  theme: "dark",
  style: {
    width: "420px",
    height: "600px",
  },
  contentStyles: {
    primary: "255 0 0",
    gradientBtnForeground: "255 0 0",
    gradientBtn: "255 255 0",
  },
});

walletWidget.mount();
```

## Options

When initializing the `INTMAXWalletWidget`, you can provide several options to customize its behavior and appearance:

- `clientId` (required): Your unique client identifier.
- `url` (optional): The URL to the INTMAX Wallet, if you want to use a custom or development environment.
- `theme` (optional): The theme of the widget, either "light", "dark" or "system".
- `style` (optional): Custom styles for the iframe container, such as width and height.
- `contentStyles` (optional): Custom styles for the content inside the widget.
- `onLoad` (optional): A callback function that is called when the widget is fully loaded.
