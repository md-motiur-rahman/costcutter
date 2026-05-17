<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Recurrly (costcutter) Expo app.

**Changes made:**

- **`app.config.js`** (new): Converts `app.json` to a dynamic config that injects `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` from environment variables into `expo-constants` extras.
- **`src/config/posthog.ts`** (new): PostHog client singleton configured via `expo-constants`, with lifecycle event capture and debug mode in dev.
- **`app/_layout.tsx`**: Added `PostHogProvider` (wrapping inside `ClerkProvider`) and manual screen tracking using `usePathname` + `useEffect`.
- **`app/(auth)/sign-in.tsx`**: Added `user_signed_in`, `sign_in_failed` capture events; user identification on successful sign-in.
- **`app/(auth)/sign-up.tsx`**: Added `email_verification_submitted`, `user_signed_up`, `sign_up_failed` capture events; user identification on successful sign-up.
- **`app/(tabs)/settings.tsx`**: Added `user_signed_out` capture and `posthog.reset()` before Clerk sign-out.
- **`app/(tabs)/index.tsx`**: Added `subscription_card_expanded` capture (with subscription name, billing cycle, and category properties) when a card is expanded.
- **`app/(tabs)/insights.tsx`**: Added `insights_tab_viewed` capture on mount.
- **`app/subscriptions/[id].tsx`**: Added `subscription_detail_viewed` capture with `subscription_id` property on mount.
- **`.env`**: Added `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` (covered by `.gitignore`).
- **Packages installed**: `posthog-react-native`, `expo-file-system`, `expo-application`, `expo-device`, `expo-localization`.

## Events

| Event | Description | File |
|---|---|---|
| `user_signed_up` | User successfully completed sign-up and email verification | `app/(auth)/sign-up.tsx` |
| `user_signed_in` | User successfully signed in with email and password | `app/(auth)/sign-in.tsx` |
| `sign_in_failed` | Sign-in attempt failed due to an error | `app/(auth)/sign-in.tsx` |
| `sign_up_failed` | Sign-up attempt failed due to an error | `app/(auth)/sign-up.tsx` |
| `email_verification_submitted` | User submitted email verification code during sign-up | `app/(auth)/sign-up.tsx` |
| `user_signed_out` | User signed out from the Settings screen | `app/(tabs)/settings.tsx` |
| `subscription_card_expanded` | User expanded a subscription card to view details on the home screen | `app/(tabs)/index.tsx` |
| `subscription_detail_viewed` | User viewed the detail page of a specific subscription | `app/subscriptions/[id].tsx` |
| `insights_tab_viewed` | User navigated to the Insights tab | `app/(tabs)/insights.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/686873)
- [New sign-ups over time](/insights/e0OTVGNj)
- [Sign-up funnel: verify → complete](/insights/253fNJb9)
- [Authentication errors](/insights/tvf7S3CC)
- [User sign-outs (churn signal)](/insights/TX30RbLT)
- [Subscription card engagement](/insights/auSbUscf)

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-expo/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
