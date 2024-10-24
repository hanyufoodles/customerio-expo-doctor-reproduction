import { ExpoConfig } from 'expo/config';

export default ({ config }: { config: ExpoConfig }): ExpoConfig => ({
  ...config,
  android: {
    package: 'com.expo.playground',
  },
  ios: {
    bundleIdentifier: 'com.expo.playground',
  },
  plugins: [
    [
      'customerio-expo-plugin',
      {
        ios: {
          pushNotification: {
            useRichPush: true,
            env: {
              region: 'US',
              siteId: '12345',
              apiKey: '12345',
            },
          },
        },
      },
    ],
  ],
});
