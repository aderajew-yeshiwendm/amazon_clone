import 'package:flutter/material.dart';

class CustomTextFields extends StatelessWidget {
  final TextEditingController controller;
  final String hintText;
  const CustomTextFields(
      {super.key, required this.controller, required this.hintText});

  @override
  Widget build(BuildContext context) {
    return TextFormField(
        controller: controller,
        decoration: InputDecoration(
            hintText: hintText,
            border: const OutlineInputBorder(
                borderSide: BorderSide(
              color: Colors.black,
            )),
            enabledBorder: const OutlineInputBorder(
                borderSide: BorderSide(
              color: Colors.black,
            ))),
        validator: (value) {
          return null;
        });
  }
}
