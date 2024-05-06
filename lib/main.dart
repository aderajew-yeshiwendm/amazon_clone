import 'package:amazon_clone/features/auth/screens/auth_screens.dart';
import 'package:amazon_clone/router.dart';
import 'package:flutter/material.dart';

import 'constants/global_vars.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'amazon clone',
        theme: ThemeData(
            scaffoldBackgroundColor: GlobalVariables.backgroundColor,
            colorScheme: const ColorScheme.light(
              primary: GlobalVariables.secondaryColor,
            ),
            appBarTheme: const AppBarTheme(
                elevation: 0,
                iconTheme: IconThemeData(
                  color: Colors.black,
                ))),
        onGenerateRoute: (settings) => generateRoute(settings),
        home: const AuthScreen());
  }
}
