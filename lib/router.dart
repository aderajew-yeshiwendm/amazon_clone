import "package:amazon_clone/features/auth/screens/auth_screens.dart";
import "package:flutter/material.dart";

Route<dynamic> generateRoute(RouteSettings routeSettings) {
  switch (routeSettings.name) {
    case AuthScreen.AuthRoute:
      return MaterialPageRoute(
        settings: routeSettings,
        builder: (context) => const AuthScreen(),
      );
    default:
      return MaterialPageRoute(
        builder: (context) => const Scaffold(
          body: Text('you are in a wrong screen'),
        ),
      );
  }
}
