# INTMAX Wallet Widget

The INTMAX Wallet Widget Library provides a simple and efficient way to integrate the INTMAX Wallet into your web application. This library allows users to interact with their INTMAX Wallet directly from your site, offering a seamless and secure user experience.

## Installation

To use the INTMAX Wallet Widget in your project, you need to include it in your project dependencies.

```bash
npm install intmax-widget
# or
yarn add intmax-widget
```

## Usage

Here's a quick guide on how to use the INTMAX Wallet Widget in your application.

### 1. Import the Widget

First, import the `INTMAXWalletWidget` class from the `intmax-widget` package.

```ts
import { INTMAXWalletWidget } from "intmax-widget";
```

### 2. Initialize and Mount the Widget

Create an instance of the widget, passing the container element's ID and options for customization. Then, call the `mount()` method to render the widget.

```ts
const walletWidget = new INTMAXWalletWidget("wallet-container", {
  clientId: "your-client-id",
  lang: "en",
  theme: "light",
  contentStyles: {
    primary: "rgb(52, 211, 153)",
    gradientBtnForeground: "rgb(29, 78, 216)",
    gradientSidebar: "rgb(245, 158, 11)",
    gradientBtn: "#fffff",
    foreground: "rgb(245, 158, 11)",
  },
});
walletWidget.mount();
```

## Options

When initializing the `INTMAXWalletWidget`, you can provide several options to customize its behavior and appearance:

- `clientId` (required): Your unique client identifier.
- `url` (optional): The URL to the INTMAX Wallet, if you want to use a custom or development environment.
- `lang` (optional): The language of the widget. Specify a language code (e.g., "en" for English) to localize the widget interface.
- `theme` (optional): The theme of the widget, either "light", "dark" or "system".
- `style` (optional): Custom styles for the iframe container, such as width and height.
- `contentStyles` (optional): Custom styles for the content inside the widget.
- `onLoad` (optional): A callback function that is called when the widget is fully loaded.

### clientId

The client id is your unique client identifier. This is a critical component for identifying your application's requests to the INTMAX Wallet. To obtain a clientId, please contact our support team at <support@intmax.io> with your application details. Once your application is reviewed and approved, we will issue a unique clientId for your integration.

**Note:** clientId issuance is currently available to companies.

## Additional Resources

For more detailed information about the INTMAX Wallet Widget, including advanced configuration options, troubleshooting, and best practices, please refer to the following resources:

- **INTMAX Wallet Widget Integration Guide**: Visit our [comprehensive documentation](https://aquatic-paperback-675.notion.site/INTMAX-Wallet-Widget-Integration-Guide-274019b952fd4b23bc45dd9cd5643e8c) for in-depth details on using and customizing the INTMAX Wallet Widget.

- **Support**: If you encounter any issues or have further questions, please reach out to our support team at [support@intmax.io](mailto:support@intmax.io).
