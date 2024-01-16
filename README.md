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
  contentOptions: {
    title: "Custom Wallet",
    lang: "en",
    theme: "light",
    horizontalLogo: {
      url: "https://example.com/logo.png",
        width: "110px",
        height: "110px",
      },
    styles: {
      primary: "rgb(52, 211, 153)",
      gradientBtnForeground: "rgb(29, 78, 216)",
      gradientSidebar: "rgb(245, 158, 11)",
      gradientBtn: "#fffff",
      foreground: "rgb(245, 158, 11)",
    },
  },
});
walletWidget.mount();
```

## Options

When initializing the `INTMAXWalletWidget`, you can provide several options to customize its behavior and appearance:

- `clientId` (required): Your unique client identifier.
- `url` (optional): The URL to the INTMAX Wallet, if you want to use a custom or development environment.
- `style` (optional): Custom styles for the iframe container, such as width and height.
- `contentOptions` (optional): Customization options for the content displayed within the widget, including language, theme, logos, and styles.
- `onLoad` (optional): A callback function that is called when the widget is fully loaded.

### contentOptions

- `lang` (optional): The language of the widget. Specify a language code (e.g., "en" for English) to localize the widget interface.
- `theme` (optional): The theme of the widget, either "light", "dark" or "system".
- `title` (optional): Set a custom title for the widget, which can be useful for branding or providing a specific call-to-action to users.
- `description` (optional): Provide a brief description of the widget or its functionality. This can help users understand the purpose of the widget and how it can assist them.
- `horizontalLogo` and `verticalLogo` (optional): These settings allow you to specify custom logos for different orientations, enhancing branding and ensuring consistent visual presentation across various screen sizes and layouts.
- `styles` (optional): Customize the look and feel of the widget's content with specific style properties. You can define colors, fonts, and other CSS properties to align the widget's appearance with your website's design.

### clientId

The client id is your unique client identifier. This is a critical component for identifying your application's requests to the INTMAX Wallet. To obtain a clientId, please contact our support team at <support@intmax.io> with your application details. Once your application is reviewed and approved, we will issue a unique clientId for your integration.

**Note:** clientId issuance is currently available to companies.

## Additional Resources

For more detailed information about the INTMAX Wallet Widget, including advanced configuration options, troubleshooting, and best practices, please refer to the following resources:

- **INTMAX Wallet Widget Integration Guide**: Visit our [comprehensive documentation](https://aquatic-paperback-675.notion.site/INTMAX-Wallet-Widget-Integration-Guide-274019b952fd4b23bc45dd9cd5643e8c) for in-depth details on using and customizing the INTMAX Wallet Widget.

- **Support**: If you encounter any issues or have further questions, please reach out to our support team at [support@intmax.io](mailto:support@intmax.io).
